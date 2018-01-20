namespace :geneea do
  task :load do
    json = File.new('db/social_watch/export_geneea.json').read
    found = 0
    missing = 0    
    

    JSON.parse(json).each do |d|
      if p = Page.find_by(uuid: d['id'])
        p.geneea_entities = d['geneea/entities']
        p.geneea_topic = d['geneea/topic']
        p.geneea_tags = d['geneea/tags']
        p.geneea_sentiment = d['geneea/sentiment']
        p.fakehack_label = d['LABEL']
        puts "Found #{d['subject']}"
        found += 1
      else
        puts "Missing #{d['subject']}"
        missing += 1
      end
    end

    puts "Found #{found} / Missing #{missing}"
  end


end
