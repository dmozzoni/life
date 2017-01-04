class AddUsersToButterflies < ActiveRecord::Migration[5.0]
  def change
    add_reference :butterflies, :user, foreign_key: true
  end
end
