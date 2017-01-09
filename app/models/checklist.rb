# Checklist
class Checklist < ApplicationRecord
  has_many :butterflies, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :butterflies
  validates :country, :state, :county, :coord, :location, :date, presence: true
end
