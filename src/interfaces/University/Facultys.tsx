import { ImageSourcePropType } from "react-native";

export interface CdFacultys{
    id:number,
    Faculty:string,
    imgPath:ImageSourcePropType,
    Description:string
}

export interface RootFaculty{
    Faculty:string,
}