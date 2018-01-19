Rails.application.routes.draw do
  root to: 'home#index'

  resources :sources, only: [ :index ]
  resources :documents, only: [ :index ]

  get  '/checks', to: 'checks#create'
  post '/checks', to: 'checks#create'  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
