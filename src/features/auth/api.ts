import type User from './types/User'

export async function login(
	username: string,
	password: string
): Promise<User | { message: string }> {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username,
			password,
		}),
	})
	return res.json()
}

// atsevisks async funkcija - pieprasiijums par datu bazi
