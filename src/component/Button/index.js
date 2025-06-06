import { Button } from "react-bootstrap";

export const SButton = ({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) => {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};
