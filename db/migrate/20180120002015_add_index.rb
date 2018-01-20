class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :pages, :uuid
  end
end
o
