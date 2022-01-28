import React, {useEffect,useState} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {workGetUserFetch} from "../../Redux/Actions";

function Home(){
    const [user,setUser] = useState( "");

    // this.setState({ title: event.target.value }, () => this.APICallFunction());
    const dispatch = useDispatch();
    const users = useSelector(state => state.myFirstReducer.users);
    const getUser =(id)=>{
        dispatch(workGetUserFetch(id));
        // console.log("users ===getUser==>>>>",users);
        // setUser(users);

    }
    useEffect(()=>{
        setUser(users);
    },[users])
        return (
            <View style={{flex:1,alignItems:"center"}}>
                <View>
                    <TouchableOpacity onPress={()=>{getUser(1)}}>
                        <Text>{"Get Users"}</Text>
                        <Text>{"User: "+user?.title}</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={users}
                        renderItem={({item})=><Text>{item.name}</Text>}
                        />
                </View>
            </View>
        );
}
export default Home;
