class Api::StudiosController < ApplicationController

  def index
    @studios = Studio.all
    studio_json = {}

    @studios.each do |studio|
      studio_json[studio.id] = {
        name: studio.name,
        address: studio.address,
        class_website: studio.class_website,
        phone_number: studio.phone_number
      }
    end

    render json: { studios: studio_json }, status: 200
  end

end
