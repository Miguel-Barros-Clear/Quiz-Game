class UsersController < ApplicationController
    def create
       @user = User.new(user_params)
       if @user.save
           render json: @user
       else
           render json: { error: "Username already taken" }, status: :bad_request
       end
    end

    def login
        @user = User.find_by(username: params[:username])
        if session[:user_id] 
            render json: { error: "Already logged in" }, status: :bad_request
        else
            if @user && @user.authenticate(params[:password])
                session[:user_id] = @user.id
                render json: @user
            else
                render json: { error: "Invalid username or password" }, status: :unauthorized
            end
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
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
