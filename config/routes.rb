Rails.application.routes.draw do
  resources :genres
  resources :movies
  resources :users

  # get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'
  
end
