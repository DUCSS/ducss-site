#DUCSS Site

DUCSS site rewritten in Rails and designed for easy Heroku deployment.

###Ruby version
2.1.1 is specified in the Gemfile. You *will* want to use either [rbenv](http://rbenv.org "rbenv") or [RVM](http://rvm.io "RVM") to manage your Ruby version.  
Don't use system Ruby/Gem.

###System dependencies
Nokogiri gem requires `libxslt-dev` and `libxml2-dev`.  
Paperclip gem requires libmagickwand-dev.  
If you want to run PostgreSQL in development that will also have to be installed.  
Ruby headers are required for installing both of these gems.  
If you installed Ruby from source with RVM you should have them.


###Configuration
If you're using the Heroku toolbelt and foreman these environment variables can go in the project's root folder in the .env file like so:
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
####Amazon S3
File storage of static images is done through S3. The following variables are required:
```bash
S3_BUCKET_NAME
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```
The [AWS support docs](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html) explain how to get your keys.

###Set Up
Using bundler to install all the required gems is highly recommended.
First you need to install bundler.
```bash
gem install bundler
```
From there you can use bundle install to get all dependencies.
```bash
cd ducss-site-folder
bundle install
```
Once that's done set up the database.
```bash
rake db:migrate
```
SQLite is used in development while PostgreSQL is used in production.  
Heroku will automatically detect PostgreSQL and set up the database configuration.


You will also need to make a user account to access the admin dashboard.  
That can be done by opening the Rails console with `rails c` and entering the following:
```ruby
User.new(email: "example@example.org", password: "hunter2", password_confirmation: "hunter2").save
```

###Running the server
```bash
rails server
```
That will be enough to run a simple development server.  
If you're using the [Heroku Toolbelt](https://toolbelt.heroku.com/) you can use foreman to start the Unicorn server with the same settings as will be used in production on Heroku.
```bash
foreman start
```
If you do want to run it this way `PORT` and `RACK_ENV` environment variables will also have to be set.

###Deploying
This project will easily deploy to Heroku.  
Once you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed and have logged in you need only run a few commands.
```bash
heroku create --region eu
git push heroku master
heroku ps:scale web=1
heroku open
```
This will create a new Heroku app(in Dublin), push the code using git which causes a deploy, scale the app to one dyno and open it in your web browser.  
You will also have to set all of your environment variables either via the [Heroku Dashboard](https://dashboard.heroku.com/apps) or via the `heroku` command line tool.

###Tests
I should probably write those...