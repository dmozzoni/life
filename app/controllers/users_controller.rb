class UsersController < ApplicationController


  # GET /checklists
  # GET /checklists.json
  def index
    @checklists = Checklist.all.where(user: current_user)
  end

  # GET /checklists/1
  # GET /checklists/1.json
  def show
    @checklists = Checklist.all.where(user: current_user)
    # binding.pry
  end





end
