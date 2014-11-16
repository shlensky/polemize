json.extract! @question, :title, :description, :pros_title, :cons_title, :pro_votes_count, :con_votes_count
json.pros @question.pros, :title, :description
json.cons @question.cons, :title, :description
