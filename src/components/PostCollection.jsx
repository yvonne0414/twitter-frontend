import { PostItem } from "./index";

const PostCollection = ({postList}) => {
    return (
        <>
            {
                postList.map((postInfo)=>{
                    return (
                        <PostItem postInfo={postInfo} key={`post-${postInfo.id}`}></PostItem>
                    )
                })
            }
        </>
    )
};

export default PostCollection;