import MonsterBar from "./MonsterBar.js"

function NewEncounter(){

    let monsterArray = [];
    let quantityArray = [];
    // new button that adds a new bar(appends to original bar and also adds a delete button that removes just that bar and the button itself)

    function gettingTheSelects(){
        //first, generate the list of select tags
        let listOfMonsterNodes = document.getElementsByTagName('select');
        //then iterate through them
        let monIndex;
        let monsterArray = []
        for (monIndex = 0; monIndex < listOfMonsterNodes.length; ++monIndex) {
            console.log(listOfMonsterNodes[monIndex].value);
            let mArray = monsterArray.push(listOfMonsterNodes[monIndex].value);
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
            console.log(listOfQuantities[quanIndex].value);
            let qArray = listOfQuantities[quanIndex].value;
            quantityArray.push(qArray);
        } 
    }
    function getAllValues() {
        gettingTheSelects()
        gettingTheQuantities()
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