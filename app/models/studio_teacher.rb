class StudioTeacher < ActiveRecord::Base

  validates :teacher_id, :studio_id, presence: true
  validates :teacher_id, uniqueness: { scope: :studio_id }
  has_many :teachers
  has_many :studios

end
