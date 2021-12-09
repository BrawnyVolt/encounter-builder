Rails.application.routes.draw do
  resources :encounters
  resources :monsters, only: [:index]
  resources :users, except: [:create, :show]

  
  post '/signup', to: 'users#create'

  get '/mystuff', to: 'users#show'


  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
    # Change me eventually
  
    # post '/login', to: 'sessions#create'
  
    # delete '/logout', to: 'sessions#destroy'
  
    # get '/', to: ''
end
