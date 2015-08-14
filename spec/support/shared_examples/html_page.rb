RSpec.shared_examples 'an HTML page' do
  it { is_expected.to respond_with :ok }
  it { is_expected.to respond_with_content_type :html }
  it { is_expected.to render_with_layout :application }
end
