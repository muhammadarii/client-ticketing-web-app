export default function ButtonOne({ children, onClick }) {
  return (
    <button
      className="bg-green portrait:w-[300px] portrait:h-[40px] w-[412px] h-[50px] rounded-[45px] font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
