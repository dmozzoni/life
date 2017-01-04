class Checklist < ApplicationRecord
  has_many :butterflies, dependent: :destroy
  belongs_to :user
end
