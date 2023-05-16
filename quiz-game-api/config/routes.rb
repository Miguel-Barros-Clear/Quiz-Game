Rails.application.routes.draw do

  resources :users
  resources :questions
  resources :answers

  get '/questions/:id/verify_answer', to: 'questions#verify_answer'

  post '/questions/:id/answer', to: 'answers#create'

  post '/signup', to: 'auth#signup'
  post '/register', to: 'auth#signup'
  post '/login', to: 'auth#login'
  delete '/logout', to: 'users#logout'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
