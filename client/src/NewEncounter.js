import MonsterBar from "./MonsterBar.js"

function NewEncounter(){


    // new button that adds a new bar(appends to original bar and also adds a delete button that removes just that bar and the button itself)

function getAllValues() {
////////////////////////////////////
//gets each input field from the document. works perfectly, but need to integrate the select menus
    let inputs, index;

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
    // deal with inputs[index] element.
    console.log(inputs.value);
    }
//////////////////////////////////////

    // let selectForms, ind;

    // selectForms = document.getElementsByTagName('select');
    // for (ind = 0; ind < selectForms.length; ++ind) {
    // // deal with selectForms[ind] element.
    // let currentPlace = selectForms[ind];
    // console.log(currentPlace);
    // }



//another variant of pulling value from nodes,. but this is made for one at a time. Going to combine it with the above to see if it'll work.
    var select = document.getElementById('language');
    var value = select.options[select.selectedIndex].value;
    console.log(value); // en
//////////////////////////////


//so, pull the whole tag based array, then iterate through it one at a time with array[index].value. That pulls the monster id.
var select = document.getElementsByTagName('select');
// var value = select.options[select.selectedIndex].value;
// console.log(value); // en





var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;
console.log(value); // en

//it fucking works lets gooooooooooo
function gettingTheSelects(){
//first, generate the list of select tags
let listOfMonsterNodes = document.getElementsByTagName('select');
//then iterate through them
let index;
for (index = 0; index < listOfMonsterNodes.length; ++index) {
    console.log(listOfMonsterNodes[index].value);
}
}








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