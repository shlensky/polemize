class ArgumentsController < RestController
  before_filter :ensure_authorization, only: [:create]
  before_action :set_question

  def create
    @argument = Argument.new(argument_attributes)
    unprocessable_entity(@argument) unless @argument.save
  end

  private

  def set_question
    @question = Question.find_by(slug: params[:question_slug])
  end

  def argument_attributes
    params.permit(:title, :description, :_type).merge(question: @question)
  end
end
