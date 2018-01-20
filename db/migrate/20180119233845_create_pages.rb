class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :uuid
      t.datetime :date
      t.string :type
      t.string :resource, limit: 2048
      t.string :resource_url, limit: 2048
      t.string :subject, limit: 2048
      t.string :url, limit: 2048
      t.text :text
      t.string :sentiment
      t.integer :like_count
      t.integer :comment_count
      t.integer :share_count
      t.string :author      

      t.timestamps
    end
  end
end
