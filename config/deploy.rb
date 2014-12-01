# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'polemize'
set :repo_url, 'git@github.com:shlensky/polemize.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app
set :deploy_to, '/home/marina/domains/polemize.ru/app'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
set :linked_files, %w{config/mongoid.yml config/secrets.yml}

# Default value for linked_dirs is []
set :linked_dirs, %w{log tmp/pids tmp/cache}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3

set :puma_bind, 'tcp://0.0.0.0:9292'

namespace :deploy do
  desc 'Install bower packages'
  task :bower do
    on roles(:app) do
      within release_path do
        execute :rake, 'bower:install'
      end
    end
  end
  before 'deploy:updated', 'deploy:bower'

  after :publishing, 'puma:restart'
end
