require 'rails_helper'

RSpec.describe EventsController, :type => :controller do
  describe 'GET #index' do
    before { get :upcoming }

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :index }
  end

  describe 'GET #previous' do
    before { get :previous }

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :index }
  end

  describe 'GET #show' do
    let(:event) { create(:event) }
    before { get :show, slug: event.slug }

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :show }
  end
end
