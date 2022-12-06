import { useEffect, useState } from "react";
import useAuth from "../../hooks/auth/useAuth";
import LoadingScreen from "../LoadingScreen";
import LandingPageDisplay from "./display";

const LandingPage = () => {
  const [loading, setLoading] = useState(true)
  const { authenticateWithToken } = useAuth();


  const authenticate = async () => {
    await authenticateWithToken()
    setLoading(false)
  }

  useEffect(() => {
    authenticate()
  }, [])

  return (
    <>
      {loading
        ? <LoadingScreen />
        : <LandingPageDisplay />
      }
    </>
  );
};

export default LandingPage;
