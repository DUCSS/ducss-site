class CreateShowcaseItems < ActiveRecord::Migration
  def change
    create_table :showcase_items do |t|
      t.integer :showcase_id
      t.string :owner
      t.string :link
      t.string :title
      t.text :description
      t.attachment :profile_picture

      t.timestamps null: false
    end
  end
end
