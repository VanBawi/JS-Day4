class CreateGamesPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :gameplayers do |t|
      t.integer :game_id,
                :player_id
      t.timestamps
    end
  end
end
