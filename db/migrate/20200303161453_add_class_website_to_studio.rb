class AddClassWebsiteToStudio < ActiveRecord::Migration

  def change
    add_column :studios, :class_website, :string
  end
  
end
