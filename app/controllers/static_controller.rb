class StaticController < ApplicationController
  before_action :tracker!

  def tracker
    render json: Tracker.all
  end
end
