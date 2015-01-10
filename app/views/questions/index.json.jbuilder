json.array! @questions do |question|
  json.extract! question, :slug, :title, :description
  json.image question.image.url if question.image.present?
end
