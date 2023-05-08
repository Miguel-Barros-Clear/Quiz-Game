class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :content, null: false
      t.string :option_a, null: false
      t.string :option_b, null: false
      t.string :option_c, null: false
      t.string :option_d, null: false
      t.string :answer, null: false

      t.timestamps
    end
  end
end
