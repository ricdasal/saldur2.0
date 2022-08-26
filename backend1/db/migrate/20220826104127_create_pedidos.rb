class CreatePedidos < ActiveRecord::Migration[7.0]
  def change
    create_table :pedidos do |t|
      t.string :nombre_ciente
      t.string :direccion
      t.string :estado

      t.timestamps
    end
  end
end
