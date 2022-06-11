Rails.application.routes.draw do
  resources :items, only: [:index, :create, :show]
  resources :users, only: [:show, :create]

  get 'users/:user_id/items', to: 'users#my_items'
  
  # get '/users/:user_id/items', to: "items#mine"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
