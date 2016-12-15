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
#

FactoryGirl.define do
  factory :tracker do
    ip "MyString"
    country_code "MyString"
    country_name "MyString"
    region_code "MyString"
    region_name "MyString"
    city "MyString"
    zip_code "MyString"
    time_zone "MyString"
    latitude 1
    longitude 1
    metro_code 1
  end
end
