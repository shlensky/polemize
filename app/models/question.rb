class Question
  include Mongoid::Document
  include Mongoid::Timestamps

  field :slug, type: String
  field :title, type: String
  field :description, type: String
  field :pros_title, type: String
  field :cons_title, type: String

  mount_uploader :image, ImageUploader

  has_many :pros, dependent: :destroy
  has_many :cons, dependent: :destroy
  has_many :votes, dependent: :destroy

  accepts_nested_attributes_for :pros, :cons

  scope :ordered, -> { order_by(title: :asc) }

  def to_param
    slug
  end

  def pro_votes_count
    votes.where(answer: 'pro').count
  end

  def con_votes_count
    votes.where(answer: 'con').count
  end
end
