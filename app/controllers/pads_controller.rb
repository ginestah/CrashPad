class PadsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_pad, only: [ :update, :destroy]

  # GET /pads
  def index
    @pads = Pad.all
    render json: @pads, include: [:user, :reviews, :photos]
  end

  # GET /pads/1
  def show
    @pad = Pad.find(params[:id])
    render json: @pad,include: [ :user, :reviews, :photos] 
  end

  # POST /pads
  def create
    @pad = Pad.new(pad_params)
    @pad.user = @current_user

    if @pad.save
      render json: @pad, status: :created, location: @pad
    else
      render json: @pad.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pads/1
  def update
    if @pad.update(pad_params)
      render json: @pad
    else
      render json: @pad.errors, status: :unprocessable_entity
    end
  end
def delete_photo
  @photo = Photo.find(params[:id])
  @photo.destroy
end
  # DELETE /pads/1
  def destroy
    @pad.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pad
      @pad = @current_user.pads.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pad_params
      params.require(:pad).permit(:name, :rooms, :available_dates, :photos_id, :private_kitchen, :private_bathroom,:location, :user_id,photos_attributes: [:url,:id,:_destroy])
    end
end
