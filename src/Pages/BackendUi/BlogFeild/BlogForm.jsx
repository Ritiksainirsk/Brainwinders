import React, { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to the backend.
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    // Example of sending form data to an API
    // fetch('/api/blogs', {
    //   method: 'POST',
    //   body: formData,
    // }).then((response) => {
    //   if (response.ok) {
    //     // Handle success
    //   }
    // });

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);


    // for (let [key, value] of formData.entries()) {
    //     console.log(`${key}:`, value);
    //   }
  };

  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto p-8 bg-white md:shadow-lg rounded-lg md:border-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Blog Post
        </h2>
        <form className="space-y-6" action="https://beautymakeup.maltitextiles.com/get_api/frontApi.php" encType="multipart/form-data" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your blog title"
              required
              name="title"
            />
              <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 hidden w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your blog title"
              required
              name="action"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your blog description"
              rows="5"
              required
               name="desc"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1 block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
              required
              name="image"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
