import { PostItem } from "./index";

const PostCollection = ({postList}) => {
    return (
        <>
            {
                postList.map((postInfo)=>{
                    return (
                        <PostItem postInfo={postInfo} key={postInfo.postId}></PostItem>
                    )
                })
            }
        </>
    )
};

export default PostCollection;