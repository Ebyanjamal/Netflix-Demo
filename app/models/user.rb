class User < ApplicationRecord
    has_many :movies 
    has_many :genres, through: :movies
    has_secure_password

    # validates :username, presence: true, uniqueness: true, length: {minimum:3}
end
