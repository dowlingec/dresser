class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_type
      t.string :name
      t.string :color
      t.string :occasion
      t.integer :user_id

      t.timestamps
    end
  end
end
