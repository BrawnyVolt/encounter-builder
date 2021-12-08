class MonstersController < ApplicationController
        # rescue_from ActiveRecord::RecordInvalid, with: :monster_data_invalid
        # rescue_from ActiveRecord::RecordNotFound, with: :monster_not_found
    
        def index
            render json: Monster.all, status: :ok
        end
            
        # def create
        #     new_monster = Monster.create!(monster_params)
        #     session[:monster_id] = new_monster.id
        #     render json: new_monster, status: :created
        # end
    
        # def update
        #     this_monster = Monster.find(params[:id])
        #     this_monster.update!(monster_params)
        #     render json: this_monster, status: :ok
        # end
    
        # def destroy
        #     this_monster = Monster.find(params[:id])
        #     this_monster.destroy
        #     session.destroy
        #     render status: :no_content
        # end
    
        private
            
        # def monster_data_invalid(error_hash)
        #     render json: { errors: error_hash.record.errors.full_messages }, status: :unprocessable_entity
        # end 
    
        # def monster_not_found
        #     render json: { error: "Monster does not exist!" }, status: :not_found
        # end
end
