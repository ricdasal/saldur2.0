class ProductosController < ApplicationController

    def index
        @productos = Producto.all 
        render json: @productos
    end 

    def show
        @productos = Producto.find(params[:id])
        render json: @productos
    end 

    def create
        @productos = Producto.create(
            nombre: params[:nombre],
            descripcion: params[:descripcion],
            precio: params[:precio]
        )
        render json: @productos
    end 

    def update
        @productos = Producto.find(params[:id])
        @productos.update(
            nombre: params[:nombre],
            descripcion: params[:descripcion],
            precio: params[:precio]
        )
        render json: @productos
    end 

    def destroy
        @productos = Producto.all 
        @producto = Producto.find(params[:id])
        @producto.destroy
        render json: @productos
    end
end
