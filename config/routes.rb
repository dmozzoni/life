Rails.application.routes.draw do
  resources :checklists do
    resources :butterflies
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
