// export interface ProductModelServer {
//     id : number;
//     name : string;
//     image : string;
//     category : string;
//     description : string;
//     price : number;
//     quantity : number;
//   }
export interface ProductModelServer {
  id : number;
  name : string;
  image : string;
  description : string;
  price : number;
  quantity : number;
  p_cat_id : number;
  category : string;
}
  
  // export interface  ServerResponse {
  //   count : number;
  //   products : ProductModelServer[];
  // }
  
  export interface  ServerResponse {
    products : ProductModelServer[];
  }