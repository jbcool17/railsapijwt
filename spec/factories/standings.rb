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

FactoryGirl.define do
  factory :standing do
    games 1
    wins 1
    losses 1
    losses_ot 1
    points 1
    points_pct 1
    goals 1
    opp_goals 1
    srs 1
    sos 1
    points_pct_old 1
    ro_wins 1
  end
end
