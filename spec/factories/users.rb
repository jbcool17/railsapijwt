# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  email                :string           not null
#  password_digest      :string           not null
#  confirmation_token   :string
#  confirmed_at         :datetime
#  confirmation_sent_at :datetime
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  admin                :boolean
#

FactoryGirl.define do
  factory :user do |u|
    u.email 'test@user.com'
    u.password 'test123'
    u.password_confirmation 'test123'
  end
end
