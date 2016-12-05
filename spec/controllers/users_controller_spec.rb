require 'spec_helper'
require 'jwt'

describe UsersController do
  describe "#create" do
    before(:each) do
      @user_good = {email: 'johntest@user.com', password: 'test123', password_confirmation: 'test123'}
      @user_bad_password = {email: 'johntest@user.com', password: 'test123', password_confirmation: 'test12'}
      @user_no_email= {email: '', password: 'test123', password_confirmation: 'test123'}
    end

    it "creating user successfully" do
      get :create, method: :post, params: {user: @user_good}

      json = JSON.parse(response.body)
      expect(response).to have_http_status(201)
      expect(json['status']).to eq("User created successfully")
    end

    it "unsuccessful message - No Email" do
      get :create, method: :post, params: {user: @user_no_email}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Email can't be blank")
    end

    it "unsuccessful message - No Password" do
      get :create, method: :post, params: {user: {email: 'test@user.com', password_confirmation:'test123'}}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Password can't be blank")
    end

    it "unsuccessful message - Password Confirmation" do
      get :create, method: :post, params: {user: @user_bad_password}

      json = JSON.parse(response.body)
      expect(json['errors'].first).to eq("Password confirmation doesn't match Password")
    end

    describe "#confirm" do
      before(:each) do
        user_info = {email: 'johntest@user.com', password: 'test123', password_confirmation: 'test123'}
        create_user = get :create, method: :post, params: {user: user_info}
        created_user_json = JSON.parse(create_user.body)
        @token = created_user_json['confirm_link'].split('token=').last
      end

      it 'confirms user successfully' do
        get :confirm, method: :post, params: {token: @token}

        json = JSON.parse(response.body)

        expect(json['status']).to eq("User confirmed successfully")
      end
    end

    describe "#login" do
      before(:each) do
        user_info = {email: 'test@user.com', password: 'test123', password_confirmation: 'test123'}
        create_user = get :create, method: :post, params: {user: user_info}
        created_user_json = JSON.parse(create_user.body)
        token = created_user_json['confirm_link'].split('token=').last
        confirmed_user = get :confirm, method: :post, params: {token: token}
      end

      it 'recieves auth token' do
        get :login, method: :post, params: {email: 'test@user.com', password: 'test123'}

        json = JSON.parse(response.body)
        token = json['auth_token']

        expect(token.class).to eq(String)
        jwt_decode = JWT.decode(token, nil, false)
        expect(JWT.decode(token, nil, false)).to eq(jwt_decode)
      end
    end
  end
end
