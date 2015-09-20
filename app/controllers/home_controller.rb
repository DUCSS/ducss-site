class HomeController < ApplicationController
  def index
    @services = Service.all
    @message = Message.new
  end

  def email
    @message = Message.new(message_params)
    if @message.valid?
      if !params[:text].present?
        ContactMailer.contact_email(@message).deliver_now
      end
      # Sneaky. Only send email if hidden field blank but still make it look like it sent
      flash[:email] = "Email sent"
      redirect_to root_path(anchor: "contact")
    else
      @services = Service.all
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
