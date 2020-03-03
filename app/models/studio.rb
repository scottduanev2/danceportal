class Studio < ActiveRecord::Base

  validates :name, :address, :phone_number, presence: true
  has_many :dance_classes
  has_many :teachers, through: :studio_teachers

end
