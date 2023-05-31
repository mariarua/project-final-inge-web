import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "@/components/spinner";
import { useUser } from "@/hooks/useUser";
import { Roles } from "@/types";

interface AuthGuardProps {
  children: JSX.Element;
  roles?: Roles;
}

export const AuthGuard = ({ children, roles }: AuthGuardProps) => {
  const { loading, status, userRole } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(status === "loading")) {
      if (status === "unauthenticated") {
        router.push("/401");
      }
    }
  }, [loading, status, router]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  if (status === "authenticated") {
    if (roles && (!userRole || !roles.includes(userRole))) {
      router.push("/403");
    }
    return <>{children}</>;
  }

  return null;
};
