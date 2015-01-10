json.extract! @question, :title, :description, :pros_title, :cons_title, :pro_votes_count, :con_votes_count
json.image @question.image.url if @question.image.present?
json.pros @question.pros, :title, :description
json.cons @question.cons, :title, :description
