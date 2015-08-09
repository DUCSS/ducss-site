class EventsController < ApplicationController
  def index
    @events = Event.where('date > ?', DateTime.now).order(date: :desc)
  end

  def previous
    @events = Event.where('date < ?', DateTime.now).order(date: :desc)
  end

  def show
    @event = Event.find_by! slug: params[:slug]
  end
end
