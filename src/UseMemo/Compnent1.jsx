import { useMemo, useState } from "react";




const Component1 = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)
    const handleAdd = () => {
        setAdd(add + 1)
    }
    const handleMinus = () => {
        setMinus(minus - 1)
    }
    // ----create problem
    // function multply() {
    //     console.log("usemomo problem is creating")
    //     return add * 10;
    // }

    // ----now solve this problem by useMemo
    const Multpliction = useMemo(function multply() {
        console.log("usemomo problem is creating")
        return add * 10;
    }, [add])

    return (
        <div>
            <h1>example of useMemo</h1>
            {/* ----call here after creating problem */}
            {/* {multply()}  */}

            {/* now we can solve */}
            {Multpliction}
            <h2>{add}</h2>
            <button onClick={handleAdd}>Incress</button>
            <br></br>
            <h2>{minus}</h2>
            <button onClick={handleMinus}>Decress</button>
        </div>
    )
}
export default Component1;