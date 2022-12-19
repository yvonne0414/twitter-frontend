import backIcon from '../assets/imgs/icon/leftarrow.png';

import { useNavigate } from 'react-router-dom';

const Navbar = ({haveBack = false, title, subtitle='', subtitleStyle='font-medium text-[13px] text-secondary'}) => {
  const navigate = useNavigate();

  return (
    <nav className={`bg-dark-0 w-full border-b border-borderC flex items-center ${subtitle ? 'py-4 px-6' : 'p-6'} `}>
      {
        haveBack && (
          <div className="w-[17px] h-[14px] mr-[19px] cursor-pointer">
            <img src={backIcon} alt="" className='w-full h-full object-contain' onClick={() => {navigate(-1)}} />
          </div>
        )
      }
      <div>
        <h4 className="heading-h4">{title}</h4>
        <span className={`${subtitleStyle} ${!subtitle && 'hidden'}`}>
          {subtitle}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;