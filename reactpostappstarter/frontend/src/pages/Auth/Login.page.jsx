import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";
import { AuthenticationForm } from "./AuthenticationForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (email, password) => {
    if (!email || !password) return;
    loginService(email, password);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <AuthenticationForm onFormSubmit={onLogin} authLoading={authLoading} />
    </div>
  );
};

export default LoginPage;
