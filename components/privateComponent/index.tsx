import { useUserContext } from "@/context/UserContext";
import { Roles } from "@/types";
import { ReactNode } from "react";

interface PrivateComponentProps {
  children: ReactNode;
  roles?: Roles;
}

const PrivateComponent = ({ children, roles }: PrivateComponentProps) => {
  const { user } = useUserContext();

  if (roles) {
    if (user?.role.name && roles.includes(user?.role.name)) {
      return <>{children}</>;
    }
    return null;
  }

  return <>{children}</>;
};

export default PrivateComponent;
