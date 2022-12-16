import { PostItem } from "./index";

const PostCollection = ({postList}) => {
    return (
        <>
            {
                postList.map((postInfo)=>{
                    console.logpostInfo
                    return (
                        <PostItem postInfo={postInfo} key={postInfo.postId}></PostItem>
                    )
                })
            }
        </>
    )
};

export default PostCollection;