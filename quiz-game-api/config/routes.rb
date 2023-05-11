Rails.application.routes.draw do

  resources :users
  resources :questions
  resources :answers

  get '/questions/:id/verify_answer', to: 'questions#verify_answer'

  post '/questions/:id/answer', to: 'answers#create'

  post '/signup', to: 'users#create'
  post '/register', to: 'users#create'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
