class DanceClassSession < ActiveRecord::Base

  validates :dance_class_id, :class_date, presence: true
  belongs_to :dance_class

end
