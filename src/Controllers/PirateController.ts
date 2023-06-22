import { NextFunction, Request, Response } from 'express';
import IPirate from '../Interfaces/IPirate';
import PirateSerice from '../Services/PirateService';

class PirateController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: PirateSerice;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new PirateSerice();
  }

  public async createOnePirate() {
    const pirate: IPirate = {
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
}

export default PirateController;
