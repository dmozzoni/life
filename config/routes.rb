Rails.application.routes.draw do
  devise_for :users
  root "checklists#index"
  resources :checklists do
    resources :butterflies
  end
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
