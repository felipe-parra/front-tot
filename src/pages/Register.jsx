import React from 'react';

const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);

		const data = {
			username: form.get('username'),
			password: form.get('password')
		};
		fetch('http://localhost:3900/api/user', {
			method: 'POST',
			body: data
		})
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="container">
			<div className="row">
				<form onSubmit={handleSubmit} className="col 12">
					<div className="row">
						<div className="input-field col s6">
							<input
								type="text"
								placeholder="username"
								name="username"
								id="username"
								className="validate"
							/>
							<label htmlFor="username">Username</label>
						</div>
						<div className="input-field col s6">
							<input type="password" name="password" className="validate" placeholder="password" />
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<button type="submit" className="btn waves-effect waves-light">
								<i className="material-icons right">send</i> Register
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
