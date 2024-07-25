import React from 'react'

const Value =  ({onIncrem, onDecrem}) => {
    return <div>
        <button type='button' onClick={onIncrem}>+</button>
        <button type='button' onClick={onDecrem}>-</button>
    </div>

}
export default Value