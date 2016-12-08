class CreateStandings < ActiveRecord::Migration[5.0]
  def change
    create_table :standings do |t|
      t.integer :games
      t.integer :wins
      t.integer :losses
      t.integer :losses_ot
      t.integer :points
      t.integer :points_pct
      t.integer :goals
      t.integer :opp_goals
      t.integer :srs
      t.integer :sos
      t.integer :points_pct_old
      t.integer :ro_wins

      t.timestamps
    end
  end
end
