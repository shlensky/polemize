class Category
  include Mongoid::Document
  include Mongoid::Timestamps

  field :slug, type: String
  field :title, type: String

  has_many :questions, dependent: :nullify

  validates_presence_of :slug, :title

  scope :ordered, -> { order_by(title: :asc) }

  def to_param
    slug
  end
end
