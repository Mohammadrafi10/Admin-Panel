import { useState } from "react";
import axios from "axios";

export const useAddProduct = (onProductAdded) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stock: 0,
    status: "In Stock",
  });

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setNewProduct({
      name: "",
      category: "Electronics",  
      price: "",
      stock: 0,
      status: "In Stock",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/products", {
        ...newProduct,
        id: Date.now().toString(),
      });

      closeModal();
      if (onProductAdded) {
        onProductAdded(response.data);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = (field, value) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    isOpen,
    loading,
    newProduct,
    openModal,
    closeModal,
    handleSubmit,
    updateProduct,
  };
};
