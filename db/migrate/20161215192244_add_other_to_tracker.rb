class AddOtherToTracker < ActiveRecord::Migration[5.0]
  def change
    add_column :trackers, :other, :text
  end
end
