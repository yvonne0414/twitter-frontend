import { PostItem, NotificationCollection, Navbar } from '../components';
import AuthInputs from '../components/AuthInputs';
import Button from '../components/Button';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

import SideBar from '../components/SideBar';


const PostList = () => {
  const { showNotification } = useContext(notifyContext)
  return (
    <>
      <button onClick={()=>{showNotification("warn", "test")}}>notify test</button>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
      <NotificationCollection />
      <Navbar haveBack={true} title="推文" />
      <Navbar title="推文2" />
      <SideBar/>
    </>
  );
};
export default PostList;