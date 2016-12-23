class TrackerSerializer < ActiveModel::Serializer
  attributes :id, :ip,:country_code,:country_name,:region_code,
              :region_name,:city,:zip_code,:time_zone,:latitude,
              :longitude,:metro_code,:controller,:action,:other,
              :created_at
end
