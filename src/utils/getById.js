import { User } from '../models/index.js'

async function findUser(userId) {
    try {
        let user = await User.findByPk(userId);
        
        return user;
    } catch (err) {
        throw new Error('Failed to retreive user')
    }
}


export {
    findUser
}