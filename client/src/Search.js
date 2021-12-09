import { useEffect } from "react";

function Search({user}) {



    useEffect(()=>{
        
        fetch("mystuff")
        .then(r => r.json())
        .then((json) => renderUser(json))

    },[])

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