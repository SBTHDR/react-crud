import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(() => {
      setUser(props.currentUser)
  },
    [ props ]
  )

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className='border border-indigo-500 p-5 rounded-md'
      onSubmit={(e) => {
        e.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3 mb-2' value={user.name} onChange={handleInputChange} />

      <label>Email</label>
      <input type="text" name="email" className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3 mb-2' value={user.email} onChange={handleInputChange} />

      <button className='bg-indigo-500 text-white px-4 py-3 rounded-md mr-3 mt-3'>Update user</button>
      <button onClick={() => props.setEditing(false)} className="bg-gray-700 text-white px-4 py-3 rounded-md mt-3">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm