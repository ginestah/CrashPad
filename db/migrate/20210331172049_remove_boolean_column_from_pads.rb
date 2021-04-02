class RemoveBooleanColumnFromPads < ActiveRecord::Migration[6.1]
  def change
    remove_column :pads, :boolean
    remove_column :pads, :private_bathroom
    add_column :pads, :private_bathroom, :boolean
  end
end
