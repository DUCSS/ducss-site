class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :title
      t.text :description
      t.attachment :image

      t.timestamps
    end
  end
end
