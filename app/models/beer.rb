# == Schema Information
#
# Table name: beers
#
#  id         :integer          not null, primary key
#  date       :datetime
#  name       :string
#  style      :string
#  alcohol    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  hop        :string
#  yeast      :string
#  malts      :string
#  ibu        :string
#  blg        :string
#

class Beer < ApplicationRecord

  before_create :set_date

  def set_date
    self.date = Time.now
  end
end
