require 'test_helper'

class GoogleMacroTest < ActiveSupport::TestCase

  setup do
    Source.load_all
  end
  
  test 'image' do
    VCR.use_cassette("image") do
      url = 'http://cdn2.img.cz.sputniknews.com/images/149/45/1494505.jpg'
      doc = GoogleMacro.new.documents_for(url).first
      assert_not_nil doc.source
      assert_not_nil doc.to_json
    end
  end

end
