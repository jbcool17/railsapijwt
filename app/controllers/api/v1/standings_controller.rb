module Api::V1
  class StandingsController < ApiController
    before_action :authenticate_request!, only: [:create, :update, :destroy]
    before_action :set_standing, only: [:show, :update, :destroy]
    before_action :search_current_standings_by_team_name, only: :search
    before_action :search_standings_by_date, only: :dates
    before_action :search_standings_by_team, only: :teams

    # GET /standings
    # Results are paginated
    def index
      page_number = params[:page] ? params[:page][:number] : 1
      per_page = params[:per_page] ? params[:per_page] : 10

      @standings = Standing.paginate(page: page_number, per_page: per_page)

      render json: @standings
    end

    # GET /standings/1
    def show
      render json: @standing
    end

    # GET /standings/search/:team_name
    def search
      render json: @standings
    end

    # GET /standings/dates?date=2016-12-17
    # Gets record before date
    def dates
      render json: @standings
    end

    # GET /standings/teams - Teams List
    # GET /standings/teams?name=Montreal%20Canadiens
    def teams
      render json: @team_query
    end

    # POST /standings
    # def create
    #   @standing = Standing.new(standing_params)
    #
    #   if @standing.save
    #     render json: @standing, status: :created, location: @standing
    #   else
    #     render json: @standing.errors, status: :unprocessable_entity
    #   end
    # end

    # PATCH/PUT /standings/1
    # def update
    #   if @standing.update(standing_params)
    #     render json: @standing
    #   else
    #     render json: @standing.errors, status: :unprocessable_entity
    #   end
    # end

    # DELETE /standings/1
    # def destroy
    #   @standing.destroy
    # end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_standing
        @standing = Standing.find(params[:id])
      end

      def search_current_standings_by_team_name
        # Query teams similar to...
        standings = Standing.where('lower(team_name) LIKE ?',"%#{params[:team_name].downcase}%").sort_by(&:points).reverse

        # Collect dates to get most recent
        dates = standings.collect(&:created_at)

        # Reformat date to compare
        standings.each { |r| r.created_at = Time.at(r.created_at).to_date }

        # Select records with most recent date
        @standings = standings.select { |r| r.created_at == Time.at(dates.max).to_date }
      end

      def search_standings_by_date
        date = params[:date] ? params[:date] : Time.now.days_ago(1)

        # Gets records before date
        @standings = Standing.where("created_at < ?",  date)
      end

      def search_standings_by_team
        @team_query = params[:name] ? Standing.where(team_name: params[:name]) : Standing.get_teams
      end

      # Only allow a trusted parameter "white list" through.
      def standing_params
        params.require(:standing).permit(:team_name, :games, :wins, :losses, :losses_ot, :points, :points_pct, :goals, :opp_goals, :srs, :sos, :points_pct_old, :ro_wins)
      end
  end
end
