class AnswersController < ApplicationController
    def index
        @user = User.find_by(id: session[:user_id])
        if @user
            @answers = Answer.all
            render json: @answers
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def create
        @user = User.find_by(id: session[:user_id])
        @question = Question.find(params[:id])
        if @user
            @answer = Answer.new(answer_params)
            @answer.user = @user
            @answer.question = @question
            if @answer.answer === "option_a" || @answer.answer === "option_b" || @answer.answer === "option_c" || @answer.answer === "option_d"
                @answer.save
                render json: @answer
            else
                render json: { error: "Invalid answer" }, status: :bad_request
            end
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    private 

    def answer_params
        params.require(:answer).permit(:answer)
    end
end
