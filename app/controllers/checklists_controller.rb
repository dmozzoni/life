# ChecklistsController
class ChecklistsController < ApplicationController
  before_action :set_checklist, only: [:show, :edit, :update, :destroy]

  # GET /checklists
  # GET /checklists.json
  def index
    @checklists = Checklist.all.where(user: current_user)
  end

  # GET /checklists/1
  # GET /checklists/1.json
  def show
    tmp = @checklist.coord.split(',')
    @lat = tmp[0]
    @lng = tmp[1]
    @srctext = "https://maps.googleapis.com/maps/api/js?key="+ENV["GOOGLE_MAPS_KEY"]+"&callback=showMap"
    @butterflies = Butterfly.where(checklist_id: params[:id])
  end

  # GET /checklists/new
  def new
    @lat = 41.724
    @lng = -71.623
    @srctext = "https://maps.googleapis.com/maps/api/js?key="+ENV["GOOGLE_MAPS_KEY"]+"&callback=initMap"
    @checklist = Checklist.new
  end

  # GET /checklists/1/edit
  def edit
    tmp = @checklist.coord.split(',')
    @lat = tmp[0]
    @lng = tmp[1]
    @srctext = "https://maps.googleapis.com/maps/api/js?key="+ENV["GOOGLE_MAPS_KEY"]+"&callback=initMap2"
  end

  # POST /checklists
  # POST /checklists.json
  def create
    @checklist = Checklist.create!(checklist_params.merge(user: current_user))
    respond_to do |format|
      if @checklist.save
        format.html { redirect_to @checklist, notice: 'Checklist was successfully created.' }
        format.json { render :show, status: :created, location: @checklist }
      else
        format.html { render :new }
        format.json { render json: @checklist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /checklists/1
  # PATCH/PUT /checklists/1.json
  def update
    @checklist = Checklist.find(params[:id])
    if @checklist.user == current_user
      respond_to do |format|
        if @checklist.update(checklist_params.merge(user: current_user))
          format.html { redirect_to @checklist, notice: 'Checklist was successfully updated.' }
          format.json { render :show, status: :ok, location: @checklist }
        else
          format.html { render :edit }
          format.json { render json: @checklist.errors, status: :unprocessable_entity }
          redirect_to checklists_path
        end
      end
    else
      flash[:alert] = 'Only the author of the Checklist may Update.'
      redirect_to checklists_path
    end
  end

  # DELETE /checklists/1
  # DELETE /checklists/1.json
  def destroy
    @checklist = Checklist.find(params[:id])
    if @checklist.user == current_user
      @checklist.destroy
    else
      flash[:alert] = 'Only the author of the Checklist may Delete it.'
    end
    redirect_to checklists_path
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_checklist
    @checklist = Checklist.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def checklist_params
    params.require(:checklist).permit(:date, :location, :coord, :note, :country, :state, :county)
  end
end
