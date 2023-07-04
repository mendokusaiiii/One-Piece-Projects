import 'dotenv/config';

class Variable {
  
  public static readonly JWT_SECRET: string = process.env.JWT_SECRET!

  public static readonly PASS_SECRET: string = process.env.PASS_SECRET!

}

export default Variable;
