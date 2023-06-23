import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMarine from '../../Interfaces/IMarine';

class MarineODM extends AbstractODM<IMarine>{
  constructor() {
    const schema = new Schema<IMarine>({
      name: { type: String, required: true },
      alias: { type: String, required: false },
      rank: { type: String, required: true },
      affiliation: {type: String, required: true },
      akumaNoMi: { type: String, required: false },
      haki: { type: String, required: false },
      weapons: { type: String, required: false },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
      height: { type: String, required: true },
      personality: { type: String, required: true },
      goal: { type: String, required: true },
    });
    super(schema, 'Marine');
  }

  public async find(): Promise<IMarine[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IMarine | null> {
    return this.model.findById(id);
  }
}

export default MarineODM;