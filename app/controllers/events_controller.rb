class EventsController < ApplicationController

  def index
    @highlighted_event = Event.highlighted
    @events = Event.order(date: :desc)
    @message = Message.new
    respond_to do |format|
      format.json { render json: @events }
      format.html { render :index, locals: { type: 'All' }}
    end
  end

  def upcoming
    @events = Event.upcoming
    @message = Message.new
    respond_to do |format|
      format.json { render json: @events }
      format.html  {render :index, locals: { type: 'Upcoming' }}
    end
  end

  def previous
    @events = Event.previous
    @message = Message.new
    respond_to do |format|
      format.json { render json: @events }
      format.html { render :index, locals: { type: 'Previous' }}
    end
  end

  def show
    @event = Event.find_by! slug: params[:slug]
    @message = Message.new
  end
end
