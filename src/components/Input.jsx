const Input = ({ title, placeholder }) => {
  return (
    <div>
      <div class="content-m-r w-72  mr-3 px-2 leading-tight text-dark-80 bg-dark-20  ">{title}</div>
      <input
        class="content-l-r w-72 mr-3 px-2  border-b border-dark-80 appearance-none bg-dark-20  leading-tight focus:outline-none hover:file:bg-violet-100 placeholder-dark-60 text-dark-100"
        type="text"
        placeholder={placeholder}
        aria-label="Full account"
      />
    </div>
  );
};
export default Input;
