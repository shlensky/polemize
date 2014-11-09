namespace :db do
  desc 'Erase and fill database'
  task populate: :environment do
    populate_path = Rails.root.join('lib', 'tasks', 'populate')

    Question.delete_all
    questions = JSON.parse(File.read(populate_path.join('questions.json')))
    questions.each do |question|
      Question.create!(question)
    end
  end
end
