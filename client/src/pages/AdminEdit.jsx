import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminEdit = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  const { authorizationToken, API } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const userData = await response.json();
      console.log(`user single data:`, userData);
      setData(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("User data updated successfully");
      } else {
        toast.error("Failed to update user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin_edit">
      <h1>Update User Data</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleInput}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleInput}
            required
            autoComplete="off"
          />
        </div>
        <br />
        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default AdminEdit;
