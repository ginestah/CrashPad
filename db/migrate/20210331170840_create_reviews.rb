class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :pad, null: false, foreign_key: true
      t.string :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
