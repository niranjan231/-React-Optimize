import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";






const Component2 = () => {
    const [count, setCount] = useState(0)

    // i am create a any function
    // const useCallPrectice = () => {
    // }j

    //apply useCallBack
    const useCallPrectice = useCallback(() => {
    }, [])
    return (
        <div>
            <h1>UseCallback Problem</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Incress</button>
            <ChildComponent useCallPrectice={useCallPrectice} />
        </div>
    )
}
export default Component2;