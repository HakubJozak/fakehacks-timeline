class Trigram

  def save_all(id, json)
    json['trigrams'].each do |t|
      redis.sadd "fh/tri/#{t}", id
    end
  end
  
  private
  
  def redis
    @redis ||= Redis.new
  end
  
end
