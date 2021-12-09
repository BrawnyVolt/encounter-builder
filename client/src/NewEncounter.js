import MonsterBar from "./MonsterBar.js"

function NewEncounter(){


    // new button that adds a new bar(appends to original bar and also adds a delete button that removes just that bar and the button itself)

    function addMonsterToEncounter(e){
        console.log(e.target.value)

    }


    return (
        <div>
            <h1> Building new encounters, get yer new encounters here</h1>
            <MonsterBar />
        </div>
    )
}

export default NewEncounter;