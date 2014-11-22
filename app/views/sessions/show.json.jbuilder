if current_user.present?
  json.extract! current_user, :name, :image
end
