require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the EventsHelper. For example:
#
# describe EventsHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe ApplicationHelper, :type => :helper do
  describe '#full_title' do
    let(:base) { 'DUCSS - Dublin University Computer Science Society' }

    context 'if title is empty' do
      it 'should return the base title' do
        expect(helper.full_title('')).to eq base
      end
    end

    context 'if title is not empty' do
      let(:title) { 'Events' }
      it 'should return a concatted title' do
        expect(helper.full_title(title)).to eq "#{title} - #{base}"
      end
    end
  end
end
