source 'https://rubygems.org'
ruby '2.2.2'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.2'
# Use sqlite3 as the development database
group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
end

group :test do
  gem 'selenium-webdriver'
  gem 'capybara'
end

group :production do
  gem 'pg' # Use postgresql as the production database
  gem 'rails_12factor' # Needed for logging and static assets on Heroku
end
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use devise for user authentication
gem 'devise'

# Admin interface similar to Django's admin
gem 'rails_admin'

# Paperclip to handle image uploads and S3 to store files
gem 'rmagick'
gem 'paperclip'
gem 'aws-sdk'

# Rails built-in truncate isn't good for HTML
gem 'html_truncator'

# Use unicorn as the app server
gem 'unicorn'

# Use debugger
# gem 'debugger', group: [:development, :test]

