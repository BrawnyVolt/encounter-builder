class Encounter < ApplicationRecord
    belongs_to :user
    has_many :monster_encounters
    has_many :monsters, through: :monster_encounters
end
