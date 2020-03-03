class AddTimeToDanceClass < ActiveRecord::Migration

  def change
    add_column :dance_classes, :class_time, :time 
  end

end
