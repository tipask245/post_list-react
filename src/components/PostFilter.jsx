import React from 'react'
import FormInput from './UI/inputs/FormInput'
import SortSelect from './UI/selects/SortSelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className="sort_select_wrap">
        <FormInput
          title='Поиск'
          value={filter.search}
          onChange={e => setFilter({...filter, search:e.target.value})}
        />
        <SortSelect
          value={filter.sort}
          onChange={sortPosts => setFilter({...filter, sort: sortPosts})}
          defaultValue='Сортировка по'
          options={[
            {value: 'id', name: 'По умолчанию'},
            {value: 'title', name: 'По названию'}, 
            {value: 'description', name: 'По описанию'},
          ]}
        />
      </div>
  )
}

export default PostFilter