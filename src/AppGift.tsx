import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const AppGift = () => {
    const [categories, setCategories] = useState(['sofia', 'lorena'])


    const onAddCategory = (newCategory: any) => {
        if (categories.includes(newCategory)) return ;
        setCategories([newCategory, ...categories])
    }

  return (
    <>
    <AddCategory  onAddCategory={onAddCategory}/>
    <ol >
        {
            categories.map((category, index) => <li key={index}>{category}</li>)
        }
    </ol>
    </>
  )
}


