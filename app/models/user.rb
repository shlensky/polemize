class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :provider, type: String
  field :uid, type: String
  field :name, type: String
  field :image, type: String
  field :is_admin, type: Boolean

  has_many :votes, dependent: :destroy
end
