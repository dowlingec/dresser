class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    #show individual user for sessions later/view all data
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def my_items
        items = Item.where(user_id: params[:user_id])
        render json: items, status: 200
    #     render json: @current_user, serializer: UseWithMembershipsSerializer
    end

    def my_outfits
        outfits = Outfit.where(user_id: params[:user_id])
        render json: outfits, status: 200
    end
end
