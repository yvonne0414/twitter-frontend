import { PostItem, Empty } from "./index";

const PostCollection = ({postList}) => {
    return (
        <>
            {
                postList.length ?
                postList.map((postInfo)=>{
                    return (
                        <PostItem postInfo={postInfo} key={`post-${postInfo.id}`}></PostItem>
                    )
                }):
                <Empty />
            }
        </>
    )
};

export default PostCollection;