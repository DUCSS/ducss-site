class HomeController < ApplicationController
  def index
    @events = Event.where('date > ?', DateTime.now).order(date: :desc).limit(4)
    @services = Service.all
    @message = Message.new
  end

  def email
    @message = Message.new(params[:message])
    if @message.valid?
      ContactMailer.contact_email(@message).deliver
      flash[:email] = "Email sent"
      redirect_to root_path
    else
      @events = Event.where('date > ?', DateTime.now).order(date: :desc).limit(4)
      @services = Service.all
      render :action => 'index'
    end
  end
end
