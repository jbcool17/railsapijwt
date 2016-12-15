class StaticController < ApplicationController
  before_action :tracker!
  # before_action :authenticate_request!
  # def index
  #   redirect_to '/react/'
  # end

  # def hockey
  #   redirect_to '/hockey/'
  # end
  def tracker
    render json: Tracker.all
  end
end
