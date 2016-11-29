class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.datetime :date
      t.string :name
      t.string :style
      t.string :alcohol

      t.timestamps
    end
  end
end
