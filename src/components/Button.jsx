const Button = ({ text, iconName, outline, width, height, textStyle = 'content-login-btn', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${width} ${height} ${textStyle} ${outline ? 'text-brand' : 'text-dark-0'} ${outline ? 'bg-transparant border border-brand' : 'bg-brand'} rounded-full px-6 py-2 flex justify-center text-center}`}
    >
      {iconName && <img src={require(`../assets/imgs/icon/${iconName}.png`)} alt="" className={`object-contain`} />}

      {text}
    </button>
  );
};
export default Button;
