require 'google_macro'


class ChecksController < ApplicationController
  def create
    render json: google.documents_for(url_param)
  end

  private

  def url_param
    params.require(:url)
  end

  def google
    @google ||= GoogleMacro.new
  end
  
end
