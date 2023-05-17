require 'jwt'

class AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:username] || params[:email])
    
    if user && user.authenticate(params[:password])
      token = JWT.encode({ user_id: user.id }, '#qu1z-g4m3$-4p1')
      render json: { user: user, token: token }
    else
      render json: { error: 'Credenciais inválidas' }, status: :unauthorized
    end
  end

  def signup
    user = User.new(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      token = JWT.encode({ user_id: user.id }, '#qu1z-g4m3$-4p1')
      render json: { token: token }
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
