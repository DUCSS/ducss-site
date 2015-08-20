#DUCSS Site

[![CircleCI](https://circleci.com/gh/DUCSS/ducss-site.svg?style=shield)](https://circleci.com/gh/DUCSS/ducss-site)  
DUCSS site rewritten in Rails and designed for easy Dokku deployment.

###Ruby version
2.2.2 is specified in the Gemfile. You *will* want to use either [rbenv](http://rbenv.org "rbenv") or [RVM](http://rvm.io "RVM") to manage your Ruby version.  
Don't use system Ruby/Gem.

###System dependencies
Nokogiri gem should work with no system libraries but if not, try installing `libxslt-dev` and `libxml2-dev`.  
Paperclip gem requires `libmagickwand-dev`.  
On Mac using Homebrew:
```bash
$ brew install imagemagick
```
On Ubuntu use:
```bash
$ sudo apt-get install libmagickwand-dev
```
If you want to run PostgreSQL in development that will also have to be installed.  
Ruby headers are required for installing both of these gems.  
If you installed Ruby from source with RVM you should have them.


###Configuration
If you're using foreman these environment variables can go in the project's root folder in the .env file like so:
```bash
FIRST_VAR=foo
SECOND_VAR=bar
```
Just make sure not to commit your .env file!
####SendGrid
The site uses SendGrid for the email form. The following variables are required:
```bash
SENDGRID_USERNAME
SENDGRID_PASSWORD
```
###Set Up
Using bundler to install all the required gems is highly recommended.
First you need to install bundler.
```bash
gem install bundler
```
From there, once you have cloned, you can use bundle install to get all dependencies.
```bash
cd ducss-site
bundle install --path vendor/bundle
```
Once that's done set up the database.
```bash
bundle exec rake db:migrate
```
SQLite is used in development while PostgreSQL is used in production.  
Dokku will automatically detect PostgreSQL and set up the database configuration.


You will also need to make a user account to access the admin dashboard.  
Note that passwords must be at least 8 characters long.  
That can be done by opening the Rails console with `bundle exec rails c` and entering the following:
```ruby
User.create(email: "example@example.org", password: "hunter22", password_confirmation: "hunter22")
```

###Running the server
```bash
bundle exec rails server
```
That will be enough to run a simple development server on `http://localhost:3000`.  
If you're using the [Heroku Toolbelt](https://toolbelt.heroku.com/) you can use foreman to start the Puma server with the same settings as will be used in production.
```bash
foreman start
```
If you do want to run it this way, the `RACK_ENV` environment variable will need to be set to production and you will need to configure Postgres.

###Deploying
Deploy instructions for Dokku on Ubuntu live elsewhere but essentially amount to creating a new instance, installing Dokku and Postgres and pushing the code.

###Tests
Tests are written using rspec and live in the `spec` directory.  
Run all the tests with:
```bash
bundle exec rspec
```
