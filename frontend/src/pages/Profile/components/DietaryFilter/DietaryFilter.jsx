import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Ketogenic', label: 'Ketogenic' },
  { value: 'Gluten Free', label: 'Gluten Free' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Lacto-Vegetarian', label: 'Lacto-Vegetarian' },
  { value: 'Ovo-Vegetarian', label: 'Ovo-Vegetarian' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Pescetarian', label: 'Pescetarian' },
  { value: 'Paleo', label: 'Paleo' },
  { value: 'Primal', label: 'Primal' }
]

export default () => (
    <Select
      defaultValue={[options[0], options[1]]}
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"

    />
  );