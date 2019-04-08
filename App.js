import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';


export default class App extends Component {
constructor(props){
    super(props)
    this.state = {
        bal:1.00,
        newBal:0,
        inputValue: "",
        isLoading: true,
        dataSource: null,
    }
}




componentDidMount (){
    return fetch('http://www.apilayer.net/api/live?access_key=950afe032d27cee501857980fd0288e3')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.quotes,
            })
        })

        .catch((error) => {
            console.log(error)
        });
}


    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDEUR,
        })
    }
    
    usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDGBP,
        })
    }
    
    usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDINR,
        })
    }
    
    usdToAussie = () => {
        this.setState({
            newBal:  this.state.inputValue * this.state.dataSource.USDAUD,
        })
    }
    
    usdToCad = () => {
        this.setState({
            newBal:  this.state.inputValue * this.state.dataSource.USDCAD,
        })
    }
    
    usdToFranc = () => {
        this.setState({
            newBal:  this.state.inputValue * this.state.dataSource.USDXAF,
        })
    }
    
    usdToCyuan = () => {
        this.setState({
            newBal:  this.state.inputValue * this.state.dataSource.USDCNY,
        })
    }
    
    usdToJyen = () => {
        this.setState({
            newBal:  this.state.inputValue * this.state.dataSource.USDJPY,
        })
    }
 
 _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    
    changeText = ()=>{
                    this.setState({
                        newText:this.state.inputValue,
                    })
                }
    

    render() {

        if(this.state.isLoading) {
            return(
                <View style = {styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else{

        return (
            
            <View style={styles.container}>
            
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'gray', borderWidth: 1,}}
                />
                
                <TouchableHighlight
                    onPress= {this.changeText}
                >
                
                <Text>
                Touch here to change the following line
                </Text>
                
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                
                {this.state.newText}
                
                    
                </Text>
            
            
                
                
                <View style={styles.row}>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                
                </View>
                <View style={styles.row}>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToAussie}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
            
            </View>
            <View style={styles.row}>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToCad}
                >
                    <Text style={styles.buttonText}>
                        USD to CAD
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Swiss Franc
                    </Text>
                </TouchableHighlight>
                
                </View>
                <View style={styles.row}>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToCyuan}
                >
                    <Text style={styles.buttonText}>
                        USD to China Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToJyen}
                >
                    <Text style={styles.buttonText}>
                        USD to Japan Yen
                    </Text>
                </TouchableHighlight>
                
                </View>
                
                
                
                <Text style={styles.paragraph}>
                    Converted currency value:  {this.state.newBal.toFixed(2)}
                </Text>
                
                
                
            </View>
            
      );
   }
}

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#800000',
        color: "white",
        
    },
    button: {
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'Red',
        height: 40,
        width: 100,
        borderStyle: "groove",
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,
        color: "white",
    },
    
   row: {
        flexDirection: 'row',
    },
    
    paragraph: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    }
    
});