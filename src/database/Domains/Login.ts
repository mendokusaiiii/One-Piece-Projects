import ILogin from '../../Interfaces/ILogin';

class Login {
  protected username: string;
  protected password: string;
  protected email: string;
  
  constructor(login: ILogin) {
    this.username = login.username;
    this.password = login.password;
    this.email = login.email;
  }
}

export default Login;
