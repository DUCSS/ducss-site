require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  describe 'GET #index' do
    before do
      get :index
    end

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :index }
  end
end
