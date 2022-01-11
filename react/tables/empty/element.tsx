import * as animationData from '../public/lottie/empty.json'
import { Player } from '@lottiefiles/react-lottie-player';
export const AppEmpty = () => {
  
  return(
    <div className='flex flex-row justify-center items-center p-6'>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '200px', width: '200px' }}
      />      
    </div>
  )
}