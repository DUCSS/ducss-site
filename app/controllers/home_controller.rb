class HomeController < ApplicationController
  def index
    @events = Event.order(date: :desc).limit(4)
    @services = Service.all
  end
end
