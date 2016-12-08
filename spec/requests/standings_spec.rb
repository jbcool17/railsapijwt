require 'rails_helper'

RSpec.describe "Standings", type: :request do
  describe "GET /standings" do
    it "works! (now write some real specs)" do
      get v1_standings_path
      expect(response).to have_http_status(200)
    end
  end
end
