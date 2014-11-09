class Question
  include Mongoid::Document
  include Mongoid::Timestamps

  field :slug, type: String
  field :title, type: String
  field :description, type: String
  field :pros_title, type: String
  field :cons_title, type: String

  has_many :pros, dependent: :destroy
  has_many :cons, dependent: :destroy

  accepts_nested_attributes_for :pros, :cons

  scope :ordered, -> { order_by(title: :asc) }

  def to_param
    slug
  end
end
