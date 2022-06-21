class OutfitsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        outfits = Outfit.all
        render json: outfits
    end

    # def show
    #     outfit = Outfit.find_by(id: params[:id])
    #     render json: outfit
    # end

    def create
        outfit = Outfit.create(outfit_params)
        render json: outfit, status: 200
    end

    def destroy
        outfit = Outfit.find_by(id: params[:id])
        outfit.destroy
        head :no_content
    end

    private
    def outfit_params
        params.permit(:temp_f, :humidity_percent, :wind_mph, :cloud, :details, :user_id, :weather_summary)
    end

end
