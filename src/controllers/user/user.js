import { sequelize } from '../../config/index.js';
import { User } from '../../models/index.js'
import { v4 as uuidv4 } from 'uuid';
import { getById, errorHandler } from '../../utils/index.js'

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

async function editUser(req, res, next) {

	try {
		const result = await sequelize.transaction(async (t) => {

			let id = req.query.id;

			let { firstName, lastName, email } = req.body;

			let user = await getById.findUser(id);

			if(!user) {
				return res.status(404).send('User not found');
			}

			let updateUser = await User.update({
				firstName: firstName,
				lastName: lastName,
				email: email,
			}, { 
				where: { id: id},
				transaction: t 
			});

			if(updateUser[0] === 0){
				// return res.status(201)
				throw new Error("No update performed")
			}

			const updatedUser = await getById.findUser(id, {transaction: t});

			return updatedUser;
		});

		res.send(result);

	} catch (err) {
		// res.status(400).send({
		// 	message: 'Failed to edit user'
		// })
		err.statusCode = 400
		next(err)
	}
}


export { 
    getUserById, 
    getAllUsers,
    addUser,
	editUser
};