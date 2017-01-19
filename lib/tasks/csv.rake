# Created for D3 Charts - WIP
require 'net/http'
require 'uri'
require 'json'

namespace :csv do
  desc "generate csv"
  task :standings => :environment do
    CSV.open("data.csv", "wb") do |csv|
      csv << Standing.attribute_names
      Standing.all.each do |r|
        # csv << r.attributes.values
        puts r.team_name
        begining = r.attributes.values.slice(0,13)
        middle = [Time.at(r.attributes.values.slice(13)).to_date,Time.at(r.attributes.values.slice(14)).to_date]
        ending = [r.attributes.values.last]

        csv << begining << middle << ending
      end
    end
    puts "CSV has been generated."

  end

  desc "generate csv"
  task :r_vs_i => :environment do
    CSV.open("data.csv", "wb") do |csv|
      csv << Standing.attribute_names
      Standing.all.each do |r|
        if (r.team_name == "New York Islanders" || r.team_name == "New York Rangers")
          csv << r.attributes.values
          puts r.team_name
          # begining = r.attributes.values.slice(0,13)
          # middle = [Time.at(r.attributes.values.slice(13)).to_date,Time.at(r.attributes.values.slice(14)).to_date]
          # ending = [r.attributes.values.last]
          # csv << begining << middle << ending
        end
      end
    end
    puts "CSV has been generated."
  end

  desc "generate tracker data"
  task :get_tracker_data => :environment do
    # Analytics::Tracker.get_data

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
    puts JSON.parse(response.body)
    puts "Tracker Data has been generated."
  end
end
