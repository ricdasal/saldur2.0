class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :codigo
      t.string :nombre
      t.string :descripcion
      t.integer :precio
      t.string :imagen

      t.timestamps
    end
  end
end
