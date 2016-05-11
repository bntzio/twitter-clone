Rails.application.routes.draw do
  resources :tweets
  devise_for :users
  
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  root 'home#index'
end
