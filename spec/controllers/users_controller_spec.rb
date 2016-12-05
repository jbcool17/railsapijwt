require 'spec_helper'

describe UsersController do
  describe "POST #create - USER" do
    before(:each) do
      @user_good = {email: 'johntest@user.com', password: 'test123', password_confirmation: 'test123'}
      @user_bad_password = {email: 'johntest@user.com', password: 'test123', password_confirmation: 'test12'}
      @user_bad_email= {email: '', password: 'test123', password_confirmation: 'test123'}
    end

    it "get 201 status" do
      get :create, method: :post, params: {user: @user_good}

      expect(response).to have_http_status(201)
    end

    it "USER create successful message" do
      get :create, method: :post, params: {user: @user_good}

      json = JSON.parse(response.body)
      expect(json['status']).to eq("User created successfully")
    end

    it "USER create unsuccessful message - No Email" do
      get :create, method: :post, params: {user: @user_bad_email}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Email can't be blank")
    end

    it "USER create unsuccessful message - No Password" do
      get :create, method: :post, params: {user: {email: 'test@user.com', password_confirmation:'test123'}}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Password can't be blank")
    end

    it "USER create unsuccessful message - Password Confirmation" do
      get :create, method: :post, params: {user: @user_bad_password}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Password confirmation doesn't match Password")
    end
  end
end
