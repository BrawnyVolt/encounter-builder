import { useEffect } from "react";

function Search({user}) {



    useEffect(()=>{
        
        fetch("mystuff")
        .then(r => r.json())
        .then((json) => renderUser(json))

    },[])
    let currentName = "";
    function singleCard(name, hp, ac, img_url, quantity) {
        
    }

    function cardFactory(){
        // take in the incoming fetch, for each key/value pair, get mon name, hp, ac, img_url from monster.find(:id-from-fetch), then do card quan:value times
    }


function renderUser (userData){
    console.log(userData);
}

    return(
        <div>
            <h1> This is where the encounters will live, its called search rn</h1>
        </div>
    )

    
};
export default Search;