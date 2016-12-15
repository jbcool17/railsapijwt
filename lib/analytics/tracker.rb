require 'geocoder'

module Analytics
  class Tracker
    def self.set_info(ip_address)
      Geocoder.search(ip_address).first.data
    end
  end
end
