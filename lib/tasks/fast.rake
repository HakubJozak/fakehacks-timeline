namespace :fast do
  task go: :environment do
    Page.limit(200).each do |page|
      file = File.new('file.txt','w')
      file.write(page.text)
      file.close

      cmd = "fasttext skipgram -input file.txt -output model"
      puts cmd
      system cmd
    end
  end

  # task domains: :environment do
  #   Page.limit(5) do |p|
  #     URI(p).domain
  #     puts p.domain
  #   end
  # end
end
