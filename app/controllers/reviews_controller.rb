class ReviewsController < ApplicationController
before_action :set_review, only: [:show, :update]
before_action :authorize_request, except: %i[index show]
def index 
  @pad = Pad.find(params[:pad_id])
  @reviews = @pad.reviews 
  render json: @reviews, include: :user
end
def show 
  render json: @review, include: :user
end


 def create
@review = Review.new(review_params)
if @review.save
  render json: @review, include: :user, status: :created
end
 end

 def update
  if @review.update(review_params)
    render json: @review
  else 
    render json: @review.errors, status: :unprocessable_entity
  end
 end

def destroy 
  @review = Review.find(params[:id])
  @review.destroy
end

def set_review
  @review = Review.find(params[:id])
end
def review_params
    params.require(:review).permit(:user_id, :pad_id, :content)

  end
 
end
