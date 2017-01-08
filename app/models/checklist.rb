class Checklist < ApplicationRecord
  has_many :butterflies, dependent: :destroy
  belongs_to :user


  validates :country, :state, :county, :coord, :location, :date, presence: true
end
