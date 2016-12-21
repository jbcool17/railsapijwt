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
    puts "Created CSV"

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
    puts "Created CSV"
  end
end
