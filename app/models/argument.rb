class Argument
  include Mongoid::Document

  field :title, type: String
  field :description, type: String

  belongs_to :question

  validates_presence_of :title, :description, :question_id
end
