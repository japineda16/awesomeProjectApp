import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../auth/Login";
import Client from "../Client/Client";
import ClientList from "../ClientList/ClientList";
import { CreateOrder } from '../createOrder/createOrder';
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Product from "../product/Product";
import ProductList from "../productList/ProductList";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export function TabsNavigator() {
    return (
        <Tab.Navigator backBehavior='initialRoute'>
            <Tab.Screen name='Inicio-de-sesion' component={Login} options={{
                title: 'Inicio de sesión', 
                tabBarStyle: { display: "none" },
                tabBarItemStyle: {display: 'none'}
                }} />
            <Tab.Screen name='Lista-de-productos' 
            options={{
                title: 'Productos',
                tabBarIcon: (tabInfo) => {
                    return (
                      <FontAwesome
                        name="home"
                        size={24}
                        // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                      />
                    );
                  }
            }}
            component={ProductList} />
            <Tab.Screen name='Carrito'
            options={{
                tabBarIcon: (tabInfo) => {
                    return (
                      <FontAwesome
                        name="shopping-cart"
                        size={24}
                        // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                      />
                    );
                  }
            }}
            component={CreateOrder} />
            <Tab.Screen name='Producto' options={{
                tabBarItemStyle: {display: 'none'},
            }} component={Product} />
            <Tab.Screen name='Ordenes'
            options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="file-invoice-dollar" size={24} color="black" />
                    );
                  }
            }}
            component={OrderList} />
            <Tab.Screen name='Orden' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Order} />
            <Tab.Screen name='Cliente' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Client} />

            <Tab.Screen name='Clientes'
            options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome name="users" size={24} color="black" />
                    );
                  }
            }}
            component={ClientList} />

            <Tab.Screen name='Crear-orden' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={CreateOrder} />
        </Tab.Navigator>
    );
}