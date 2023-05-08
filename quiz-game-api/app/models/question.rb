class Question < ApplicationRecord
    has_many :answers
    validates :answer, presence: true
end
