module GamesHelper
  def x_winner?(array)
    0 if array.all? { |i| i == 0 }
  end
  
  def o_winner?(array)
    1 if array.all? { |i| i == 1 }
  end
  
  def main_diagonal(state)
    (0..2).map { |i| state[i.to_s][i.to_s] }
  end

  def reverse_diagonal(state)
    indices = (0..2).to_a
    last_index = indices.length - 1
    indices.map { |i| state[i.to_s][(last_index - i).to_s] } 
  end

  def rows(state)
    (0..2).map { |i| state[i.to_s].values }
  end

  def cols(state)
    (0..2).map do |i|
      (0..2).map { |j| state[j.to_s][i.to_s] }
    end
  end
end
