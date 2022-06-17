Rails.application.routes.draw do
  resources :items
  # , only: [:index, :create, :show]
  # resources :users, only: [:create]
  resources :outfits
  resources :item_outfit_joins

  get 'users/:user_id/items', to: 'users#my_items'
  get 'users/:user_id/outfits', to: 'users#my_outfits'
  post '/login', to: "sessions#create"
  get '/me', to: "users#show"
  delete '/logout', to: "sessions#destroy"

  # get "/cookie_click", to: 'sessions#click'
  # get '/users/:user_id/items', to: "items#mine"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
