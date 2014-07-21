class ChangeOrdToInt < ActiveRecord::Migration
  def change
    remove_column :lists, :ord 
    remove_column :cards, :ord

    add_column :lists, :ord, :integer
    add_column :cards, :ord, :integer
  end
end
