class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :hp
      t.string :ac
      t.string :img_url

      t.timestamps
    end
  end
end
