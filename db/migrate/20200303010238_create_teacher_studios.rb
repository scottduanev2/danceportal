class CreateTeacherStudios < ActiveRecord::Migration

  def change
    create_table :teacher_studios do |t|
      t.integer :teacher_id
      t.integer :studio_id

      t.timestamps
    end
  end
  
end
