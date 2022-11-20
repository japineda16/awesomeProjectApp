import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../auth/Login";
import Client from "../Client/Client";
import ClientList from "../ClientList/ClientList";
import { CreateOrder } from '../createOrder/createOrder';
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Product from "../product/Product";
import ProductList from "../productList/ProductList";

const Tab = createBottomTabNavigator();

export function TabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Inicio-de-sesion' component={Login} options={{
                title: 'Inicio de sesión', 
                tabBarStyle: { display: "none" },
                tabBarItemStyle: {display: 'none'}
                }} />
            <Tab.Screen name='Lista-de-productos' 
            options={{
                title: 'Productos',
            }} 
            component={ProductList} />
            <Tab.Screen name='Carrito' component={CreateOrder} />
            <Tab.Screen name='Producto' options={{
                tabBarItemStyle: {display: 'none'},
            }} component={Product} />
            <Tab.Screen name='Ordenes' component={OrderList} />
            <Tab.Screen name='Orden' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Order} />
            <Tab.Screen name='Cliente' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Client} />
            <Tab.Screen name='Clientes' component={ClientList} />
            <Tab.Screen name='Crear-orden' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={CreateOrder} />
        </Tab.Navigator>
    );
}