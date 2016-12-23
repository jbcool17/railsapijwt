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

class StandingSerializer < ActiveModel::Serializer
  attributes :id, :team_name, :games,
              :wins, :losses, :losses_ot, :points, :date
              
  link(:show) { v1_standing_url(object) }

  def date
    Time.at(object.created_at).to_date
  end
end
