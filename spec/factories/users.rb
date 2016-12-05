FactoryGirl.define do
  factory :user do |u|
    u.email 'test@user.com'
    u.password 'test123'
    u.password_confirmation 'test123'
  end
end
