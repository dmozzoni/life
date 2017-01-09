#
class Butterfly < ApplicationRecord
  belongs_to :checklist
  belongs_to :user
  validates :species, :num, presence: true
end
