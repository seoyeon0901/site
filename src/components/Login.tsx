import { useState } from 'react';
import './Login.scss';

const Login = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const onchangeid = (e: any) => {
		setId(e.target.value);
	};
	const onchangepassword = (e: any) => {
		setPassword(e.target.value);
	};

	const onsubmit = (e: any) => {
		setId('');
		setPassword('');
	};
	return (
		<div className="login">
			<div className="loginbox">
				<div className="red-circle" />
				<div className="yellow-circle" />
				<div className="green-circle" />
				<form onSubmit={onsubmit}>
					<div className="info">
						<p>안녕하세요</p> <strong>OUR PAGE</strong>입니다.
					</div>
					<div className="inputplace">
						<input
							type="text"
							placeholder="아이디(이메일)을 입력해 주세요"
							value={id}
							onChange={onchangeid}
						/>
						<input
							type="password"
							placeholder="비밀번호를 입력해 주세요"
							value={password}
							onChange={onchangepassword}
						/>
					</div>
					<div className="button">
						<button type="submit" className="assign">
							확인
						</button>
						<button className="join">회원가입</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
