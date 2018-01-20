class Source < ApplicationRecord
  def self.load_whitelist
    # [ 'db/blacklist.csv', -10 ],
    sources = [  [ 'db/whitelist.csv', 10 ] ]

    sources.each do |file,trust|
      File.new(file).read.each_line do |l|
        Source.create!(
          domain: l.split(',')[0].strip,
          trust: trust
        )
      end    
    end
  end

  def self.load_konspiratori
    SmarterCSV.process('db/zoznam.csv') do |chunk|
      chunk.each do |s|
        Source.create!(domain: s[:nazov], trust: -s[:hodnotenie])
      end
    end
  end

end
