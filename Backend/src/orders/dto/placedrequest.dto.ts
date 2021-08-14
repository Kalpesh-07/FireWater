export class PlacedRequest{
    // { userId: 2, products: [ { incart: 1, id: 2 }, { incart: 1, id: 3 } ] }
    userId : number;

    products : [
        {
            incart : number,
            id : number
        }
    ];
}