class Api::StepsController < ApplicationController

  def index
    @steps = Step.where(todo_id: params[:todo_id])
    render json: @steps
  end

  def create
    @step = Step.new(step_params)
    @step.todo_id = params[:todo_id]
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render json: @step
  end

  private
  def step_params
    params.require(:step).permit(:title)
  end

end