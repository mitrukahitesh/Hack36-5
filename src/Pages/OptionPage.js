import React from 'react'

const OptionPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-blue">
      <div className="sm:flex-col sm:w-auto w-full mx-14 px-10 py-5 my-4 bg-opacity-50 rounded-lg shadow bg-white sm:px-6 md:px-8 lg:px-10">
        <p className="text-3xl font-bold py-5 text-center">Role</p>
        <input type="radio" id="Admin" name="Role" value="Admin" />&nbsp;
        <label for="Admin">Admin</label><br />
        <input type="radio" id="User" name="Role" value="User" />&nbsp;
        <label for="User">User</label><br />
        <button className="bg-custom-blue text-white text-sm py-2 px-4 mt-2 rounded hover:bg-transparent hover:ring-2 hover:ring-custom-blue hover:text-custom-blue" onClick={() => window.location.href = "/Admin/Dashboard"}>Submit</button>
      </div>
    </div>
  )
}

export default OptionPage