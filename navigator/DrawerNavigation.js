import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    componentDidMount(){
        let theme;
        flrebase
         .database ()
         .ref ("/users/" + firebase.auth().currentUser.uid)
         .on ("value", function (snapshot){
            theme =snapshot.val ().current_theme;
        });
       this.setState({light_theme: theme --- "light"?true:false });
    }
    render (){
        let props= this.props;
       return(
         <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: "He9le63",
            InactiveTintColor: this.state.light_theme?"black":"white",
            itemstyle:{marginvertical: 5}
          }}
          drawerContent={props => <CustomSldebarMenu {...props} />}
          >
          <Drawer.Screen
            name="Tela Iniclal"
            component={StackNavigator}
            options={{ unmountOnelur: true }}
            />
          <Drawer.Screen
            name="Perfil"
            component={Proflle}
            options={{ unmountOnelur: true }}
            />
          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ urmountOnalur: true }}
            />
         </Drawer.Navigator>
       );
    }
}