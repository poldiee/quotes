export class Quote {
//   id!: number;
//   name!: string;
//   quote!: string;
//   title!: string;
//   author!: string;
showInfo:boolean;
  constructor(  
    public id:number,
    public name:string,
    public title:string,
    public quote:string,
    public author:string)
    {
      this.showInfo=false;
    }
}
