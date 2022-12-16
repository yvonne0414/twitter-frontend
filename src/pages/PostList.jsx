import { PostItem, NotificationCollection, Navbar, PostNew, Tabs, PopularCollection, PostCollection } from '../components';
import AuthInputs from '../components/AuthInputs';
import Button from '../components/Button';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

const tabListTest = [
  {
      title: "推文",
      tabid: "tab1",
      isActive: true,
  },
  {
      title: "回應",
      tabid: "tab2",
      isActive: false,
  }
  ,
  {
      title: "喜歡的內容",
      tabid: "tab3",
      isActive: false,
  }
]

const userInfoList = [
  {
    id:1,
    avatar:'',
    name:'Pizza Hut',
    account: '@pizzahut',
    isActive: false
  },
  {
    id:2,
    avatar:'',
    name:'Pizza Hut',
    account: '@McDona',
    isActive: false
  },
  {
    id:3,
    avatar:'',
    name:'L\'Oréal',
    account: '@Loreal',
    isActive: false
  },
  {
    id:4,
    avatar:'',
    name:'Nintendo',
    account: '@Nintendo',
    isActive: true
  },
  {
    id:5,
    avatar:'',
    name:'MasterCard',
    account: '@MasterCard',
    isActive: false
  },
]

const testPostList = [
    {
        userId: 1,
        avatar: '',
        name: 'Apple',
        account: '@apple',
        postId: 1,
        time: '3小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: true,
        commentNum: 1,
        likeNum: 7
    },
    {
        userId: 2,
        avatar: '',
        name: 'Jane Cathy',
        account: '@iamjane1999',
        postId: 2,
        time: '小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: false,
        commentNum: 12,
        likeNum: 88
    },
    {
        userId: 3,
        avatar: '',
        name: 'Apple3',
        account: '@apple3',
        postId: 3,
        time: '2小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: true,
        commentNum: 13,
        likeNum: 76
    }
]

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
      <PostNew />
      <Tabs tabList={tabListTest}>
          <div tabid={"tab1"} >
            <PostCollection postList={testPostList} />
          </div>
          <div tabid={"tab2"} >tab2 content</div>
          <div tabid={"tab3"} >tab3 content</div>
      </Tabs>
      <div className='w-80'>
        <PopularCollection title={"推薦追蹤"} userInfoList={userInfoList}/>
      </div>
      
    </>
  );
};
export default PostList;