class AddTeamNameToStandings < ActiveRecord::Migration[5.0]
  def change
    add_column :standings, :team_name, :string
  end
end
