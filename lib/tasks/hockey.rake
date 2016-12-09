require 'zamboni'

namespace :hockey do
  desc "generate hockey data"
  task :get_standings => :environment do
    data = Zamboni.get_standings

    data.each do |row|
      puts "Create record for #{row[0]}"
      Standing.create team_name: row[0], games: row[1][:games], wins: row[1][:wins],
                      losses: row[1][:losses], losses_ot:row[1][:losses_ot],
                      points: row[1][:points], points_pct: row[1][:points_pct],
                      goals: row[1][:goals], opp_goals: row[1][:opp_goals],
                      srs: row[1][:srs], sos: row[1][:sos], points_pct_old:row[1][:points_pct_old],
                      ro_wins: row[1][:ro_wins]
    end

    puts "-----"
    puts "DONE!"
    puts "-----"
  end

  desc "test"
  task :test => :environment do
    puts 'Running get hockey data test!'
  end
end
