class Page
  include Mongoid::Document
  include Mongoid::Timestamps

  field :slug, type: String
  field :position, type: Integer
  field :title, type: String
  field :body, type: String
  field :page_title, type: String
  field :meta_description, type: String
  field :meta_keywords, type: String

  validates_presence_of :slug, :position, :title, :body

  def to_param
    slug
  end
end
