Rails.application.routes.draw do


  root :to => 'static#index'

  resources :users, only: :create do
    collection do
      post 'confirm'
      post 'login'
    end
  end


    # scope '/api/v1' do
    #   resources :beers
    #   get '/beers/search/:name', to: 'beers#search'
    # end

  scope module: 'api' do
    namespace :v1 do
      resources :beers
      get '/beers/search/:name', to: 'beers#search'

      resources :standings
      get 'standings/search/:team_name', to: 'standings#search'
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
