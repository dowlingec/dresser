Rails.application.routes.draw do
  resources :items, only: [:index, :create, :show]

  # get '/users/:user_id/items', to: "items#mine"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
