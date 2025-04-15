import { Button } from "react-bootstrap";

export const SButton = ({
  children,
  action,
  variant,
  size,
  loading,
  disabeld,
  className,
}) => {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabeld={disabeld}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};
