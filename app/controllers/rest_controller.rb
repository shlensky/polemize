class RestController < ApplicationController
  def unprocessable_entity(entity)
    @entity = entity
    render :info, status: :unprocessable_entity
  end
end
