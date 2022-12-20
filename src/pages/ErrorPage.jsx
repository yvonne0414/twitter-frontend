import errorImg from '../assets/imgs/404.jpg'
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
  const navigate  = useNavigate();
  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center'>
        <div className='w-1/3 mb-5'>
          <img src={errorImg} alt="404" className='w-full h-full object-contain' />
        </div>
        <Button text={"回首頁"} onClick={()=>{navigate("/main")}} />
    </div>
  );
};
export default ErrorPage;