Rails.application.routes.draw do
  resources :encounters
  resources :monsters, only: [:index]
  resources :users


  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
    # Change me eventually
  
    # post '/login', to: 'sessions#create'
  
    # delete '/logout', to: 'sessions#destroy'
  
    # get '/', to: ''
end
