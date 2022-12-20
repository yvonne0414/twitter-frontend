import { ReplyItem, Empty } from "./index";

const ReplyCollection = ({replyList}) => {
    return (
        <>
            {
                replyList.length ?
                replyList.map((replyInfo)=>{
                    return (
                        <ReplyItem replyInfo={replyInfo} key={replyInfo.id}></ReplyItem>
                    )
                }):
                <Empty />
            }
        </>
    )
};

export default ReplyCollection;