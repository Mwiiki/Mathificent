import React, {Fragment} from 'react'

function SelectInput({currentValue, setCurrentValue, 
                        label, values}) {
  const selectOptions = values.map((value)=>
    <option value={value[1]} key={value[0].toString()}>{value[0]}</option>
  );
  return (
    <Fragment>
      <label htmlFor={label} className="col font-weight-bold">{label}: </label>
      <select defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        id={label}
        className="col form-control">
        {selectOptions}
      </select>
    </Fragment>
  )
}
export default SelectInput