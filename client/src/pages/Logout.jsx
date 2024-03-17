import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Link to="/login" />;
};

export default Logout;
