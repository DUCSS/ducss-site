class CreateInternships < ActiveRecord::Migration
  def change
    create_table :internships do |t|
      t.string :"company_name"
      t.attachment :"company_logo"
      t.string :"job_title"
      t.string :"job_location"
      t.string :"apply_link"
      t.timestamps null: false
    end
  end
end
