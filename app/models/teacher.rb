class Teacher < ActiveRecord::Base

  validates :name, presence: true
  has_many :dance_classes
  has_many :studios, through: :studio_teachers

end
