class User < ApplicationRecord
    has_secure_password
    has_many :answers
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    validates :score, presence: true
end
