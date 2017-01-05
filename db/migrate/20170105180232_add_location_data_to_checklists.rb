class AddLocationDataToChecklists < ActiveRecord::Migration[5.0]
  def change
    add_column :checklists, :country, :string
    add_column :checklists, :state, :string
    add_column :checklists, :county, :string
  end
end
