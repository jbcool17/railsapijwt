Rails.application.routes.draw do

  get '/tracker', to: 'static#tracker'

  resources :users, only: :create do
    collection do
      post 'confirm'
      post 'login'
    end
  end

  scope module: 'api' do
    namespace :v1 do
      resources :beers
      get '/beers/search/:name', to: 'beers#search'

      # STANDINGS API
      get 'standings/dates', to: 'standings#dates'
      get 'standings/teams', to: 'standings#teams'

      get 'standings', to: 'standings#index', as: 'standings'
      get 'standings/:id', to: 'standings#show', as: 'standing'

      # Queries Most Up to Date Standings
      get 'standings/search/:team_name', to: 'standings#search'


    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
