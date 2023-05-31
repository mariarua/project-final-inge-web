import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_EMAIL } from "@/graphql/client/users";
import { useSession } from "next-auth/react";
import { ExtendedUser } from "@/types";
import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";

const useUser = () => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const { setUser } = useUserContext();

  const [getUserByEmail, { data: userData, error }] = useLazyQuery<{
    userByEmail: ExtendedUser;
  }>(GET_USER_BY_EMAIL, {
    fetchPolicy: "cache-first",
    onCompleted: (userResponse) => {
      setUser(userResponse?.userByEmail);
    },
  });

  useEffect(() => {
    if (sessionData) {
      getUserByEmail({ variables: { email: sessionData.user?.email } });
    }
  }, [getUserByEmail, sessionData]);

  return {
    loading: !error && !userData,
    status: sessionStatus,
    session: sessionData,
    user: userData?.userByEmail,
    userRole: userData?.userByEmail.role.name,
  };
};

export { useUser };
