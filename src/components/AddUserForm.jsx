import React, { useState } from 'react'

const AddUserForm = (props) => {
	const initialFormState = { id: null, name: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = (e) => {
		const { name, value } = e.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className='border border-indigo-500 p-5 rounded-md'
			onSubmit={(e) => {
				e.preventDefault()
				if (!user.name || !user.email) return
				
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3 mb-2' value={user.name} onChange={handleInputChange} />

			<label>Email</label>
			<input type="email" name="email" className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3 mb-2' value={user.email} onChange={handleInputChange} />

			<button className='bg-purple-500 text-white px-4 py-3 rounded-md mt-3'>Add new user</button>
		</form>
	)
}

export default AddUserForm