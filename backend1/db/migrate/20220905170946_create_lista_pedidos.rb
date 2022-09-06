class CreateListaPedidos < ActiveRecord::Migration[7.0]
  def change
    create_table :lista_pedidos do |t|
      t.string :id_pedido
      t.string :nombre
      t.string :telefono
      t.string :direccion
      t.string :estado

      t.timestamps
    end
  end
end
