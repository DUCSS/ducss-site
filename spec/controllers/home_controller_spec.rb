require 'rails_helper'

RSpec.describe HomeController, :type => :controller do
  describe 'GET #index' do
    before { get :index }

    it_behaves_like 'an HTML page'
    it { is_expected.to render_template :index }
  end

  describe 'POST #email' do
    before do
      reset_mailer
    end

    context 'with valid email parameters' do
      context 'with the sneaky field present' do
        before do
          post :email, message: attributes_for(:message), text: 'Spam'
        end

        it 'should not deliver an email' do
          expect(ActionMailer::Base.deliveries.length).to eq 0
        end
        it { is_expected.to set_flash[:email].to 'Email sent' }
        it { is_expected.to redirect_to root_path(anchor: "contact") }
      end

      context 'without the sneaky field present' do
        before do
          post :email, message: attributes_for(:message)
        end

        it 'should deliver an email' do
          expect(ActionMailer::Base.deliveries.length).to eq 1
        end
        it { is_expected.to set_flash[:email].to 'Email sent' }
        it { is_expected.to redirect_to root_path(anchor: "contact") }
      end
    end

    context 'with invalid email parameters' do
      before do
        post :email, message: attributes_for(:message, email: 'blah')
      end

      it 'should not deliver an email' do
        expect(ActionMailer::Base.deliveries.length).to be 0
      end
      it { is_expected.to render_template :index }
    end
  end
end
