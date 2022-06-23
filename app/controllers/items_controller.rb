class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    items = Item.all.with_attached_image
    # @users = User.all.
    render json: items
  end


  def create
    item = Item.create!(item_params)
    render json: item, status: 200
  end

  def show
    item = Item.find_by(id: params[:id])
    render json: item
  end

  def update
    item = Item.find_by(id: params[:id])
    item.update(edit_params)
    render json: item, status: 200
  end

  def destroy
    item = Item.find_by(id: params[:id])
    # item.image.purge_later NEED ActiveJobs
    item.delete
    head :no_content, status: 200
  end

  private
  def item_params
    params.permit(:item_type, :name, :color, :occasion, :user_id, :image, :id)
  end

  def edit_params
    params.require(:item).permit(:item_type, :name, :color, :occasion, :user_id, :image, :id)
  end
  # def update_params
  #   params.permit(:item_type, :name, :color, :occasion)
  # end
end
