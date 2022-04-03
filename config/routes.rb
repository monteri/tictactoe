Rails.application.routes.draw do
  resources :games, only: [:create, :show] do
    resources :moves, only: [:create]
  end
  root 'pages#index'
  mount ActionCable.server => '/cable'
end
