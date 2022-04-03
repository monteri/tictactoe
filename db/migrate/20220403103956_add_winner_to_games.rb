class AddWinnerToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :winner, :integer, :null => true, :default => nil
  end
end
