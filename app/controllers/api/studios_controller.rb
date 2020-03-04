class Api::StudiosController < ApplicationController

  def index
    @studios = Studio.all
    studio_json = @studios.map do |studio|
      {
        name: studio.name,
        address: studio.address,
        class_website: studio.class_website,
        phone_number: studio.phone_number
      }
    end

    render json: { studios: studio_json }, status: 200
  end

end
