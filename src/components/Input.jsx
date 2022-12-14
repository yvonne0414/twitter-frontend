import { useState } from 'react';

const Input = ({ requiredData, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div class={`w-[356px]`}>
      <div class="content-m-r w-full h-[22px] mt-0.5 mr-3 px-2 leading-tight text-dark-80 bg-dark-25  ">{requiredData.title}</div>
      <input
        value={inputValue}
        disabled={requiredData.disabled}
        class={`content-l-r w-full h-[30px] mr-3 px-2  border-b-2   appearance-none bg-dark-25  leading-tight focus:outline-none  placeholder-dark-60 text-dark-100 disabled:border-dark-50 ${
          requiredData.invalid ? 'border-error' : 'border-dark-80 hover:border-secondary-b focus:border-secondary-b'
        }`}
        type="text"
        placeholder={requiredData.placeholder}
        onChange={handleInputChange}
      />
      <span class={`inline-block mt-2 ${requiredData.invalid ? 'visible' : 'invisible'}  text-error content-s-b  mt-1 h-[32px] w-[256px]`}> {requiredData.errorMessage}</span>
      <span class={`text-dark-80 inline-block content-s-b w-[100px] text-right ${requiredData.textLimit ? 'visible' : 'invisible'}`}>
        {inputValue.length}/{requiredData.textLimit}
      </span>
    </div>
  );
};
export default Input;
