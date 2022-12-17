import { PostItem, Navbar, PostNew, Tabs, PopularCollection, PostCollection, Button, UserSideBar } from '../components';
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
    },
     {
        userId: 4,
        avatar: '',
        name: 'Apple',
        account: '@apple',
        postId: 4,
        time: '3小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: true,
        commentNum: 1,
        likeNum: 7
    },
    {
        userId: 5,
        avatar: '',
        name: 'Jane Cathy',
        account: '@iamjane1999',
        postId: 5,
        time: '小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: false,
        commentNum: 12,
        likeNum: 88
    },
    {
        userId: 6,
        avatar: '',
        name: 'Apple3',
        account: '@apple3',
        postId: 6,
        time: '2小時',
        disc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        isLike: true,
        commentNum: 13,
        likeNum: 76
    }
]

const PostListPage = () => {
  const { showNotification } = useContext(notifyContext)
  return (
    <div className='flex justify-between'>
      <aside className='h-screen pt-4'>
        <UserSideBar />
      </aside>
      <main  className='h-screen overflow-auto border-x border-borderC mx-6'>
        <Navbar title={"首頁"} />
        <PostNew />
        <PostCollection postList={testPostList} />
      </main>
      <aside className='h-screen pt-4'>
        <PopularCollection title={"推薦追蹤"} userInfoList={userInfoList}/>
      </aside>
    </div>
  );
};
export default PostListPage;