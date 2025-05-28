import React, { useState } from "react";
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
} from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [activeActionId, setActiveActionId] = useState(null);

  const actionHandler = (userId) => {
    setActiveActionId(activeActionId === userId ? null : userId);
  };

  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const editHandler = (userId) => {
    setEditUser(editUser === userId ? null : userId);
    console.log("edited");
  };

  const deleteHandler = (userId) => {
    setDeleteUser(deleteUser === userId ? null : userId);
    console.log("deleted");
  };

  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      department: "IT",
      status: "Active",
      location: "New York",
      lastActive: "2 hours ago",
      avatar:
        "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Manager",
      department: "Sales",
      status: "Active",
      location: "London",
      lastActive: "5 hours ago",
      avatar:
        "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "User",
      department: "Marketing",
      status: "Inactive",
      location: "Paris",
      lastActive: "2 days ago",
      avatar:
        "https://ui-avatars.com/api/?name=Mike+Johnson&background=ec4899&color=fff",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Editor",
      department: "Content",
      status: "Active",
      location: "Berlin",
      lastActive: "1 hour ago",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Williams&background=14b8a6&color=fff",
    },
  ]);

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

  return (
    <div className="flex flex-row-reverse">
      <Sidebar />
      <div className="flex-1 bg-white dark:bg-gray-900">
        <Navbar />
        <main className="p-4 mt-16 ml-0 mr-16">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
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
                          className="py-3.5 px-4 sm:px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell"
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
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
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
        </main>
      </div>
    </div>
  );
}

export default Users;
