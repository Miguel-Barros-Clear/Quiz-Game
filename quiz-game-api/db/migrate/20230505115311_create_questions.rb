class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.string :option_a
      t.string :option_b
      t.string :option_c
      t.string :option_d
      t.string :answer

      t.timestamps
    end
  end
end
