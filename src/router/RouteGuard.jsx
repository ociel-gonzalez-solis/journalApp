import { useSelector } from "react-redux";

export const RouteGuard = () => {
  const { status } = useSelector((state) => state.auth);

  return status === "not-authenticated" ? (
    children
  ) : (
    <Navigate to={"/auth/login"} />
  );
};
