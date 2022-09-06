class PedidosController < ApplicationController
    def index
        @pedidos = Pedido.all 
        render json: @pedidos
    end 

    def show
        @pedidos = Pedido.find(params[:id])
        render json: @pedidos
    end 

    def create
        @pedidos = Pedido.create(
            nombre_ciente: params[:nombre_ciente],
            direccion: params[:direccion],
            estado: params[:estado],

        )
        redirect_to "http://localhost:4200/carrito", allow_other_host: true
    end 

    def update
        @pedidos = Pedido.find(params[:id])
        @pedidos.update(
            nombre_ciente: params[:nombre_ciente],
            direccion: params[:direccion],
            estado: params[:estado],
        )
        render json: @pedidos
    end 

    def destroy
        @pedidos = Pedido.all 
        @pedidos = Pedido.find(params[:id])
        @pedidos.destroy
        render json: @pedidos
    end
end
