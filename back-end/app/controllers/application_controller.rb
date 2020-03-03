class ApplicationController < ActionController::API
  before_action :authorized

  # rescue_from ActiveRecord::RecordNotFound, :with => :render_404
  
  def render_404 
    render json: {message: 'record not found'}
  end

  def encode_token(payload)
    JWT.encode(payload, 'process.env.SECRET_KEY')
  end

  def auth_header
    request.headers['Authorization']
  end
  
  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'process.env.SECRET_KEY', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in? 
    !!current_user
  end

  def authorized
    render json: {message: 'Please Log in'}, status: :unauthorized unless logged_in?
  end


end
