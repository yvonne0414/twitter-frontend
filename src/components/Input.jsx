import { useEffect, useState } from 'react';

const Input = ({ requiredData, onChange, isTextArea = false }) => {

  function handleInputChange(e) {
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
    onChange(e.target.value);
  }

  function isTextLimitVisible() {
    if (!requiredData.textLimit) {
      return false;
    }
    if (!requiredData.value) {
      return false;
    }
    return true;
  }

  return (
    <div className={`w-full`}>
      <div className="content-m-r w-full h-[22px] mt-0.5 mr-3 px-2 leading-tight text-dark-80 bg-dark-25  ">{requiredData.title}</div>
      {isTextArea ? (
        <textarea
          className={`content-l-r w-full min-h-[78px] mr-3 px-2  border-b-2   appearance-none bg-dark-25  leading-tight focus:outline-none  placeholder-dark-60 text-dark-100 disabled:border-dark-50 ${
            requiredData.invalid ? 'border-error' : 'border-dark-80 hover:border-secondary-b focus:border-secondary-b'
          }`}
          onChange={handleTextAreaChange}
          value={requiredData.value}
          disabled={requiredData.disabled}
          placeholder={requiredData.placeholder}
        ></textarea>
      ) : (
        <input
          value={requiredData.value}
          disabled={requiredData.disabled}
          className={`content-l-r w-full h-[30px] mr-3 px-2  border-b-2   appearance-none bg-dark-25  leading-tight focus:outline-none  placeholder-dark-60 text-dark-100 disabled:border-dark-50 ${
            requiredData.invalid ? 'border-error' : 'border-dark-80 hover:border-secondary-b focus:border-secondary-b'
          }`}
          type="text"
          placeholder={requiredData.placeholder}
          onChange={handleInputChange}
        />
      )}
      <div className="flex h-[32px]">
        <span className={`${!requiredData.invalid && 'hidden'} text-error content-s-b w-[256px]`}> {requiredData.errorMessage}</span>
        <span className={`text-dark-80 content-s-b w-full text-right ${isTextLimitVisible() ? 'visible' : 'invisible'}`}>
          {requiredData.value?.length ?? 0}/{requiredData.textLimit}
        </span>
      </div>
    </div>
  );
};
export default Input;
