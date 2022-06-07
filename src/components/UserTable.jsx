import React from 'react'

const UserTable = (props) => (
  <div className='border border-indigo-500 p-5 rounded-md mt-3'>
    
    <div className='flex justify-between w-full'>
      <p className='items-center'>Name</p>
      <p className=' items-start'>Email</p>
      <p>Actions</p>
    </div>
    
    <div className='w-full'>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <div key={user.id} className='flex justify-between items-start'>
            <p className='mb-2'>{user.name}</p>
            <p className='mb-2'>{user.email}</p>
            <div>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="bg-purple-500 text-white px-4 py-3 rounded-md mr-3 mb-3"
              >
                Edit
              </button>
              <button
                onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) props.deleteUser(user.id) }} 
                className="bg-red-400 text-white px-4 py-3 rounded-md mr-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className='text-xl text-red-400'>No users available</p>
        </div>
      )}
    </div>

  </div>
)

export default UserTable