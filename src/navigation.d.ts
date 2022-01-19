import { RootStackParams } from "./navigator/University/Education/StackEducation";


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}