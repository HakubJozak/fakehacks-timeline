class Geneea
  include HTTParty

  base_uri 'api.geneea.com'

  def entities(text)
    self.class.post('/s2/entities',params(text))
  end

  def sentiment(text)
    self.class.post('/s2/sentiment',params(text))
  end

  def topic(text)
    self.class.post('/s2/topic',params(text))
  end

  def tags(text)
    self.class.post('/s2/tags',params(text))
  end      

  def params(text)
    {
      query: { user_key:'9cf1bcf17bedb6c7c28ff553a016c734' },
      headers: { 'Content-Type' => 'application/json' },
      body: { text: text }.to_json
    }
  end
end
