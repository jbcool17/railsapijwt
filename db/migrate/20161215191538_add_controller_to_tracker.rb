class AddControllerToTracker < ActiveRecord::Migration[5.0]
  def change
    add_column :trackers, :controller, :string
    add_column :trackers, :action, :string
  end
end
