class CreateImage < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string "img_src"
      t.string "webpage"
      t.text "original_alt"
      t.text "updated_alt"
    end
    add_index :images, :img_src
  end
end
