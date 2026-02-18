

const myButton = ({ onClick, text, variant }) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>{text}</button>
  );
};

export default myButton;
