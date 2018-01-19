require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
end


VCR.configure do |config|
  config.cassette_library_dir = "fixtures/vcr_cassettes"
  config.hook_into :webmock
end    
