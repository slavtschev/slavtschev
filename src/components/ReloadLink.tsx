import { Link as RouterLink, type LinkProps } from "react-router-dom";

export function Link(props: LinkProps) {
  return <RouterLink {...props} />;
}