require 'google_macro'


class ChecksController < ApplicationController
  def create
    google.documents_for(url_param)
  end

  def url_param
    params.require(:url)
  end

  def google
    @google ||= GoogleMacro.new
  end
  
end
