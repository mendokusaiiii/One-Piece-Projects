import ILogin from '../../Interfaces/ILogin';

class Login {
  protected username: string;
  protected password: string;
  protected email: string;
  protected name: string;
  protected isAdmin: boolean;
  
  constructor(login: ILogin) {
    this.username = login.username;
    this.password = login.password;
    this.email = login.email;
    this.name = login.name;
    this.isAdmin = login.isAdmin;
  }
}

export default Login;
