include GamesHelper

class Game < ApplicationRecord
  before_validation(on: :create) do
    self.state = {
      0 => { 0 => nil, 1 => nil, 2 => nil },
      1 => { 0 => nil, 1 => nil, 2 => nil },
      2 => { 0 => nil, 1 => nil, 2 => nil },
    }
    self.current_symbol = [0, 1].sample
  end

  before_update { |game| game.on_update }
  
  def on_update
    self.start! if self.connections_changed? && self.connections == 2
    self.check_winner if self.state_changed?
  end
  
  def move!(row, col)
    state[row.to_s][col.to_s] = current_symbol
    self.current_symbol = current_symbol == 0 ? 1 : 0
    if self.save
      ActionCable.server.broadcast("game_#{self.id}", self.to_json)
    end
  end
  
  def start!
    self.started = true
    ActionCable.server.broadcast("game_#{self.id}", self.to_json)
  end
  
  def check_winner
    all_combinations = []
    all_combinations.push(main_diagonal(state))
    all_combinations.push(reverse_diagonal(state))
    all_combinations.push(*rows(state))
    all_combinations.push(*cols(state))
    all_combinations.each do |combination|
      self.winner = x_winner?(combination) || o_winner?(combination)
      if self.winner
        return
      end
    end
  end
  
  def self.add_connection(id)
    game = Game.find(id)
    game.connections += 1
    game.save
  end
end
