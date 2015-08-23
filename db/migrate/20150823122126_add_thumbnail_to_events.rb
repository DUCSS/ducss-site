class AddThumbnailToEvents < ActiveRecord::Migration
  def up
    add_attachment :events, :thumbnail
  end

  def down
    remove_attachment :events, :thumbnail
  end
end
