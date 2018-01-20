require 'test_helper'

class GoogleMacroTest < ActiveSupport::TestCase

  setup do
    Source.load_all
  end
  
  test 'image' do
    #    VCR.use_cassette("image") do
    url = 'http://cdn2.img.cz.sputniknews.com/images/149/45/1494505.jpg'
    doc = GoogleMacro.new.documents_for(url).first
    assert_not_nil doc.to_json
  end

  test 'image2' do
    url = 'http://forum24.cz/wp-content/uploads/2017/01/HOAX-uprchl%C3%ADci-768x576.jpg'
    doc = GoogleMacro.new.documents_for(url).first
    assert_not_nil doc.to_json    
  end

  test 'image3' do
    url = 'http://forum24.cz/wp-content/uploads/2017/01/HOAX-uprchl%C3%ADci-768x576.jpg'
    docs = GoogleMacro.new.documents_for(url)
  end  





end
