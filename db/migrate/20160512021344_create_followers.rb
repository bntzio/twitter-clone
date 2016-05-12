class CreateFollowers < ActiveRecord::Migration
  def change
    create_table :followers do |t|
      t.integer :user_id
      t.integer :followed_by

      t.timestamps null: false
    end
  end
end
