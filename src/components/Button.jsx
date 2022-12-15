const Button = ({ text, outline, width, height, textStyle = 'content-login-btn' }) => {
  return (
    <button
      className={`${width} ${height} ${textStyle} ${outline ? 'text-brand' : 'text-dark-0'} ${
        outline ? 'bg-transparant border border-brand' : 'bg-brand'
      } rounded-full px-6 py-2`}
    >
      {text}
    </button>
  );
};
export default Button;
