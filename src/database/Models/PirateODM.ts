import { Schema, UpdateQuery } from 'mongoose';
import AbstractODM from './AbstractODM';
import IPirate from '../../Interfaces/IPirate';

class PirateODM extends AbstractODM<IPirate>{
  constructor() {
    const schema = new Schema<IPirate>({
      name: { type: String, required: true },
      alias: { type: String, required: false },
      crew: { type: String, required: true },
      bounty: { type: Number, required: true },
      akumaNoMi: { type: String, required: false },
      haki: { type: String, required: false },
      weapons: { type: String, required: false },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
      height: { type: String, required: true },
      personality: { type: String, required: true },
      goal: { type: String, required: true },
    });
    super(schema, 'Pirate');
  }

  public async find(): Promise<IPirate[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IPirate | null> {
    return this.model.findById(id);
  }

  public async updatePirateById(id: string, obj: IPirate): Promise<IPirate | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IPirate>,
      { new: true },
    );
  }
}

export default PirateODM;