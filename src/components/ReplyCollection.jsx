import { ReplyItem } from "./index";

const ReplyCollection = ({replyList}) => {
    return (
        <>
            {
                replyList.map((replyInfo)=>{
                    return (
                        <ReplyItem replyInfo={replyInfo} key={replyInfo.id}></ReplyItem>
                    )
                })
            }
        </>
    )
};

export default ReplyCollection;