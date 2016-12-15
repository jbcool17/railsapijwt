class StaticController < ApplicationController
  include ActionController::HttpAuthentication::Basic::ControllerMethods

  before_action :tracker!
  http_basic_authenticate_with name: ENV['TRACKER_USER'], password: ENV['TRACKER_PASS']

  def tracker
    render json: Tracker.all
  end
end
