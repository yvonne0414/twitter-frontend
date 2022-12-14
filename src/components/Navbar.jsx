// icon
import backIcon from '../assets/imgs/icon/leftarrow.png';

import { useNavigate } from 'react-router-dom';

const Navbar = ({haveBack = false, title}) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-dark-0 w-full border-b border-borderC flex items-center px-6 py-8 mb-4">
      {
        haveBack && (
          <div className="w-[17px] h-[14px] mr-[19px] cursor-pointer">
            <img src={backIcon} alt="" className='w-full h-full object-contain' onClick={() => {navigate(-1)}} />
          </div>
        )
      }
      
      <h4 className="heading-h4">{title}</h4>
    </nav>
  );
};

export default Navbar;
