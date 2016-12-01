class AddFieldsToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :hop, :string
    add_column :beers, :yeast, :string
    add_column :beers, :malts, :string
    add_column :beers, :ibu, :string
    add_column :beers, :blg, :string
  end
end
