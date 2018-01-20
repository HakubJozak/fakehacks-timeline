namespace :geneea do
  task fetch: :environment do
    fetch(0,10000)
  end

  task f2: :environment do
    fetch(10000, 20000)    
  end

  def fetch(offset, limit)
    api = Geneea.new
    current = 0

    loop do
      all = Page.where(geneea_entities: nil).order(date: :desc).limit(limit).offset(offset)

      all.each do |p|
        puts [ p.id, p.subject ].join(' - ')
        p.geneea_sentiment = api.sentiment(p.text)['sentiment']
        p.geneea_entities = api.entities(p.text)['entities']
        p.geneea_topic = api.topic(p.text)['topic']
        p.geneea_tags = api.tags(p.text)['tags']
        p.save!
      end

      if all.next_page.present?
        current = all.next_page
        puts [ 'Page' , current ].join(' - ')        
      else
        break
      end
    end
  end
  

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
        puts "Missing #{d['id']} #{d['subject']}"
        missing += 1
      end
    end

    puts "Found #{found} / Missing #{missing}"
  end


end
