import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView, Image,Button
} from "react-native";
import React, { useState } from "react";
import {addFStadium, deleteFStadium, getFStadium} from "../db/Stadium/Football";
import footballBackground from "../assets/footballBackground.png";
import tennisBackground from "../assets/tennisBackground.png";
import basketballBackground from "../assets/basketballBackground.png";
import {getUserUId} from "../db/Auth";
import {updateFAvailable} from "../db/User";


export default function ValidationPage ({navigation, route}) {

    let {name: stadName} = route.params; //name -> att. in doc.

    const [stDate,setStDate] = useState("") //start date
    const [edDate,setEdDate] = useState("")//end date
    const [day,setDay] =  useState("")

    function handel(){
        console.log('begin handle', stadName);
        if(stDate!=='' && edDate !== '' && day !== '' && stDate!==edDate){
            console.log('after validate');
            getFStadium().then((data) => {
                console.log('number of stad size=', data.length);
                for(let i=0; i<data.length; i++ ){
                    if(data[i].name === stadName){
                        console.log('found the stad', data[i]);
                        let flag = true; // true ->stad is available
                        if(data[i].state === null){ //if there is no array, set a new one
                            data[i].state = []; //new array
                        }
                        /* add "balance" in db and manage it here*/
                        for(let j=0; j<data[i].state.length; j++ ){
                            if(data[i].state[j].day === day ){ //same day isn't enough
                                if((stDate<data[i].state[j].edDate &&stDate>= data[i].state[j].stDate) || //check in same hours interval
                                    ( data[i].state[j].stDate>=stDate  && data[i].state[j].stDate<edDate))
                                alert("already occupied");
                                    flag = false; //stad is unavailable after occupation
                                navigation.navigate('Football');
                                break;
                            }
                        }
                        if(flag){ //if flag is available i.e. "true", add userId with the "date" that he
                            getUserUId().then((id)=>{ // gets id of current user in "id"
                                data[i].state.push({day, stDate, edDate, id}); //note that we made "id" same as "document ID" manually
                                updateFAvailable(data[i]);
                            });
                            navigation.navigate('Payment', {stDate,edDate,day});
                        }
                        break;
                    }
                }
            });
        }else {
            alert("data is required")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Enter Your Booking Club </Text>
            <ScrollView>
                <TextInput placeholder="Enter day" onChangeText={setDay}/>
                <TextInput placeholder="Enter start date" onChangeText={setStDate}/>
                <TextInput placeholder="Enter end date" onChangeText={setEdDate}/>
                <Button title={"submit"} onPress={handel}/>

            </ScrollView>

        </View>

    );
}
    const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        alignContent:"center"
    }
    })