class ItemOutfitJoinsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        joins = ItemOutfitJoin.all
        render json: joins
    end

    def create
        newJoin = ItemOutfitJoin.create(join_params)
        render json: newJoin, status: 200
    end

    private
    def join_params
        params.require(:item_outfit_join).permit(:item_id, :outfit_id)
    end
end
