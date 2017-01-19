require 'geocoder'
require 'net/http'
require 'uri'
require 'json'

module Analytics
  class Tracker
    def self.set_info(ip_address)
      Geocoder.search(ip_address).first.data
    end

    def self.get_data

      uri = URI.parse("https://floating-tor-40582.herokuapp.com/tracker")
      request = Net::HTTP::Get.new(uri)
      request.basic_auth(ENV['TRACKER_USER'], ENV['TRACKER_PASS'])

      req_options = {
        use_ssl: uri.scheme == "https",
      }

      response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
        http.request(request)
      end

      # response.code
      JSON.parse(response.body)
    end
  end
end
