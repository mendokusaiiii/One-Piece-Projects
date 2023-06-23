import IPirate from '../Interfaces/IPirate';
import Pirate from '../database/Domains/Pirate';
import PirateODM from '../database/Models/PirateODM';
import ErrorHandler from '../Utils/ErrorHandler';

class PirateService {
  private createPirateDomain(pirate: IPirate | null): Pirate | null {
    if (pirate) {
      return new Pirate(pirate);
    }
    return null;
  }

  public async createOnePirate(pirate: IPirate) {
    const pirateODM = new PirateODM();
    const newPirate = await pirateODM.create(pirate);
    return this.createPirateDomain(newPirate);
  }

  public async getPirate() {
    const pirateODM = new PirateODM();
    const getAllPirates = await pirateODM.find();
    return getAllPirates.map((pirate) => this.createPirateDomain(pirate));
  }

  public async getPirateById(id: string) {
    if (id.length !== 24) {
      throw new ErrorHandler(422, 'Invalid mongo id');
    }
    const pirateODM = new PirateODM();
    const findPirateById = await pirateODM.findById(id);
    return this.createPirateDomain(findPirateById);
  }
}

export default PirateService;
