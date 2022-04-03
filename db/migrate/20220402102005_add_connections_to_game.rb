class AddConnectionsToGame < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :connections, :integer, :null => false, :default => 0
  end
end
