class AddGeneaCols < ActiveRecord::Migration[5.2]
  def change
    add_column :pages, :geneea_entities, :json
    add_column :pages, :geneea_topic, :json
    add_column :pages, :geneea_tags, :json
    add_column :pages, :geneea_sentiment, :json
    add_column :pages, :fakehack_label, :string
  end
end
