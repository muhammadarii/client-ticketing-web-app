export default function ButtonTwo({ children, onClick }) {
  return (
    <button
      className="bg-softNavy portrait:w-[300px] portrait:h-[40px] w-[412px] h-[50px] rounded-[45px] text-white font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
