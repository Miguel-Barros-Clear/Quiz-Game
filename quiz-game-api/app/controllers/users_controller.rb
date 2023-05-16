class UsersController < ApplicationController
  before_action :authenticate_request

  def index
    @users = User.all
    render json: @users
  end

  private
  
  def user_params
      params.require(:user).permit(:username, :email, :password, :confirm_password)
  end

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header

    begin
      decoded = JWT.decode(header, '#qu1z-g4m3$-4p1', true, algorithm: 'HS256')
      @current_user_id = decoded[0]['user_id']
    rescue JWT::DecodeError
      render json: { error: 'Token is invalid' }, status: 401
    end
  end
end
