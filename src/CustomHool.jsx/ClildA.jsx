import useCounter from "./useCounter";


const ChildA = () => {
    const { count, HandleDncress, HandleIncress } = useCounter()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={HandleIncress}>Increes</button>
            <button onClick={HandleDncress}>Dncrees</button>

        </div>
    )
}
export default ChildA;