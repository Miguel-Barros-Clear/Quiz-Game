class Question < ApplicationRecord
    has_many :answers
    has_many :users, through: :answers
    validates :question, presence: true
    validates :answer, presence: true
end
