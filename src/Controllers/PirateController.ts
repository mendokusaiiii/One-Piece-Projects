import { NextFunction, Request, Response } from 'express';
import IPirate from '../Interfaces/IPirate';
import PirateService from '../Services/PirateService';
import ErrorHandler from '../Utils/ErrorHandler';

class PirateController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: PirateService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new PirateService();
  }

  public async createOnePirate() {
    const pirate: IPirate = {
      id: this.req.body.id,
      name: this.req.body.name,
      alias: this.req.body.alias,
      crew: this.req.body.crew,
      bounty: this.req.body.bounty,
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
      const newPirate = await this.service.createOnePirate(pirate);
      return this.res.status(201).json(newPirate);
    } catch (error) {
      this.next(error);
    }
  }

  public async getPirate() {
    try {
      const getAllPirates = await this.service.getPirate();
      return this.res.status(200).json(getAllPirates);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getPirateById() {
    try {
      const getPirateById = await 
      this.service.getPirateById(this.req.params.id);
      if(!getPirateById) {
        throw new ErrorHandler(404, 'Pirate not found');
      }
      return this.res.status(200).json(getPirateById)
    } catch (error) {
      this.next(error);
    }
  }

  public async updatePirateById() {
    try {
      const updatePirate = await 
      this.service.updatePirateById(this.req.params.id, this.req.body);
      return this.res.status(200).json(updatePirate);
    } catch (error) {
      this.next(error);
    }
  }

  public async deletePirateById() {
    try {
      const deletePirate = await this.service.deletePirateById(this.req.params.id);
      return this.res.status(201).json(deletePirate);
    } catch (error) {
      this.next(error);
    }
  }
}

export default PirateController;
