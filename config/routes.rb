Rails.application.routes.draw do
  resources :encounters
  resources :monsters, only: [:index]
  resources :users



    # Change me eventually
    root 'test#index' 
  
    # post '/login', to: 'sessions#create'
  
    # delete '/logout', to: 'sessions#destroy'
  
    # get '/', to: ''
  
    get "/test", to: "test#index"
end
