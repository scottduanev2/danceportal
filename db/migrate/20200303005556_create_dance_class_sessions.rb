class CreateDanceClassSessions < ActiveRecord::Migration

  def change
    create_table :dance_class_sessions do |t|
      t.integer :dance_class_id
      t.datetime :class_date
      t.boolean :is_substitute

      t.timestamps
    end
  end
  
end
