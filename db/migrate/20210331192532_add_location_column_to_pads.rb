class AddLocationColumnToPads < ActiveRecord::Migration[6.1]
  def change
    add_column :pads, :location, :string
  end
end
