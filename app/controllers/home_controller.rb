class HomeController < ApplicationController
  def index
    @highlighted_event = Event.highlighted
    @services = Service.all
    @message = Message.new
  end

  def email
    @message = Message.new(message_params)
    if @message.valid?
      if !params[:text].present?
        ContactMailer.contact_email(@message).deliver_now
      end
      render nothing: true, status: :ok
    else
      render nothing: true, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
