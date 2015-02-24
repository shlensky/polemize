class Argument
  include Mongoid::Document

  field :_type, type: String
  field :title, type: String
  field :description, type: String

  belongs_to :question

  validates_presence_of :title, :description, :question
  validates :_type, inclusion: { in: %w[Pro Con] }, presence: true
end
