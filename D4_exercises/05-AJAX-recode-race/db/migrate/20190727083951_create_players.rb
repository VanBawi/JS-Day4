class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :player_name

      t.timestamps
    end
    add_index :players,
              :player_name,
              :unique => true
  end
end
