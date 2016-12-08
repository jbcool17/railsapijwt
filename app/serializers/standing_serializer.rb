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
  attributes :id, :team_name, :games, :wins, :losses, :losses_ot, :points, :points_pct, :goals, :opp_goals, :srs, :sos, :points_pct_old, :ro_wins
end
