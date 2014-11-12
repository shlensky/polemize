class SessionsController < ApplicationController
  def create
    user = find_or_create_user(env['omniauth.auth'])
    session[:user_id] = user.id.to_s

    redirect_to redirect_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  private

  def find_or_create_user(auth)
    user = User.where(auth.slice(:provider, :uid)).first_or_create!
    user.update(auth[:info].slice(:name, :image).to_hash)

    user
  end

  def redirect_url
    env['omniauth.origin'] || root_url
  end
end
