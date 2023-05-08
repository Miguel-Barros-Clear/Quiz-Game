class QuestionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error # This is a custom error message
    
    def index
        @user = User.find_by(id: session[:user_id])
        if @user
            @questions = Question.all
            render json: @questions
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def create
        @user = User.find_by(id: session[:user_id])
        if @user
            @question = Question.create(question_params)
            render json: @question
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end


    def show
        @user = User.find_by(id: session[:user_id])
        if @user
            @question = Question.find(params[:id])
            render json: @question
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def update
        @user = User.find_by(id: session[:user_id])
        if @user
            @question = Question.find(params[:id])
            @question.update(question_params)
            render json: @question
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def destroy
        @user = User.find_by(id: session[:user_id])
        if @user
            @question = Question.find(params[:id])
            @question.destroy
            render json: @question
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def verify_answer
        @user = User.find_by(id: session[:user_id])
        if @user
            @question = Question.find(params[:id])
            @option = params.require(:option)

            if @option != "a" && @option != "b" && @option != "c" && @option != "d"
                render json: { error: "Invalid option" }, status: :bad_request
            else
                if @question.answer == "option_#{@option}"
                    render json: { correct: true }
                else
                    render json: { correct: false }
                end
            end
        else
            render json: { error: "Not logged in" }, status: :bad_request
        end
    end

    def render_not_found_error # This is a custom error message
        render json: { error: "Question not found" }, status: :not_found
    end

    private
    
    def question_params
        params.require(:question).permit(:content, :option_a, :option_b, :option_c, :option_d, :answer)
    end
end
