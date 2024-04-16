import { sequelize } from '../../config/index.js';
import { User } from '../../models/index.js'
import { v4 as uuidv4 } from 'uuid';
import { getById } from '../../utils/index.js'

async function getUserById(req, res) {

	try{
		let userId = req.query.id;
		const user = await User.findByPk(userId);
		res.send(user);
	} catch(err) {
		res.status(500).send('Server Error')
	}
}

async function getAllUsers(req, res) {
	try{
	    const user = await User.findAll();
	    res.send(user);
	} catch(err) {
	    res.status(500).send('Server Error')
	}
}

async function addUser(req, res) {
	try {
		
		const result = await sequelize.transaction(async (t) => {
			let { firstName, lastName, email } = req.body;

			let newUser = await User.create({
				id: uuidv4(),
				firstName: firstName,
				lastName: lastName,
				email: email,

			}, {transaction: t});

			return newUser;

		})

		res.status(201).send(result);

	} catch (err) {
		res.status(400).send({
			message: 'Failed to add user'
		})
	}
}

async function editUser(res, req) {
	// console.log('res update', res)
	try {
		const result = await sequelize.transaction(async (t) => {
			console.log("in req", req)

			let { id, firstName, lastName } = req.query;
			// let userId = req.query.id;
			// let firstName = req.query.firstName;
			// let lastName = req.query.lastName;

			console.log("userId", id);
			// console.log("firstName", firstName)
			// console.log("lastName", lastName)

			let user = getById.findUser(userId);
			// console.log("user", user)

			if(!user) {
				return res.status(404).send('User not found');
			}

			let updateUser = await User.update({
				firstName: firstName,
				lastName: lastName
			}, { transaction: t });

			return updateUser;
		});

		res.send(result);

	} catch (err) {
		res.status(400).send({
			message: 'Failed to edit user'
		})
	}
}


export { 
    getUserById, 
    getAllUsers,
    addUser,
	editUser
};