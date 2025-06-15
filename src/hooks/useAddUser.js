import { useState } from "react";
import axios from "axios";

export const useAddUser = (onUserAdded) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "password",
    role: "user",
    status: "active",
    department: "",
    location: "",
    lastActive: new Date().toISOString().split("T")[0],
    avatar:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  });

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setNewUser({
      name: "",
      email: "",
      password: "password",
      role: "user",
      status: "active",
      department: "",
      location: "",
      lastActive: new Date().toISOString().split("T")[0],
      avatar:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/users", {
        ...newUser,
        id: Date.now().toString(),
      });

      closeModal();
      if (onUserAdded) {
        onUserAdded(response.data);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (field, value) => {
    setNewUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    isOpen,
    loading,
    newUser,
    openModal,
    closeModal,
    handleSubmit,
    updateUser,
  };
};
