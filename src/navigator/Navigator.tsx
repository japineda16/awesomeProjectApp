import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import Login from "../auth/Login";
import Client from "../Client/Client";
import ClientList from "../ClientList/ClientList";
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Product from "../product/Product";
import ProductList from "../productList/ProductList";

const Tab = createBottomTabNavigator();
const routes = [
    {
        name: 'Lista-de-productos',
        options: {
            title: 'Lista de productos'
        },
        component: ProductList
    },
    {
        name: 'Producto',
        options: {
            title: 'Producto'
        },
        component: Product
    },
    {
        name: 'Lista-de-ordenes',
        options: {
            title: 'Lista de ordenes'
        },
        component: OrderList
    },
    {
        name: 'Orden',
        options: {
            title: 'Orden'
        },
        component: Order
    },
    {
        name: 'Cliente',
        options: {
            title: 'Cliente'
        },
        component: Client
    },
    {
        name: 'Lista-de-clientes',
        options: {
            title: 'Lista de clientes'
        },
        component: ClientList
    },
    {
        name: 'login',
        options: {
            title: 'Inicio de sesión'
        },
        component: Login
    },  
];

export function TabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Inicio de sesion' component={Login} />
            <Tab.Screen name='Lista-de-productos' 
            options={{
                title: 'Lista de productos'
            }} 
            component={ProductList} />
            <Tab.Screen name='Producto' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Product} />
            <Tab.Screen name='Lista de ordenes' component={OrderList} />
            <Tab.Screen name='Orden' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Order} />
            <Tab.Screen name='Cliente' options={{
                tabBarItemStyle: {display: 'none'}
            }} component={Client} />
            <Tab.Screen name='Lista de clientes' component={ClientList} />
        </Tab.Navigator>
    );
}