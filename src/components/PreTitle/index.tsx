import reactLogo from '@/assets/react.svg'
import './PreTitle.css'

export const PreTitle = () => {
  return (
    <div className='pre-title'>
      <div className='title'>Prettier List</div>
      <a href='https://reactjs.org' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </div>
  )
}
