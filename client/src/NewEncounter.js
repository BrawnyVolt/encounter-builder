import MonsterBar from "./MonsterBar.js"

function NewEncounter(){
//first part of the fetch is post a new encounter (with a name) and then return back(when it's done) the encounter number
//then use that number as the encounter_id and grab the arrays with stuff for the mon_id and quantity.
///then post those 3 to the join table and move on to the next pair.
//do this for the length of the array (post-streilizing)





    function gettingBothValuesSimul(){
        let listOfMonsterNodes = document.getElementsByTagName('select');
        let listOfQuantities = document.getElementsByTagName('input');
        //for each index, post to monster_encounter
        
    }


    let monsterArray = [];
    let quantityArray = [];
    // new button that adds a new bar(appends to original bar and also adds a delete button that removes just that bar and the button itself)

    function gettingTheSelects(){
        //first, generate the list of select tags
        let listOfMonsterNodes = document.getElementsByTagName('select');
        //then iterate through them
        let monIndex;
        for (monIndex = 0; monIndex < listOfMonsterNodes.length; ++monIndex) {
            console.log(listOfMonsterNodes[monIndex].value);
        } 
    }
    function mappingInstead(){
        let listOfMonsterNodes = document.getElementsByTagName('select');

        const arrayofnewstuff = listOfMonsterNodes.map((index, value) => {
            console.log(listOfMonsterNodes[value].value);
        })
        console.log(arrayofnewstuff);
        
    }

    function gettingTheQuantities(){
        let listOfQuantities = document.getElementsByTagName('input');
        let quanIndex;
        let quantityArray = []
        for (quanIndex = 0; quanIndex < listOfQuantities.length; ++quanIndex) {
            if(listOfQuantities[quanIndex].value === ""){
            console.log ("0");
            quantityArray.push("0")
         } else{
            console.log(listOfQuantities[quanIndex].value);
            let qArray = listOfQuantities[quanIndex].value;
            quantityArray.push(qArray);
            console.log(quantityArray); }
        } 
    }
    function getAllValues() {
        gettingTheSelects()
        gettingTheQuantities()
        console.log(monsterArray, quantityArray);
        
    }



            //for each class monster-bar, get value and quantity
            // fetch post to join table, with mon_id and quant



    return (
        <div>
            <h1> Building new encounters, get yer new encounters here</h1>
            <button onClick={getAllValues}>Build Encounter!</button>
            <MonsterBar />
        </div>
    )

}
export default NewEncounter;