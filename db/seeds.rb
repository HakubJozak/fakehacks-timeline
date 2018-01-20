# coding: utf-8
# Source.delete_all
# Source.load_all

# puts "#{Source.count} sources listed"


Page.delete_all
count = 0


files = [ 'db/social_watch/01-news_cz.csv',
          'db/social_watch/10-news_cz.csv',
          'db/social_watch/11-news_cz.csv',
          'db/social_watch/12-news_cz.csv'  ]

files.each do |file|
  SmarterCSV.process(file) do |chunk|
    chunk.each do |h|
      h[:uuid] = h.delete(:id)
      h[:sentiment] = if (s = h.delete(:sentiment)) == 'missing'
                        nil
                      else
                        s
                      end

      Page.create!(h)
      puts count if count % 100 == 0
      count += 1
    end
  end
end
