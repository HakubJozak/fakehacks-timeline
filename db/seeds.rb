Source.delete_all

sources = [ [ 'db/blacklist.csv', -10 ], [ 'db/whitelist.csv', 10 ] ]

sources.each do |file,trust|
  File.new(file).read.each_line do |l|
    Source.create!(
      domain: l.split(',')[0].strip,
      trust: trust
    )
  end    
end



puts "#{Source.count} sources listed"
