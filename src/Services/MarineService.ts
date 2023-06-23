import IMarine from '../Interfaces/IMarine';
import Marine from '../database/Domains/Marine';
import MarineODM from '../database/Models/MarineODM';
import ErrorHandler from '../Utils/ErrorHandler';

class MarineService {
  private createMarineDomain(marine: IMarine | null): Marine | null {
    if (marine) {
      return new Marine(marine);
    }
    return null;
  }

  public async createOneMarine(marine: IMarine) {
    const marineODM = new MarineODM();
    const newMarine = await marineODM.create(marine);
    return this.createMarineDomain(newMarine);
  }

  public async getMarine() {
    const marineODM = new MarineODM();
    const getAllMarines = await marineODM.find();
    return getAllMarines.map((marine) => this.createMarineDomain(marine));
  }

  public async getMarineById(id: string) {
    if (id.length !== 24) {
      throw new ErrorHandler(422, 'Invalid marine id');
    }
    const marineODM = new MarineODM();
    const findMarineById = await marineODM.findById(id);
    return this.createMarineDomain(findMarineById);
  }


  public async updateMarineById(id: string, body: IMarine) {
    const updateMarine = await this.getMarineById(id);
    if(!updateMarine) {
      throw new ErrorHandler(404, 'Marine not found!');
    }
    if (id.length !== 24) {
      throw new ErrorHandler(422, 'Invalid marine id')
    }

    const marineODM = new MarineODM();
    const updateMarineId = await marineODM.updateMarineById(id, body)
    return this.createMarineDomain(updateMarineId);
  }
}

export default MarineService;
