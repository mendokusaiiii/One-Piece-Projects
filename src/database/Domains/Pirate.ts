import IPirate from '../../Interfaces/IPirate';

class Pirate {
  protected id: string | undefined;
  protected name: string;
  protected alias?: string;
  protected crew: string;
  protected bounty: number;
  protected akumaNoMi?: string | undefined;
  protected haki?: string[] | undefined;
  protected weapons?: string | undefined;
  protected age: number;
  protected gender: string;
  protected height: string;
  protected personality: string;
  protected goal: string;
  
  constructor(pirate: IPirate) {
    this.id = pirate.id;
    this.name = pirate.name;
    this.alias = pirate.alias;
    this.crew = pirate.crew;
    this.bounty = pirate.bounty;
    this.akumaNoMi = pirate.akumaNoMi;
    this.haki = pirate.haki;
    this.weapons = pirate.weapons;
    this.age = pirate.age;
    this.gender = pirate.gender;
    this.height = pirate.height;
    this.personality = pirate.personality;
    this.goal = pirate.goal;
  }
}

export default Pirate;
