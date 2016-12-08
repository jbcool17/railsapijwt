require "rails_helper"

RSpec.describe StandingsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/standings").to route_to("standings#index")
    end

    # it "routes to #new" do
    #   expect(:get => "/standings/new").to route_to("standings#new")
    # end

    it "routes to #show" do
      expect(:get => "/standings/1").to route_to("standings#show", :id => "1")
    end

    # it "routes to #edit" do
    #   expect(:get => "/standings/1/edit").to route_to("standings#edit", :id => "1")
    # end

    it "routes to #create" do
      expect(:post => "/standings").to route_to("standings#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/standings/1").to route_to("standings#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/standings/1").to route_to("standings#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/standings/1").to route_to("standings#destroy", :id => "1")
    end

  end
end
