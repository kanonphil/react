import React from 'react'
import { age, test1 } from '../util/myMath';
import * as fun from '../util/myMath'

const Export1 = () => {
  const data1 = age;
  test1()
  console.log(fun.name)
  fun.test2()

  return (
    <div>Export1</div>
  )
}

export default Export1