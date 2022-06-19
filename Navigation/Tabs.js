import React from "react";
import {StyleSheet ,Image,View,Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import History from "../Screens/History_order";
import Cart from "../Screens/Cart";
import Cate from "../Screens/Category";
import Profiles from "../Screens/Profile_user";
import Details from "../Screens/Product_details";
import Cafe from "../Cates/cafe";
import Ck from "../Screens/Checkout";
import Detail from "../Screens/DetailOrder";
import Contact from "../Screens/Contact";
import Changepassword from "../Screens/Changepassword";
import Nn from "../Screens/Login";
import Register from "../Screens/Register";
import Intu from "../Screens/Intu";


const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

    const Stackss=()=>{
        return(
            <Stack.Navigator 
            screenOptions={{
                    
                headerShown: false,
            }}
            >
                <Stack.Screen name="homehihi"  component={tabs} />
                <Stack.Group>
                    <Stack.Screen name="cafene"  component={Cate} />
                    <Stack.Screen name="cart"  component={Cart}/>
                    <Stack.Screen name="checkout"  component={Ck}/>
                    <Stack.Screen name="Detail"  component={Detail}/>   
                    <Stack.Screen name="ct"  component={Contact}/>
                    <Stack.Screen name="pass"  component={Changepassword}/>
                    <Stack.Screen name="nnn" component={Nn}/>
                    <Stack.Screen name="Register"  component={Register}/>
                    <Stack.Screen name="intu"  component={Intu}/>
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>    
                    <Stack.Screen name="detailnhe" component={Details} />
                </Stack.Group>
            </Stack.Navigator>
    
        );    
    }
export default Stackss;


const tabs=()=>{
    return(
        <Tab.Navigator 
            screenOptions={{
                        
                tabBarStyle:{
                    position:'absolute', 
                    backgroundColor:'#ffff',
                    borderTopColor:'grey',
                    ...styles.shadow
                },
                tabBarShowLabel:false,
                
            }}
  
        
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                            <Image source={require('../assets/Flaticon/home1.png')} resizeMode="contain"
                                style ={{
                                    width:20,
                                    height:20,
                                    tintColor: focused ? "#A62B2B" : "#605A53"
                                }}
                            ></Image>
                            <Text style={{color: focused ? "#A62B2B" : "#605A53",fontSize:12}}>Trang chủ</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="History" component={History} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                            <Image source={require('../assets/Flaticon/invoices.png')} resizeMode="contain"
                                style ={{
                                    width:20,
                                    height:20,
                                    tintColor: focused ? "#A62B2B" : "#605A53"
                                }}
                            ></Image>
                            <Text style={{color: focused ? "#A62B2B" : "#605A53",fontSize:12}}>Hoạt động</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="danh muc san pham" component={Cate} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                            <Image source={require('../assets/Flaticon/croissant.png')} resizeMode="contain"
                                style ={{
                                    width:20,
                                    height:20,
                                    tintColor: focused ? "#A62B2B" : "#605A53"
                                }}
                            ></Image>
                            <Text style={{color: focused ? "#A62B2B" : "#605A53",fontSize:12}}>Đặt hàng</Text>
                        </View>
                    ),
                    headerStyle: { backgroundColor: 'brown'},
                    headerTintColor:'white',
                    title:'Danh mục sản phẩm',
                }}
            />
            <Tab.Screen name="gio hang" component={Cart} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                            <Image source={require('../assets/Flaticon/cart1.png')} resizeMode="contain"
                                style ={{
                                    width:20,
                                    height:20,
                                    tintColor: focused ? "#A62B2B" : "#605A53"
                                }}
                            ></Image>
                            <Text style={{color: focused ? "#A62B2B" : "#605A53",fontSize:12}}>Giỏ hàng</Text>
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Profiles" component={Profiles} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{justifyContent:'center',alignItems:'center',top:0}}>
                            <Image source={require('../assets/images/align-left.png')} resizeMode="contain"
                                style ={{
                                    width:22,
                                    height:22,
                                    tintColor: focused ? "#A62B2B" : "#605A53"
                                }}
                            ></Image>
                            <Text style={{color: focused ? "#A62B2B" : "#605A53",fontSize:12}}>Khác</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'black',
        shadowOffset:{ height:0,width:10},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})

