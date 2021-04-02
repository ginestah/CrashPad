class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.references :pad, null: false, foreign_key: true
      t.string :url
      t.timestamps
    end
  end
end
