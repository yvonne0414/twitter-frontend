import { PostItem, Empty } from "./index";

const PostCollection = ({postList, onReplyAdded}) => {
    return (
        <>
            {
                postList.length ?
                postList.map((postInfo)=>{
                    return (
                        <PostItem postInfo={postInfo} key={`post-${postInfo.id}`} onReplyAdded={onReplyAdded}></PostItem>
                    )
                }):
                <Empty />
            }
        </>
    )
};

export default PostCollection;