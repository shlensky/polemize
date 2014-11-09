class QuestionsController < ApplicationController
  def index
    @questions = Question.ordered
  end

  def show
    @question = Question.find_by(slug: params[:slug])
  end
end
