const Input = ({ title, placeholder, onChange }) => {
  return (
    <div>
      <div class="content-m-r w-[356px] h-[22px] mt-0.5 mr-3 px-2 leading-tight text-dark-80 bg-dark-25  ">{title}</div>
      <input
        class="content-l-r w-[356px] h-[30px] mr-3 mb-8 px-2  border-b border-dark-80 hover:border-secondary-b focus:border-secondary-b appearance-none bg-dark-25  leading-tight focus:outline-none hover:file:bg-violet-100 placeholder-dark-60 text-dark-100"
        type="text"
        placeholder={placeholder}
        aria-label="Full account"
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
