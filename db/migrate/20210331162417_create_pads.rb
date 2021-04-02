class CreatePads < ActiveRecord::Migration[6.1]
  def change
    create_table :pads do |t|
      t.string :name
      t.integer :rooms
      t.date :available_dates
      t.boolean :private_kitchen
      t.string :private_bathroom
      t.string :boolean
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
