export default function SButton({
  children,
  action,
  disabled,
  loading,
  className,
}) {
  return (
    <button className={className} onClick={action} disabled={disabled}>
      {loading ? "Loading..." : children}
    </button>
  );
}
