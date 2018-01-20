class Document
  attr_accessor :url, :date

  def initialize(hash)
    @url = hash['url']
    @title = hash['title']
    @date = parse_date(hash['date'])
    @facebook = hash['facebook'] if hash['facebook'].present?
#     "facebook{
# "total_count":608,
# "comment_count":159,
# "comment_plugin_count":0,
# "share_count":59,
# "reaction_count":390}
# }
  end

  def host
    URI(@url).host
  end

  def source
    @source ||= find_source
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

  def find_source
    Source.by_domain(host).first ||
      { domain: host }
  end

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
