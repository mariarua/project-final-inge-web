import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "@/components/spinner";

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(status === "loading")) {
      if (status === "unauthenticated") {
        router.push("/401");
      }
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null;
};
