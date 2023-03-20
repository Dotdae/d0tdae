import { useContext } from 'react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { ThemeContext } from '../contexts/ThemeContext';

export default function Nav() {

  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'dark' : ''}>
        {/* Nav Section */}
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-oxygen'>d0tdae</h1>
            <ul className='flex items-center'>
                <li>
                    {theme ?  
                      <BsFillSunFill onClick={() => changeTheme()} className='cursor-pointer text-xl'/> :
                      <BsFillMoonStarsFill onClick={() => changeTheme()} className='cursor-pointer text-xl'/> 
                    }
                    
                </li>
                <li>
                     <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
                </li>
             </ul>
        </nav>
    </div>
  )
}
