class ItemsController < ApplicationController
    def index
        @items = Item.all 
        render json: @items
    end 

    def show
        @items = Item.find(params[:id])
        render json: @items
    end 

    def create
        @items = Item.create(
            codigo: params[:codigo],
            nombre: params[:nombre],
            descripcion: params[:descripcion],
            precio: params[:precio],
            imagen: params[:imagen],
        )
        render json: @items
    end 

    def update
        @secretMenuItem = Item.find(params[:id])
        @secretMenuItem.update(
            menu_name: params[:menu_name],
            restaurant_name: params[:restaurant_name],
            menu_description: params[:menu_description]
        )
        render json: @secretMenuItem
    end 

    def destroy
        @secretMenuItems = Item.all 
        @secretMenuItem = Item.find(params[:id])
        @secretMenuItem.destroy
        render json: @secretMenuItems
    end 
end
