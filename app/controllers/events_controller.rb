class EventsController < ApplicationController

  def index
    @highlighted_event = Event.highlighted
    @events = Event.order(date: :desc)
  end

  def upcoming
    @events = Event.upcoming.page(params[:page])
    respond_to do |format|
      format.json { render json: @events }
      format.html  {render :index, locals: { type: 'Upcoming' }}
    end
  end

  def previous
    @events = Event.previous.page(params[:page])
    respond_to do |format|
      format.json { render json: @events }
      format.html { render :index, locals: { type: 'Previous' }}
    end
  end

  def show
    @event = Event.find_by! slug: params[:slug]
  end
end
