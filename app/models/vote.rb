class Vote
  include Mongoid::Document

  field :answer, type: String

  belongs_to :user
  belongs_to :question

  validates_presence_of :user, :question
  validates :answer, inclusion: { in: %w(pro con) }
end
