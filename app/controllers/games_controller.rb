class GamesController < ApplicationController
  def create
    redirect_to Game.create
  end

  def show
    @game = Game.find(params[:id])
  end
end
