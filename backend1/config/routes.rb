Rails.application.routes.draw do
  resources :items
  resources :users
  resources :item_pedidos
  resources :pedidos
  resources :clientes
  resources :productos
  resources :secret_menu_items
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #resources :secret_menu_items, only: [:index, :show, :create, :update, :destroy]
  resources :items, only: [:index, :create]
  resources :clientes, only: [:index, :create, :update, :destroy]
  resources :pedidos, only: [:index, :create, :update, :destroy]
  resources :items_pedidos, only: [:index, :create, :update, :destroy]
  #resources :users, only: [:index, :create, :update, :destroy, validate]
  

end
#Ricardo Salazar