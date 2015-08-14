RSpec::Matchers.define :respond_with_content_type do |expected|
  match do |controller|
    expect(controller.response.content_type.to_s).to eq Mime::Type.lookup_by_extension(expected.to_sym).to_s
  end

  failure_message do |actual|
    "expected response with content type #{actual.to_sym}"
  end

  failure_message_when_negated do |actual|
    "expected response not to be with content type #{actual.to_sym}"
  end
end
