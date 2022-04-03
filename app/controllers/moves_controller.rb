class MovesController < ApplicationController
  def create
    @game = Game.find(params[:game_id])
    @game.move!(params[:row], params[:col])
  end
end
