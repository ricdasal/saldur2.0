Rails.application.routes.draw do
  resources :productos
  resources :secret_menu_items
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #resources :secret_menu_items, only: [:index, :show, :create, :update, :destroy]
  resources :productos, only: [:index, :create, :update, :destroy]

end
#Ricardo Salazar