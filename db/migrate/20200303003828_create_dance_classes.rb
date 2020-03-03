class CreateDanceClasses < ActiveRecord::Migration

  def change
    create_table :dance_classes do |t|
      t.integer :studio_id
      t.integer :teacher_id
      t.string :title
      t.integer :level
      t.integer :type

      t.timestamps
    end
  end
  
end
