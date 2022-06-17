class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        user = User.find_by(email: params[:email])
        session[:user_id] = user.id
        render json: user
    end

    
    # cookies test
    # def click
    #     cookies[:click] ||= 0
    #     cookies[:click] += 1
    #     session[:click] ||= 0
    #     session[:click] += 1
    #     byebug
    # end

end
