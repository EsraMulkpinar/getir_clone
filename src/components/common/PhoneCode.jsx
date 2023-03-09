import React from 'react'
import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

const PhoneCode = () => {
  const [selected, setSelected] = useState('TR')
  const phones={
    TR:'+90',
    US:'+1',
    GB:'+44',
    FR:'+33',
    DE:'+49',
    IT:'+39',
  }
  return (
    <div className='w-1/3 h-11'>
      <ReactFlagsSelect
      className='border-borderColor!'
      selectedSize={15}
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={Object.keys(phones)}
        customLabels={{
            TR:'+90',
            US:'+1',
            GB:'+44',
            FR:'+33',
            DE:'+49',
            IT:'+39',
        }}
        placeholder={"Code"}
      />
    </div>
  )
}

export default PhoneCode
