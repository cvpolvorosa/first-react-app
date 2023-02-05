import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props){
    const[age,setAge] = useState(30)

    function increaseAge(){
        setAge(age+1);
    }

    return(
        <>
            <div>
                <button onClick={increaseAge}>Increase age</button>
                {/* <p>You're {age} years old</p> */}
                <AgeDisplay age={age}/>
            </div>
        </>
    )

}