class OutfitsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        outfits = Outfit.all
        render json: outfits
    end

    def create
        outfit = Outfit.create(outfit_params)
        # assign = ItemOutfitJoin.create(join_params)
        render json: outfit, status: 200
    end

    def destroy
        outfit = Outfit.find_by(id: params[:id])
        outfit.destroy
        head :no_content
    end

    private
    def outfit_params
        params.require(:outfit).permit(:temp_f, :humidity_percent, :rain_inch, :snow_inch, :wind_mph, :cloud, :details, :user_id)
    end

    # def join_params
    # end

end
