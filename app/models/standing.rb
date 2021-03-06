# == Schema Information
#
# Table name: standings
#
#  id             :integer          not null, primary key
#  games          :integer
#  wins           :integer
#  losses         :integer
#  losses_ot      :integer
#  points         :integer
#  points_pct     :integer
#  goals          :integer
#  opp_goals      :integer
#  srs            :integer
#  sos            :integer
#  points_pct_old :integer
#  ro_wins        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  team_name      :string
#

class Standing < ApplicationRecord

  # Pagination
  self.per_page = 10

  def self.get_teams
    Standing.all.select("id, team_name").map(&:team_name).uniq
  end

  def self.get_team_standings(team)
    Standing.where(team_name: team)
  end
end
