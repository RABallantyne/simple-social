class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: {post: @post, comments: @post.comments }
  end

  # POST /posts
  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    
    if @post.user_id === current_user.id
      @post.update(post_params)
      render json: @post
    else
      render json: {message: 'permission denied', errors: @post.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    if @post.user_id === current_user.id
      @comments = Comment.where(post_id: @post.id)
        @comments.each do |comment|
          comment.destroy
        end
      @post.destroy
      render json: {message: 'post deleted'}
      else
        render json: {message: 'permission denied'}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.fetch(:post).permit(:content, :likes, current_user.id)
    end
end
