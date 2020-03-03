class DanceClass < ActiveRecord::Base

  validates :studio_id, :teacher_id, :title, :class_time, presence: true
  has_many :dance_class_sessions
  belongs_to :teacher
  belongs_to :studio

end
