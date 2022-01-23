import { RootStackParams } from "./navigator/University/Education/StackEducation";
import { RootStackParamsPerfil } from "./navigator/User/Perfil/StackPerfil";


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams, RootStackParamsPerfil {}
  }
}