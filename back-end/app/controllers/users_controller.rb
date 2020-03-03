class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def dashboard
    render json: {user: current_user, posts: current_user.posts, comments: current_user.comments}
  end

  # POST /users
  def create
    @user = User.create(user_params)

    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: {user: @user, jwt: @token}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @comments = Comment.where(user_id: current_user.id)
    @comments.each do |comment|
      comment.destroy
    end
    @posts = Post.where(user_id: current_user.id)
    @posts.each do |post|
      post.destroy
    end
    current_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.fetch(:user).permit(:name, :password)
    end
end
