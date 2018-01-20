class FloatTrust < ActiveRecord::Migration[5.2]
  def change
    change_column :sources, :trust, :float
  end
end
