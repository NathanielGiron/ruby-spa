class MainController < ApplicationController
  def index
  	@creatures = Creature.all
  end
end
