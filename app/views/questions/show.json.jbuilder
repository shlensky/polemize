json.extract! @question, :title, :description, :pros_title, :cons_title
json.pros @question.pros, :title, :description
json.cons @question.cons, :title, :description
