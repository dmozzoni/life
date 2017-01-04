class CreateButterflies < ActiveRecord::Migration[5.0]
  def change
    create_table :butterflies do |t|
      t.references :checklist, foreign_key: true
      t.string :species
      t.integer :num
      t.string :img_url
      t.text :note

      t.timestamps
    end
  end
end
