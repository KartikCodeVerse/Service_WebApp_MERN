import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contact/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`contact after delete: ${data}`);

      if (response.ok) {
        toast.success("contact deleted succussfully..");
        getAllContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <section className="admin_user_section">
      <div className="container">
        <h1>Admin Contact</h1>
      </div>
      <div className="container admin_contact">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>

              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>

                  <button
                    onClick={() => {
                      deleteContact(contact._id);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminContacts;
