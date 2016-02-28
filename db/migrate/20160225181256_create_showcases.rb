class CreateShowcases < ActiveRecord::Migration
  def change
    create_table :showcases do |t|
      t.datetime :date

      t.timestamps null: false
    end
  end
end
