class CreateClientes < ActiveRecord::Migration[7.0]
  def change
    create_table :clientes do |t|
      t.string :nombre
      t.string :cedula
      t.string :correo
      t.string :telefono
    end
  end
end
