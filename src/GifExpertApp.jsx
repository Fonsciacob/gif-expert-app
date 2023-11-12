import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import logo from './images/logo.png';

export const GifExpertApp = () => {

  const [theme, setTheme] = useState('light');
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories([category]);
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark');
  }

  return (
    <>
      <div className='p-4'>
        <div className='lg:w-4/6 md:w-full m-auto'>

          <div className='text-end'>
            <button className='backdrop-blur-md dark:bg-white/10 bg-white rounded-full p-1.5 shadow-sm' onClick={toggleTheme}>
              {theme === 'light' ? <SunIcon className="h-7 w-7 text-yellow-400" /> :
                <MoonIcon className="h-7 w-7 text-yellow-400" />
              }
            </button>
          </div>

          <div className='w-fit m-auto py-3'>
            <img src={logo} />
          </div>

          <AddCategory
            onSearch={onAddCategory}
          />

          {
            categories.map((category) => (
              <GifGrid
                key={category}
                category={category} />
            ))
          }
        </div>
      </div>
    </>
  )
}
