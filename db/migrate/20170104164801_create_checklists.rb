class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.date :date
      t.string :location
      t.string :coord
      t.text :note

      t.timestamps
    end
  end
end
