require "rails_helper"

RSpec.describe Api::V1::StandingsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/v1/standings").to route_to("api/v1/standings#index")
    end

    # it "routes to #new" do
    #   expect(:get => "/standings/new").to route_to("standings#new")
    # end

    it "routes to #show" do
      expect(:get => "/v1/standings/1").to route_to("api/v1/standings#show", :id => "1")
    end

    # it "routes to #edit" do
    #   expect(:get => "/standings/1/edit").to route_to("standings#edit", :id => "1")
    # end

    it "routes to #create" do
      expect(:post => "/v1/standings").to route_to("api/v1/standings#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/v1/standings/1").to route_to("api/v1/standings#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/v1/standings/1").to route_to("api/v1/standings#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/v1/standings/1").to route_to("api/v1/standings#destroy", :id => "1")
    end

  end
end
