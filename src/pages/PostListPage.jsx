import { Navbar, PostNew, PopularCollection, PostCollection, UserSideBar, NotificationCollection } from '../components';
import { useContext, useEffect, useState } from 'react';
import { notifyContext } from '../contexts/NotifyContext';
import { getUserTop10 } from '../apis/user';

import { getPostlist } from '../apis/tweet';



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
  const { showNotification } = useContext(notifyContext);
  const [userTop10, setUserTop10] = useState([])
  const [postList, setPostList] = useState([])

  useEffect(()=>{
    async function getPopularInfoList(){
      const top10 = await getUserTop10();
      setUserTop10(top10)
      // console.log('top10', top10);
    }
    getPopularInfoList();

    async function getPosts(){
      const posts = await getPostlist();
      setPostList(posts)
      // console.log('top10', top10);
    }
    getPosts();
  },[])
  
  return (
    <div className='flex justify-between'>
      <aside className='h-screen pt-4'>
        <UserSideBar />
      </aside>
      <main  className='h-screen overflow-auto border-x border-borderC mx-6'>
        <Navbar title={"首頁"} />
        <PostNew />
        <PostCollection postList={postList} />
      </main>
      <aside className='h-screen pt-4'>
        <PopularCollection title={"推薦追蹤"} userInfoList={userTop10}/>
      </aside>
      <NotificationCollection />
    </div>
  );
};
export default PostListPage;