import './Login.scss';

const Login = () => {
	return (
		<div className="login">
			<div className="loginbox">
				<form>
					<label>
						안녕하세요
						<br />
						<strong>황서연의 블로그</strong> 입니다
					</label>
					<div className="inputplace">
						<input placeholder="이메일" />
						<input placeholder="비밀번호" />
					</div>
					<div className="button">
						<button>확인</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
