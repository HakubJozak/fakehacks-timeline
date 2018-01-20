class AddNameSource < ActiveRecord::Migration[5.2]
  def change
    add_column :pages,   :domain, :string, limit: 2048
    add_column :sources, :name, :string
  end
end
