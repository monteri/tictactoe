class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.boolean :started, default: false
      t.json :state
      t.integer :current_symbol, default: 0

      t.timestamps
    end
  end
end
