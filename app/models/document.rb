class Document
  attr_accessor :url, :date

  def initialize(hash)
    @url = hash['url']
    @date = parse_date(hash['date'])
  end

  def host
    URI(@url).host
  end

  def source
    @source ||= Source.find_by(domain: host)
  end

  def as_json(opts = nil)
    # ping source
    source
    super
  end

 def <=> other
    return 0 if date.blank? && other.date.blank?
    return 1 if date.blank?
    return -1 if other.date.blank?
    date <=> other.date
  end  

  private

  def parse_date(date)
    if date.blank?
      @date = nil
    else
      @date = Time.parse(date)
    end
  rescue ArgumentError
    Rails.logger.error($!)
    @date = nil
  end

end
