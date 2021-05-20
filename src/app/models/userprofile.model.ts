export interface UserProfile{
    id:number;
    name:string;
    email:string,
    profilePic:string,
    address:{
        state:string,
        city:string,
        zipcode:string
    },
    profession:string,
    mobileno:string
}