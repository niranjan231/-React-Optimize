import { useState } from "react";


const useCounter = () => {
    const [count, setCount] = useState(0);
    const HandleIncress = () => {
        setCount(count + 1)
    }
    const HandleDncress = () => {
        setCount(count - 1)
    }
    return { count, HandleDncress, HandleIncress }

}
export default useCounter;