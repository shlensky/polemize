class VotesController < ApplicationController
  before_filter :ensure_authorization, only: [:create, :update]
  before_action :set_question
  before_action :set_vote, only: [:update]

  def index
    @votes = if current_user.present?
      current_user.votes.where(question: @question)
    else
      []
    end
  end

  def create
    @vote = current_user.votes.where(question: @question).first_or_initialize
    @vote.update!(vote_params)
  end

  def update
    @vote.update!(vote_params)
  end

  private

  def set_question
    @question = Question.find_by(slug: params[:question_slug])
  end

  def set_vote
    @vote = current_user.votes.where(question: @question).find(params[:id])
  end

  def vote_params
    params.permit(:answer)
  end
end
