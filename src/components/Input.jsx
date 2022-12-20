import { useState } from 'react';

const Input = ({ requiredData, onChange, isTextArea = false }) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }

  function handleTextAreaChange(e) {
    let lineHeight = 15;
    let borderTop = 1;
    let borderBottom = 1;
    let height = parseInt(getComputedStyle(e.target).height.slice(0, -2), 10)
    if (e.target.scrollHeight > height) {
        e.target.style.height = `${e.target.scrollHeight + borderTop + borderBottom}px`
    } else {
        while (height >= e.target.scrollHeight) {
            e.target.style.height = `${height - lineHeight}px`
            height -= lineHeight
        }
        e.target.style.height = `${height + lineHeight}px`
    }
    setInputValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className={`w-full`}>
      <div className="content-m-r w-full h-[22px] mt-0.5 mr-3 px-2 leading-tight text-dark-80 bg-dark-25  ">{requiredData.title}</div>
      { isTextArea ?
          <textarea className={`content-l-r w-full min-h-[78px] mr-3 px-2  border-b-2   appearance-none bg-dark-25  leading-tight focus:outline-none  placeholder-dark-60 text-dark-100 disabled:border-dark-50 ${requiredData.invalid ? 'border-error' : 'border-dark-80 hover:border-secondary-b focus:border-secondary-b'}`} placeholder='有什麼新鮮事？' onChange={handleTextAreaChange} value={inputValue}></textarea> :
          <input
            value={inputValue}
            disabled={requiredData.disabled}
            className={`content-l-r w-full h-[30px] mr-3 px-2  border-b-2   appearance-none bg-dark-25  leading-tight focus:outline-none  placeholder-dark-60 text-dark-100 disabled:border-dark-50 ${
              requiredData.invalid ? 'border-error' : 'border-dark-80 hover:border-secondary-b focus:border-secondary-b'
            }`}
            type="text"
            placeholder={requiredData.placeholder}
            onChange={handleInputChange}
          />
      }
      <span className={`inline-block mt-2 ${!requiredData.invalid && 'hidden'}  text-error content-s-b  mt-1 h-[32px] w-[256px]`}> {requiredData.errorMessage}</span>
      <span className={`text-dark-80 inline-block content-s-b w-full text-right ${requiredData.textLimit && inputValue.length > 0 ? 'visible' : 'invisible'}`}>
        {inputValue.length}/{requiredData.textLimit}
      </span>
    </div>
  );
};
export default Input;