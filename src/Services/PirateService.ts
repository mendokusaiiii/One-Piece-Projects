import IPirate from '../Interfaces/IPirate';
import Pirate from '../database/Domains/Pirate';
import PirateODM from '../database/Models/PirateODM';

class PirateSerice {
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
}

export default PirateSerice;
