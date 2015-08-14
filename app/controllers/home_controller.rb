class HomeController < ApplicationController
  def index
    @events = Event.upcoming.limit(4)
    @services = Service.all
    @message = Message.new
  end

  def email
    @message = Message.new(message_params)
    if @message.valid?
      ContactMailer.contact_email(@message).deliver_now
      flash[:email] = "Email sent"
      redirect_to root_path
    else
      @events = Event.upcoming.limit(4)
      @services = Service.all
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
