class ListaPedidosController < ApplicationController
    def index
        @pedidos = ListaPedido.all 
        render json: @pedidos
    end 

    def show
        @pedidos = ListaPedido.find(params[:id])
        render json: @pedidos
    end 

    def create
        @pedidos = ListaPedido.create(
            id_pedido: params[:id_pedido],
            nombre: params[:nombre],
            telefono: params[:telefono],
            direccion: params[:direccion],
            estado: params[:estado],

        )
        redirect_to "http://localhost:4200/carrito", allow_other_host: true
    end 

    def update
        @pedidos = ListaPedido.find(params[:id])
        @pedidos.update(
            id_pedido: params[:id_pedido],
            nombre: params[:nombre],
            telefono: params[:telefono],
            direccion: params[:direccion],
            estado: params[:estado],
        )
        render json: @pedidos
    end 

    def destroy
        @pedidos = ListaPedido.all 
        @pedidos = ListaPedido.find(params[:id])
        @pedidos.destroy
        render json: @pedidos
    end
end
