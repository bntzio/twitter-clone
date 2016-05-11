class AddNameToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :first_name, :last_name
    end
  end
end
