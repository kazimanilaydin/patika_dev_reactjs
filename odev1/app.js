import axios from 'axios'

const getData = async (user_id) => {
	// https://jsonplaceholder.typicode.com/users/1
	// https://jsonplaceholder.typicode.com/posts?userId=1
	
	if (user_id < 0 || !Number.isInteger(user_id)) {
 		return
	}

	const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
	const { data: userPosts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

	return {...user, posts: userPosts }
}

export default getData