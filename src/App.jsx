import React, { useState } from 'react'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import UserTable from './components/UserTable'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Vladimir Horn', email: 'zygyfuqih@mailinator.com' },
		{ id: 2, name: 'Kendall Molina', email: 'boxiqan@mailinator.com' },
		{ id: 3, name: 'Elton Downs', email: 'syzaja@mailinator.com' },
	]

	// States
	const initialFormState = { id: null, name: '', email: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	// Add User
	const addUser = (user) => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	// Delete User
	const deleteUser = (id) => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))	
	}

	// Update User
	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	// Edit User
	const editRow = (user) => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email })
	}

	return (
		<div className="container mx-auto">
			<div className="border border-indigo-500 p-3 rounded-md mt-5 flex space-x-3">
				<div className="w-full">
					{editing ? (
						<div>
							<h2 className='text-xl mb-3'>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2 className='text-xl mb-3'>Add User</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className="w-full">
					<h2 className='text-xl'>Users List</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App