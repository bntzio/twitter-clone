Rails.application.routes.draw do
  devise_for :users
  
  resources :followers do |r|
    collection do
      get 'random'
    end
  end
  
  resources :tweets

  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  root 'home#index'
end
