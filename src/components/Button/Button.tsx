import './Button.css'
interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        className = "custom-button"
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
