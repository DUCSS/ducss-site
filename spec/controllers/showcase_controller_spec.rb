require 'rails_helper'

RSpec.describe ShowcaseController, type: :controller do
  describe 'GET #index' do
    before { get :index }

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :index }
  end
end
