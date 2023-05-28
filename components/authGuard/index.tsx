import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "@/components/spinner";

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(status === "loading")) {
      if (status === "unauthenticated") {
        router.push("/login");
      }
    }
  }, [status, router]);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null;
};
