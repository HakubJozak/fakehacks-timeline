class Document
  attr_accessor :url, :google_indexed_at, :google_updated_at

  def initialize(hash)
    @url = hash['url']
    @google_indexed_at = 3.days.from_now
    @google_updated_at = 2.days.from_now    
  end

  def host
    URI(@url).host
  end

  def source
    @source ||= Source.find_by(domain: host)
  end

end
