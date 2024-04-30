

function classDecorator<T extends {new (...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty='new Property';
        hello='overrride';
    }
}




@classDecorator
export class Superclass{

    public myProperty:string='asjdnu'

    print(){
        console.log('hola mundo')
    }
}

console.log(Superclass);

const myClass = new Superclass();
console.log(myClass);

