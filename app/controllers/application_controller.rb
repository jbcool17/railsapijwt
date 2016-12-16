class ApplicationController < ActionController::API
  require 'json_web_token'
  require 'analytics/tracker'

  protected

  # get ip
  def tracker!
    ip_address = request.remote_ip

    data = Analytics::Tracker.set_info(ip_address)

    Tracker.create ip: ip_address,
                     country_code: data['country_code'],
                     country_name: data['country_name'],
                     region_code: data['region_code'],
                     region_name: data['region_name'],
                     city: data['city'] || 'test',
                     zip_code: data['zip_code'],
                     time_zone: data['time_zone'],
                     latitude: data['latitude'].to_i,
                     longitude: data['longitude'].to_i,
                     metro_code: data['metro_code'].to_i,
                     other: params.to_json
  end

  # Validates the token and user and sets the @current_user scope
  def authenticate_request!

    if !payload || !JsonWebToken.valid_payload(payload.first)
      return invalid_authentication
    end

    load_current_user!
    invalid_authentication unless @current_user
  end

  # Returns 401 response. To handle malformed / invalid requests.
  def invalid_authentication
    render json: {error: 'Invalid Request'}, status: :unauthorized
  end

  private
  # Deconstructs the Authorization header and decodes the JWT token.
  def payload
    auth_header = request.headers['Authorization']
    token = auth_header.split(' ').last
    JsonWebToken.decode(token)
  rescue
    nil
  end

  # Sets the @current_user with the user_id from payload
  def load_current_user!
    @current_user = User.find_by(id: payload[0]['user_id'])
  end

end
