class Source < ApplicationRecord

  scope :by_domain, -> (host) {
    if host.split('.').length > 2
      domain = host.split('.')[-2..-1].join('.')
    else
      domain = host
    end

    subdomain = "%.#{domain}"
    where("name = ? OR name ILIKE ?", domain, subdomain)
  }

  def self.load_whitelist
    # [ 'db/blacklist.csv', -10 ],
    sources = [  [ 'db/whitelist.csv', 10 ] ]

    sources.each do |file,trust|
      File.new(file).read.each_line do |l|
        name = l.split(',')[0].strip

        Source.create!(
          name: name,
          trust: trust
        )
      end
    end
  end

  def self.load_konspiratori
    SmarterCSV.process('db/zoznam.csv') do |chunk|
      chunk.each do |s|
        Source.create!(name: s[:nazov], trust: -s[:hodnotenie])
      end
    end
  end

end
