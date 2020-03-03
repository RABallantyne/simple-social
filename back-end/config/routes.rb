Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/dashboard', to: 'users#dashboard'
  get '/users', to: 'users#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
