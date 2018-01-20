# cmd = "fasttext skipgram -input file.txt -output model"

namespace :trigram do
  task go: :environment do
    trigram = Trigram.new

    Page.limit(100).each do |page|
      file = File.new('db/in.txt','w')
      file.write(page.text)
      file.close

      cmd = "Rscript trigramatizace.R db/in.txt db/trigram.json"
      puts cmd
      system cmd
      json = JSON.parse(`cat db/trigram.json`)

      trigram.save_all(page.uuid, json)
    end
  end


end
