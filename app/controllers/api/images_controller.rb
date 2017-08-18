class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def index
    @images = Image.all
  end

  def update

  end

  def image_params
    
    params.require(:image).permit(:img_src, :original_alt, :updated_alt, :webpage)
  end

end
