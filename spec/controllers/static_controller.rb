require 'spec_helper'


describe StaticController do
  describe "GET #index" do
    it "responds successfully with an HTTP 302 status code" do
      get :index
      expect(response).to have_http_status(302)
    end

    it "root redirects to /react/ page" do
      get :index
      expect(response).to redirect_to('/react/')
    end
  end
end
