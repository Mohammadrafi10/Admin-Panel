import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import {
  HiPlus,
  HiSearch,
  HiFilter,
  HiDotsVertical,
  HiMail,
  HiOfficeBuilding,
  HiLocationMarker,
  HiX,
} from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import AddUsers from "../../components/addButtons/AddUsers/addusers";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [activeActionId, setActiveActionId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const actionHandler = (userId) => {
    setActiveActionId(activeActionId === userId ? null : userId);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  const editHandler = async (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditingUser(userToEdit);
    setShowEditModal(true);
    setActiveActionId(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/users/${editingUser.id}`,
        editingUser
      );
      setUsers(
        users.map((user) => (user.id === editingUser.id ? editingUser : user))
      );
      setShowEditModal(false);
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteHandler = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3001/users/${userId}`);
        setUsers(users.filter((user) => user.id !== userId));
        setActiveActionId(null);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesRole =
      selectedRole === "" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">{error}</div>;
  }

  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1 bg-white dark:bg-gray-900">
        <Navbar />
        <main className="p-4 mt-16 ml-0 mr-16">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <HiPlus className="w-5 h-5" />
              Add User
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Users Management
            </h2>
          </div>

          {/* Search and Filter Container */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Users
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:border-indigo-500"
                  />
                  <HiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filter by Role
                </div>
                <div className="relative">
                  <select
                    className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 pl-10 appearance-none focus:outline-none focus:border-indigo-500"
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                  </select>
                  <HiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border-b border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell"
                        >
                          Last Active
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 px-4 sm:px-6"
                        >
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <img
                                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex-shrink-0"
                                src={user.avatar}
                                alt={user.name}
                              />
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                  {user.name}
                                </div>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                                  <HiLocationMarker className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                  {user.location}
                                </div>
                                {/* Mobile-only contact info */}
                                <div className="md:hidden mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <HiMail className="h-3 w-3 text-gray-400" />
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap hidden md:table-cell">
                            <div className="text-sm text-gray-900 dark:text-gray-100">
                              <div className="flex items-center gap-1">
                                <HiMail className="h-4 w-4 text-gray-400" />
                                {user.email}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <HiOfficeBuilding className="h-4 w-4" />
                                {user.department}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-gray-100">
                              {user.role}
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap hidden sm:table-cell">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(
                                user.status
                              )}`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                            {user.lastActive}
                          </td>
                          <td className="py-4 px-4 sm:px-6 whitespace-nowrap text-right text-sm font-medium">
                            <div className="relative">
                              <button
                                onClick={() => actionHandler(user.id)}
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 p-1"
                              >
                                <HiDotsVertical className="w-5 h-5" />
                              </button>
                              {activeActionId === user.id && (
                                <div className="absolute right-0 top-12 transform -translate-y-full  w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                                  <button
                                    onClick={() => editHandler(user.id)}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                                  >
                                    <MdEdit className="w-5 h-5 mr-2" />
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => deleteHandler(user.id)}
                                    className="flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                                  >
                                    <MdDelete className="w-5 h-5 mr-2" />
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Modal */}
          {showEditModal && editingUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Edit User
                  </h3>
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingUser(null);
                    }}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Role
                    </label>
                    <select
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, role: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="user">User</option>
                      <option value="editor">Editor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    <select
                      value={editingUser.status}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          status: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      value={editingUser.department}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          department: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={editingUser.location}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setShowEditModal(false);
                        setEditingUser(null);
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <AddUsers
            isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
          />
        </main>
      </div>
    </div>
  );
}

export default Users;
