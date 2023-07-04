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
    const encryptedPassword = this.userSecurity.encrypt(user.password);
    const newUser = {
      username: user.username,
      name: user.name,
      email: user.email,
      password: encryptedPassword,
      isAdmin: user.isAdmin,
    }
    const savedUser = await this.userRepository.createUser(newUser);
    return savedUser;
  }

  public comparePassword(password: string, decryptedPassword: string): boolean {
    return this.userSecurity.comparePassword(password, decryptedPassword)
  }

  // public async generateTokenAccess(id: string, password: string): Promise<string> {
  //   const user = 
  // }
}