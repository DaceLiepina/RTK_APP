import { type FormEvent, type JSX, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectError, selectUser } from './selectors' // ← PIEVIENOJAM selectUser
import { login } from './authSlice'
import { useNavigate } from 'react-router-dom' // ← PIEVIENOJAM useNavigate
import style from './Login.module.css'

export default function Login(): JSX.Element {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const error = useAppSelector(selectError)
	const user = useAppSelector(selectUser) // ← Iegūstam lietotāja stāvokli
	const dispatch = useAppDispatch()
	const navigate = useNavigate() // ← Navigācijas hooks

	// ← PIEVIENOJAM useEffect, kas pārbauda vai lietotājs ir ielogojies
	useEffect(() => {
		if (user) {
			navigate('/') // ← Novirza uz Home, ja lietotājs ir ielogojies
		}
	}, [user, navigate])

	function handleLogin(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		dispatch(login({ username, password }))
		// Pēc veiksmīgas ielogošanās, useEffect automātiski novirzīs uz Home
	}
	
	// ← JA LIETOTĀJS IR IELOGOJIES, NERĀDĀM LOGIN FORMU
	if (user) {
		return (
			<div className={style.loadingContainer}>
				<div className={style.loadingSpinner}>Loading...</div>
			</div>
		)
	}
	
	return (
		<div className={style.loginContainer}>
			<h1 className={style.loginTitle}>Welcome Back</h1>
			<p className={style.loginSubtitle}>Please login to your account</p>
			
			<div className={style.hintText}>
				Подсказка: emilys, emilyspass
			</div>
			
			{error && (
				<div className={style.errorMessage}>
					{error}
				</div>
			)}
			
			<form onSubmit={handleLogin} className={style.loginForm}>
				<div className={style.inputGroup}>
					<label htmlFor="username" className={style.inputLabel}>
						Username
					</label>
					<input
						id="username"
						type="text"
						placeholder="Enter your username"
						value={username}
						onChange={e => setUsername(e.target.value)}
						className={style.inputField}
					/>
				</div>
				
				<div className={style.inputGroup}>
					<label htmlFor="password" className={style.inputLabel}>
						Password
					</label>
					<input
						id="password"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className={style.inputField}
					/>
				</div>
				
				<button type="submit" className={style.loginButton}>
					Login
				</button>
			</form>
		</div>
	)
}