class QuestionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error # This is a custom error message

    def index
        @questions = Question.all
        render json: @questions
    end

    def create
        @question = Question.create(question_params)
        render json: @question
    end

    def show
        @question = Question.find(params[:id])
        render json: @question
    end

    def update
        @question = Question.find(params[:id])
        @question.update(question_params)
        render json: @question
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render json: @question
    end

    def verify_answer
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
    end

    def render_not_found_error # This is a custom error message
        render json: { error: "Question not found" }, status: :not_found
    end

    private
    
    def question_params
        params.require(:question).permit(:content, :option_a, :option_b, :option_c, :option_d, :answer)
    end
end
