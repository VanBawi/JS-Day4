class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :winners_name,
               :winning_time,
               :status
      t.timestamps
    end
  end
end
