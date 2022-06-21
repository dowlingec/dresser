class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.integer :temp_f
      t.integer :humidity_percent
      t.integer :wind_mph
      t.integer :cloud
      t.text :details
      t.string :weather_summary
      t.integer :user_id

      t.timestamps
    end
  end
end
