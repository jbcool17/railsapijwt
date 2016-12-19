class StaticController < ApplicationController
  include ActionController::HttpAuthentication::Basic::ControllerMethods
  before_action :http_basic_authenticate

  def tracker
    render json: Tracker.all
  end

  private

  def http_basic_authenticate
    authenticate_or_request_with_http_basic do |name, password|
      name == ENV['TRACKER_USER'] && password == ENV['TRACKER_PASS']
    end
  end
end
