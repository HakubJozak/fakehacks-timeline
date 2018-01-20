class GoogleMacro
  include HTTParty

  base_uri "https://script.google.com/macros/s/AKfycbyx4MH1E6L6NRdDKlvCfjC3nxo0Yu3j75cV1L3vrU96rB791A"

  # debug_output $stdout

  def documents_for(url)
    r = self.class.get('/exec', query: { url: url })

    if r.success?
      docs = r.parsed_response.map do |d|
        Document.new(d)
      end

      docs.sort!
    else
      fail r.error
    end
  end

end
