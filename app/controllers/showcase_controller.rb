class ShowcaseController < ApplicationController
  def index
    @previous_showcases = Showcase.previous
    @next_showcase = Showcase.upcoming.last
    @message = Message.new
  end
end
