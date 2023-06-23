import IMarine from "../../Interfaces/IMarine";

class Marine {
  protected id: string | undefined;
  protected name: string;
  protected alias?: string;
  protected rank: string;
  protected affiliation: string;
  protected akumaNoMi?: string | undefined;
  protected haki?: string[] | undefined;
  protected weapons?: string | undefined;
  protected age: number;
  protected gender: string;
  protected height: string;
  protected personality: string;
  protected goal: string;

constructor(marine: IMarine) {
  this.id = marine.id;
  this.name = marine.name;
  this.alias = marine.alias;
  this.rank = marine.rank;
  this.affiliation = marine.affiliation;
  this.akumaNoMi = marine.akumaNoMi;
  this.haki = marine.haki;
  this.weapons = marine.weapons;
  this.age = marine.age;
  this.gender = marine.gender;
  this.height = marine.height;
  this.personality = marine.personality;
  this.goal = marine.goal;
  }
}

export default Marine;
