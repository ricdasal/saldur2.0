class UsersController < ApplicationController

    def index
        @users = User.all 
        render json: @users
    end 

    def show
        @username = params[:username]
        @password = params[:password]
        @users = User.find(username: params[:id])
        
        if (@users.password == @password)
            #session[:current_user_id] = @users.id
            redirect_to "http://www.rubyonrails.org"
            
        end

        
    end 

    def create

        @username = params[:username]
        @password = params[:password]
        @users = User.find_by(username: params[:username])
        if (@users.password == @password)
            render json: @users
        end

        # @users = User.create(
        #     username: params[:username],
        #     password: params[:password],
        #     cliente_id: params[:cliente_id],
            
        # )
        # render json: @users
    end 

    def update
        @users = User.find(params[:id])
        @users.update(
            username: params[:username],
            password: params[:password],
            cliente_id: params[:cliente_id],
            
        )
        render json: @users
    end 

    def destroy
        @users = User.all 
        @users = User.find(params[:id])
        @users.destroy
        render json: @users
    end

    def validate
        @users = User.find(params[:username])
        puts @users
        

    end

end
