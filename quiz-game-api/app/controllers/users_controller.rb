class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.password = params[:password]

    if @user.valid?
      if User.exists?(username: @user.username)
        render json: { error: "Username already exists" }, status: :bad_request
      elsif User.exists?(email: @user.email)
        render json: { error: "Email already exists" }, status: :bad_request
      else
        @user.save
        session[:user_id] = @user.id
        render json: @user
      end
    else
      error_messages = @user.errors.messages.map { |attribute, messages| "#{attribute.capitalize} #{messages.join(", ")}" }
      error_message = error_messages.join(", ")
      render json: { error: error_message }, status: :bad_request
    end
  end

  def login
      @user = User.find_by(username: params[:username])
      if !session[:user_id] 
          if @user && @user.authenticate(params[:password])
              session[:user_id] = @user.id
              render json: @user
          else
              render json: { error: "Invalid username or password" }, status: :unauthorized
          end
      else
          render json: { error: "Already logged in" }, status: :bad_request
      end
  end

  def logout
      if session[:user_id]
          session.delete(:user_id)
          render json: { message: "Logged out" }
      else
          render json: { error: "Not logged in" }, status: :bad_request
      end
  end

  private
  
  def user_params
      params.require(:user).permit(:username, :email, :password, :confirm_password)
  end
end
