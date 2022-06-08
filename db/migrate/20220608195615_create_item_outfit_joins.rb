class CreateItemOutfitJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :item_outfit_joins do |t|
      t.integer :item_id
      t.integer :outfit_id

      t.timestamps
    end
  end
end
