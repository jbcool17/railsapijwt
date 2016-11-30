module Api::V1
  class BeersController < ApiController
    before_action :authenticate_request!, :except => [:search]
    before_action :set_beer, only: [:show, :update, :destroy]
    before_action :set_beer_by_name, only: :search

    # GET /beers
    def index
      @beers = Beer.all

      render json: @beers
    end

    # GET /beers/1
    def show
      render json: @beer
    end

    def search
      render json: @beer
    end

    # POST /beers
    def create
      @beer = Beer.new(beer_params)

      if @beer.save
        render json: @beer, status: :created, location: @beer
      else
        render json: @beer.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /beers/1
    def update
      if @beer.update(beer_params)
        render json: @beer
      else
        render json: @beer.errors, status: :unprocessable_entity
      end
    end

    # DELETE /beers/1
    def destroy

      @beer.destroy

      render json: {status: 'Beer Deleted!'}
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_beer
        @beer = Beer.find(params[:id])
      end

      def set_beer_by_name
        @beer = Beer.find_by(name: params[:name])
      end
      # Only allow a trusted parameter "white list" through.
      # def beer_params
      #   params.fetch(:beer, {})
      # end
      def beer_params
      params.require(:beer).permit(:name, :style, :alcohol)
    end
  end
end
