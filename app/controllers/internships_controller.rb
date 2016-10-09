class InternshipsController < ApplicationController
  def index
    @internships = Internships.open_internships.page(params[:page])
    @message = Message.new
  end
end
