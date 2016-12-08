module Api::V1
  class StandingsController < ApiController
    before_action :set_standing, only: [:show, :update, :destroy]
    before_action :search_standings_by_name, only: :search

    # GET /standings
    def index
      @standings = Standing.all

      render json: @standings
    end

    # GET /standings/1
    def show
      render json: @standing
    end

    def search
      render json: @standings
    end

    # POST /standings
    def create
      @standing = Standing.new(standing_params)

      if @standing.save
        render json: @standing, status: :created, location: @standing
      else
        render json: @standing.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /standings/1
    def update
      if @standing.update(standing_params)
        render json: @standing
      else
        render json: @standing.errors, status: :unprocessable_entity
      end
    end

    # DELETE /standings/1
    def destroy
      @standing.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_standing
        @standing = Standing.find(params[:id])
      end

      def search_standings_by_name
        @standings = Standing.where("lower(team_name) LIKE ?",
                                    "%#{params[:team_name].downcase}%").sort_by(&:points).reverse
      end

      # Only allow a trusted parameter "white list" through.
      def standing_params
        params.require(:standing).permit(:team_name, :games, :wins, :losses, :losses_ot, :points, :points_pct, :goals, :opp_goals, :srs, :sos, :points_pct_old, :ro_wins)
      end
  end
end
