import { Schema, UpdateQuery } from 'mongoose';
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

  public async updateMarineById(id: string, obj: IMarine): Promise<IMarine | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IMarine>,
      { new: true },
    );
  }

  public async deleteMarineById(id: string): Promise<boolean> {
    const deleteMarine = await this.model.deleteOne({ _id: id });
    return deleteMarine.deletedCount > 0;
  }
}

export default MarineODM;