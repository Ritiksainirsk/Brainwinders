import React, { useState } from "react";

export default function PageManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const pages = [
    {
      no: 1,
      name: "Career Counselling Online",
      sefUrl: "online-career-counselling",
      created: "23 Jul 2024 05:48 PM",
      status: "Active",
    },
    {
      no: 2,
      name: "Educational Consultant",
      sefUrl: "educational-consultant",
      created: "22 Jul 2024 03:23 PM",
      status: "Active",
    },
    {
      no: 3,
      name: "DMIT - Dermatoglyphics Multiple Intelligence Test",
      sefUrl: "dmit-dermatoglyphics-multiple-intelligence-test",
      created: "13 May 2024 10:46 AM",
      status: "Inactive",
    },
    {
        no: 3,
        name: "DMIT - Dermatoglyphics Multiple Intelligence Test",
        sefUrl: "dmit-dermatoglyphics-multiple-intelligence-test",
        created: "13 May 2024 10:46 AM",
        status: "Inactive",
      },
    // Add more entries here as needed
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="p-6">
      {/* Search Filters */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-4">Search Page</h1>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Page Name"
            className="border rounded-md p-2 w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input type="date" className="border rounded-md p-2 w-1/3" />
          <select
            className="border rounded-md p-2 w-1/3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Live">Live</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
          <div className="space-x-2">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
              View All
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              + Add Page
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-md overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-left text-sm uppercase font-medium">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Page Name</th>
              <th className="py-3 px-4">Page SEF Url</th>
              <th className="py-3 px-4">Created</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {pages.map((page) => (
              <tr key={page.no} className="border-t">
                <td className="py-3 px-4">{page.no}</td>
                <td className="py-3 px-4">{page.name}</td>
                <td className="py-3 px-4">{page.sefUrl}</td>
                <td className="py-3 px-4">{page.created}</td>
                <td className="py-3 px-4">
                  {page.status === "Live" ? (
                    <span className="text-green-600">✔</span>
                  ) : (
                    <span className="text-gray-400">Inactive</span>
                  )}
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="text-blue-600">Edit Front </button>
                  <button className="text-red-600">Edit Data</button>
                  <button className="text-gray-600">Live Link</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Total Pages: 271 Total Display: 10
        </span>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md">1</button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
          <button className="px-3 py-1 border rounded-md">Last</button>
        </div>
      </div>
    </div>
  );
}
