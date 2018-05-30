export class Task {
    public id:number;
    public task: string;
    public debut: string;
    public fin: string;

    public constructor(values:Object = {}){
        Object.assign(this,values);
    }
}
