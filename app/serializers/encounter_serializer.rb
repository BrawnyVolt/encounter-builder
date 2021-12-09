class EncounterSerializer < ActiveModel::Serializer
    attributes :id, :name, :monsters
    # object is the current thing thats basically being mapped through as the serializer is filtering the results 
    def monsters
       something = object.monsters.collect do |monster|
            monster.monster_encounters.collect do |monster_encounter|
                if monster_encounter.encounter_id === object.id
                    {id:monster.id, name:monster.name, hp:monster.hp, ac:monster.ac, img_url:monster.img_url, quantity: monster_encounter.quantity}
                end
            end
        end
        something.flatten
    end
end