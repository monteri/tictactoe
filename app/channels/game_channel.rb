class GameChannel < ApplicationCable::Channel
  def subscribed
    game_id = params[:game_id]
    stream_from "game_#{params[:game_id]}"
    Game.add_connection(game_id)
  end

  def unsubscribed
  end
end
