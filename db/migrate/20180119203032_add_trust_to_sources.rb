class AddTrustToSources < ActiveRecord::Migration[5.2]
  def change
    add_column :sources, :trust, :integer
  end
end
