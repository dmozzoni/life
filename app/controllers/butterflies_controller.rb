class ButterfliesController < ApplicationController
  before_action :set_butterflies
  before_action :set_butterfly, only: [:show, :edit, :update, :destroy]

  # GET checklists/1/butterflies
  def index
    @butterflies = @checklist.butterflies
  end

  # GET checklists/1/butterflies/1
  def show
  end

  # GET checklists/1/butterflies/new
  def new
    @butterfly = @checklist.butterflies.build
  end

  # GET checklists/1/butterflies/1/edit
  def edit
  end

  # POST checklists/1/butterflies
  def create

    @butterfly = @checklist.butterflies.build(butterfly_params.merge(user: current_user))

    if @butterfly.save
      redirect_to([@butterfly.checklist, @butterfly], notice: 'Butterfly was successfully created.')
    else
      render action: 'new'
    end
  end


  # PUT checklists/1/butterflies/1
  def update
    if @butterfly.update_attributes(butterfly_params)
      redirect_to([@butterfly.checklist, @butterfly], notice: 'Butterfly was successfully updated.')
    else
      render action: 'edit'
    end
  end

  # DELETE checklists/1/butterflies/1
  def destroy
    @butterfly.destroy

    redirect_to checklist_butterflies_url(@checklist)
  end


  def destroy
    @butterfly = Butterfly.find(params[:id])
    if @butterfly.user == current_user
      @butterfly.destroy
    else
      flash[:alert] = "Only the author of the Butterfly Observation can delete"
    end
    redirect_to checklist_butterflies_url(@checklist)
  end







  private
    # Use callbacks to share common setup or constraints between actions.
    def set_butterflies
      @checklist = Checklist.find(params[:checklist_id])
    end

    def set_butterfly
      @butterfly = @checklist.butterflies.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def butterfly_params
      params.require(:butterfly).permit(:species, :num, :img_url, :note)
    end
end
