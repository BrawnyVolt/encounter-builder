function MonsterCard({ monster_id }) {


    function hurt(){
        let button = document.getElementById('hurt');
        button.nextElementSibling.value--;}
        // let hp = document.getElementById('hurt').nextElementSibling.value; also works, and is faster as long as it has an id, just need the variable to point at the location of the value, and not the number itself?
    
        // document.getElementById('target').nextElementSibling.value = 4   <==this totally works, just have to point at the thing. maybe give each card an id at creation that is their name+number.   well, really, as long as it can grab itself, it should be able to grab the siblings just fine
        }
    
        function heal(e){
            let button = e.target
            let hpbar = button.previousElementSibling;
            hpbar.value ++;
        
        
    
        }
    

    return (
        <>
        <div className="monster-wrapper">
            <img src={monster.img_url} />
            <h2>{monster.name}</h2>
            <h2>{monster.ac}</h2>
            <meter></meter>
            <h2>{monster.hp}</h2>
        </div>



        <div className="monster-display">
            <img class="monster-thumbnail" src={monster.img_url} /> 
            <h2>{monster.name}</h2>
            <p>{monster.ac}</p>
            <button onclick={hurt}>-</button>
            <meter value={monster.hp} min="0" max={monster.hp}></meter>
            <button onClick={heal}>+</button>
            {/* element = el.previousElementSibling; element = el.nextElementSibling;  for getting the location of the bar as long as you're right next to it? or maybe do previous previous and put both buttons underneath?*/}
            {/* let meter = document.getElementById('idname');   meter.value = newValue*/}
        </div>
        </>
    )
}

export default Note;