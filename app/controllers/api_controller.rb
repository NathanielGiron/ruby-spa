class ApiController < ApplicationController
  def all
  	@creatures = Creature.all
  	render :json => @creatures
  end

  def show
  	@creature = Creature.find_by_id(params[:id])
  	render :json => @creature
  end
end
