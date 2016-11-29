class Beer < ApplicationRecord

  before_create :set_date

  def set_date
    self.date = Time.now
  end
end
