class Argument
  include Mongoid::Document

  field :title, type: String
  field :description, type: String

  belongs_to :question
end