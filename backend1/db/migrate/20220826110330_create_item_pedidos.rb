class CreateItemPedidos < ActiveRecord::Migration[7.0]
  def change
    create_table :item_pedidos do |t|
      t.integer :id_pedido
      t.integer :id_producto
      t.integer :cantidad

      t.timestamps
    end
  end
end
