class HomeController < ApplicationController
  def index
    @events = Event.where('date > ?', DateTime.now).order(date: :desc).limit(4)
    @services = Service.all
  end
end
