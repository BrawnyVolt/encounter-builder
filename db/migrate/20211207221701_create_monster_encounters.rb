class CreateMonsterEncounters < ActiveRecord::Migration[6.1]
  def change
    create_table :monster_encounters do |t|
      t.integer :monster_id
      t.integer :encounter_id
      t.integer :quantity

      t.timestamps
    end
  end
end
