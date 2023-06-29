import LoginODM from '../database/Models/LoginODM';
import ILogin from '../Interfaces/ILogin';

class LoginRepository {
  public async findAll(): Promise<ILogin[]> {
    const users = await LoginODM.find({}).select('-password')
    return users;
  }

  public async findById(id: string): Promise<ILogin | null> {
    const userById = await LoginODM.findById(id).select('-password');
    return userById;
  }

  public async findByUsername(username: string): Promise<ILogin | null> {
    const userName = await LoginODM.findOne({ username }).select('-password');
    return userName;
  }

  public async findByEmail(email: string): Promise<ILogin | null> {
    const userEmail = await LoginODM.findOne({ email }).select('-password');
    return userEmail;
  }

  public async createUser(user: any): Promise<ILogin | null> {
    const createNewUser = new LoginODM({
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    });
    const userCreated = await createNewUser.save();
    return userCreated;
  }

  public async updateUsername(id: string, username: string): Promise<ILogin | null> {
    const user = await LoginODM.findByIdAndUpdate(id, { username }, { new: true }).select('-password');
    return user;
  }

  public async updateName(id: string, name: string): Promise<ILogin | null> {
    const user = await LoginODM.findByIdAndUpdate(id, { name }, { new: true }).select('-password');
    return user;
  }

  public async updateEmail(id: string, email: string): Promise<ILogin | null> {
    const user = await LoginODM.findByIdAndUpdate(id, { email }, { new: true }).select('-password');
    return user;
  }

  public async updatePassword(id: string, password: string): Promise<ILogin | null> {
    const user = await LoginODM.findByIdAndUpdate(id, { password }, { new: true }).select('-password');
    return user;
  }

  public async deleteUser(id: string): Promise<ILogin | null> {
    const user = await LoginODM.findByIdAndDelete(id);
    return user;
  }

  public async getUserStats(lastYear: Date): Promise<ILogin[] | null> {
    const users = await LoginODM.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    return users;
  }
}

export default LoginRepository;