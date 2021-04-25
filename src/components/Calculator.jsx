import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../store/Calculator/Calculator.actions'

const Calculator = () => {
  const dispatch = useDispatch()
  const result = useSelector(state => state.calculator)

  return (
    <>
      <input type="text" placeholder="a"/>
      <input type="text" placeholder="b"/>

      <button onClick={() => dispatch(sum(1, 2))}>somar</button>
      <button onClick={() => dispatch(subtract(2, 1))}>subtrair</button>

      <div>
        {result}
      </div>
    </>
  )
}

export default Calculator
