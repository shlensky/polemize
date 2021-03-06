class Question
  include Mongoid::Document
  include Mongoid::Timestamps

  field :enabled, type: Boolean
  field :slug, type: String
  field :title, type: String
  field :description, type: String
  field :pros_title, type: String
  field :cons_title, type: String
  field :base_pro_votes_count, type: Integer, default: 0
  field :base_con_votes_count, type: Integer, default: 0
  field :page_title, type: String
  field :meta_description, type: String
  field :meta_keywords, type: String

  mount_uploader :image, ImageUploader

  belongs_to :category
  has_many :pros, dependent: :destroy
  has_many :cons, dependent: :destroy
  has_many :votes, dependent: :destroy

  accepts_nested_attributes_for :pros, :cons

  validates_presence_of :slug, :title, :description, :pros_title, :cons_title

  scope :ordered, -> { order_by(title: :asc) }
  scope :enabled, -> { where(enabled: true) }

  def to_param
    slug
  end

  def pro_votes_count
    base_pro_votes_count + votes.where(answer: 'pro').count
  end

  def con_votes_count
    base_con_votes_count + votes.where(answer: 'con').count
  end
end
