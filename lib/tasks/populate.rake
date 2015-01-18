namespace :populate do
  def read_json(filename)
    populate_path = Rails.root.join('lib', 'tasks', 'populate')
    JSON.parse(File.read(populate_path.join(filename)))
  end

  desc 'Erase and fill database'
  task all: [:questions, :pages]

  desc 'Populate questions'
  task questions: :environment do
    Question.delete_all
    records = read_json('questions.json')
    records.each do |attributes|
      Question.create!(attributes)
    end
  end

  desc 'Populate static pages'
  task pages: :environment do
    Page.delete_all
    records = read_json('pages.json')
    records.each do |attributes|
      Page.create!(attributes)
    end
  end
end
