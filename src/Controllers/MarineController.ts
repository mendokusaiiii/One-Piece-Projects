import { NextFunction, Request, Response } from 'express';
import IMarine from '../Interfaces/IMarine';
import MarineService from '../Services/MarineService';
import ErrorHandler from '../Utils/ErrorHandler';

class MarineController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MarineService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MarineService();
  }

  public async createOneMarine() {
    const marine: IMarine = {
      id: this.req.body.id,
      name: this.req.body.name,
      alias: this.req.body.alias,
      rank: this.req.body.rank,
      affiliation: this.req.body.affiliation,
      akumaNoMi: this.req.body.akumaNoMi,
      haki: this.req.body.haki,
      weapons: this.req.body.weapons,
      age: this.req.body.age,
      gender: this.req.body.gender,
      height: this.req.body.height,
      personality: this.req.body.personality,
      goal: this.req.body.goal,
    };

    try {
      const newMarine = await this.service.createOneMarine(marine);
      return this.res.status(201).json(newMarine);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMarine() {
    try {
      const getAllMarines = await this.service.getMarine();
      return this.res.status(200).json(getAllMarines);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getMarineById() {
    try {
      const getMarineById = await this.service.getMarineById(this.req.params.id);
      if(!getMarineById) {
        throw new ErrorHandler(404, 'Marine not found');
      }
      return this.res.status(200).json(getMarineById)
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMarineById() {
    try {
      const updateMarine = await 
      this.service.updateMarineById(this.req.params.id, this.req.body);
      return this.res.status(200).json(updateMarine);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteMarineById() {
    try {
      const deleteMarine = await this.service.deleteMarineById(this.req.params.id);
      return this.res.status(201).json(deleteMarine);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MarineController;
