import LoginRepository from '../Repositories/Login';
import JWT from '../Utils/JWT';

class AuthService {
  private userRepository: LoginRepository;
  private userSecurity: JWT;

  constructor() {
    this.userRepository = new LoginRepository();
    this.userSecurity = new JWT();
  }

  public async findByUserName(username: string): Promise<any> {
    const user = await this.userRepository.findByUsername(username);
    return user;
  }

  public async findByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  public async createUser(user: any): Promise<any> {
    
  }
}