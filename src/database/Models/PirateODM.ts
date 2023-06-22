import { Schema } from 'mongoose';
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
}

export default PirateODM;