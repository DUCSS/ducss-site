class EventsController < ApplicationController
  def index
    @events = Event.upcoming
    render :index, locals: { type: 'Upcoming' }
  end

  def previous
    @events = Event.previous
    render :index, locals: { type: 'Previous' }
  end

  def show
    @event = Event.find_by! slug: params[:slug]
  end
end
