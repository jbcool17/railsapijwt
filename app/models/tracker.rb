# == Schema Information
#
# Table name: trackers
#
#  id           :integer          not null, primary key
#  ip           :string
#  country_code :string
#  country_name :string
#  region_code  :string
#  region_name  :string
#  city         :string
#  zip_code     :string
#  time_zone    :string
#  latitude     :integer
#  longitude    :integer
#  metro_code   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  controller   :string
#  action       :string
#  other        :text
#

class Tracker < ApplicationRecord
end
