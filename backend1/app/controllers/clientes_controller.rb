class ClientesController < ApplicationController
    def index
        @clientes = Cliente.all 
        render json: @clientes
    end 

    def show
        @clientes = Cliente.find(params[:id])
        render json: @clientes
    end 

    def create
        @clientes = Cliente.create(
            nombre: params[:nombre],
            cedula: params[:cedula],
            correo: params[:correo],
            telefono: params[:telefono]
        )
        render json: @clientes
    end 

    def update
        @clientes = Cliente.find(params[:id])
        @clientes.update(
            nombre: params[:nombre],
            cedula: params[:cedula],
            correo: params[:correo],
            telefono: params[:telefono]
        )
        render json: @clientes
    end 

    def destroy
        @clientes = Cliente.all 
        @clientes = Cliente.find(params[:id])
        @clientes.destroy
        render json: @clientes
    end
end
