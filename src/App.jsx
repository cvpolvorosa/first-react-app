import { AgeCounter } from "./AgeCounter"
// import { Car } from "./components/Car/Car"
// import { Greetings } from "./components/Greetings/Greetings"
import "./global.css"

//a component is a function basically; starts with a capital letter
export function App() {
    return <div style={{ 
        height: 100, 
        width: 100, 
        backgroundColor: "#0011ff", 
        border: "3px solid red" }}>
        <AgeCounter />
    </div>
    // return (
    //     <div>
    //         <Car />
    //         <Greetings />
    //     </div>
    // )

}