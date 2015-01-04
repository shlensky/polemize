class ApplicationController < ActionController::Base
  helper_method def current_user
    return nil unless session[:user_id].present?
    @current_user ||= User.find(session[:user_id])
  end

  protected

  def ensure_authorization
    render_unauthorized unless current_user.present?
  end

  def render_unauthorized
    render nothing: true, status: :unauthorized
  end
end
