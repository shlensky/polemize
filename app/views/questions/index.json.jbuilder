json.array! @questions do |question|
  json.extract! question, :slug, :title, :description
  json.image question.image.url if question.image.present?
  json.category_title question.category.title if question.category.present?
end
