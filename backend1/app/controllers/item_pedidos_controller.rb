class ItemPedidosController < ApplicationController
    def index
        @item = ItemPedido.all 
        render json: @item
    end 

    def show
        @item= ItemPedido.where(id_pedido: params[:id])
        render json: @item
    end 

    def create
        @item = ItemPedido.create(
            id_pedido: params[:id_pedido],
            id_producto: params[:id_producto],
            cantidad: params[:cantidad],

        )
        render json: @item
    end 

    def update
        @item = ItemPedido.find(params[:id])
        @item.update(
            id_pedido: params[:id_pedido],
            id_producto: params[:id_producto],
            cantidad: params[:cantidad],
        )
        render json: @item
    end 

    def destroy
        @item = ItemPedido.all 
        @item = ItemPedido.find(params[:id])
        @item.destroy
        render json: @item
    end

end

