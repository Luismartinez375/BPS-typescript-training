import { ReactNode} from 'react'
import { UseCounterText } from './Context/CounterContext'
import { useCounter } from './Context/CounterContext'

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    const {count, increment,decrement} = useCounter()
    const {text,handleTextInput} = UseCounterText()

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input type="text" onChange={handleTextInput} />
            <h2>{text}</h2>
        </>
    )
}
export default Counter