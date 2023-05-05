Rails.application.routes.draw do

  resources :users
  resources :questions
  resources :answers

  get '/questions/:id/verify_answer', to: 'questions#verify_answer'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
