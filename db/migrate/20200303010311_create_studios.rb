class CreateStudios < ActiveRecord::Migration
  
  def change
    create_table :studios do |t|
      t.string :name
      t.string :phone_number
      t.string :email
      t.string :address

      t.timestamps
    end
  end

end
