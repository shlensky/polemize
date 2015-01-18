class QuestionsController < ApplicationController
  def index
    @questions = Question.enabled.ordered
  end

  def show
    @question = Question.enabled.find_by(slug: params[:slug])
  end
end
