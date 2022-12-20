import EmptyIcon from '../assets/imgs/empty.png'

const Empty = ({text = "還沒有資料哦"}) => {
    return (
        <div className="h-full flex flex-col items-center justify-center min-h-[5rem]">
            <div className='w-10'>
                <img src={EmptyIcon} className="w-full h-full object-contain "  alt="空檔案夾" />
            </div>
            <div className="w-full heading-h5 text-center mt-5 text-dark-70">{text}</div>
        </div>
    )
}
export default Empty;