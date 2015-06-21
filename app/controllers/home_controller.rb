class HomeController < ApplicationController
  def index
    @events = upcoming_events
    @services = Service.all
    @message = Message.new
  end

  def email
    @message = Message.new(message_params)
    if @message.valid?
      ContactMailer.contact_email(@message).deliver
      flash[:email] = "Email sent"
      redirect_to root_path
    else
      @events = upcoming_events
      @services = Service.all
      render :index
    end
  end

  private

  def upcoming_events(limit: 4)
    Event.where('date > ?', DateTime.now).order(date: :desc).limit(limit)
  end

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
