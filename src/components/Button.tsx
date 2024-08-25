interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        type="button"
        className="btn btn-primary"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
