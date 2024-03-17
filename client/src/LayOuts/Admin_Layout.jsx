import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import {
  FaUserAlt,
  FaCommentAlt,
  FaHome,
  FaServicestack,
} from "react-icons/fa";
import { useAuth } from "../store/auth";

const Admin_Layout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    console.log("Admin Layout2:", user);
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={"/admin/users"}>
                  <FaUserAlt /> users
                </Link>
              </li>
              <li>
                <Link to={"/admin/contacts"}>
                  <FaCommentAlt /> contacts
                </Link>
              </li>
              <li>
                <Link to={"/service"}>
                  <FaServicestack /> services
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaHome /> Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Admin_Layout;
