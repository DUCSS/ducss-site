class BooksController < ApplicationController
  def index
    @books = Book.all
    @message = Message.new
  end
end
