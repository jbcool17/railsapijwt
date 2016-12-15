class StaticController < ApplicationController
  # def index
  #   redirect_to '/react/'
  # end

  # def hockey
  #   redirect_to '/hockey/'
  # end

  def ip
    render json: { remote_ip: request.remote_ip, env: request.env['HTTP_X_REAL_IP']}
  end
end
