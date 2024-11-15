import React, { useState } from 'react'


interface Props {
    onAddCategory: (newCategory: string) => void;
}


export const AddCategory = ({onAddCategory}: Props) => {
    const [inputValue, setInputValue] = useState('one punch')

    const onInputChange = ( event: any) => {
        
        setInputValue(event.target.value)
        
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return ;
        onAddCategory(inputValue.trim())
        setInputValue(' ')

    }

  return (
    <>
        <form onSubmit={onSubmit}>
            <input
            type='text'
            value={inputValue}
            onChange={onInputChange}
            />


        </form>
    </>
  )
}

