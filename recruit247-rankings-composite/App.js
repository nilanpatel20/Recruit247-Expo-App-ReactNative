import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, Dimensions, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    // Initially, Welcome page is displayed
    state = {
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        homePageDisplay: 'none',
        
    }
    state = {
        inputValue: (0).toFixed(0),
        moneyConverted: (0).toFixed(0),
        catchPhrase: "",
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
   
    convertMoney = (button) => {
        if (button == 1){
            this.setState({
                moneyConverted: this.state.inputValue + .9999,
                catchPhrase: "Travis Hunter is the best DB to come out of highschool. His addition to your class will change your team as he can play both ways and is incredibly talented. "
            })
       }
       if (button == 2){
           this.setState({
               moneyConverted: this.state.inputValue +.9998,
               catchPhrase: "Nolen has been all over the place in terms of recruiting however he is one of the best DTs in the last 5 years and would be an elite run-stopper."
            })
       }
       if (button == 3){
           this.setState({
               moneyConverted: this.state.inputValue + .9975,
               catchPhrase: "The WR out of Texas Evan Stewart is ranked the best in the class of 2022, combnining athleticism with his frame, Stewart plays a lot like Odell Beckham with his ability to use his size to highpoint a ball."
            })
       }
       if (button == 4){
           this.setState({
              moneyConverted: this.state.inputValue + .9966,
              catchPhrase: "Travis SHaw is committed to UNC so if you can flip him then he would be an elite addition to your class. "
            })
       }
    }

    // When Welcome Page button is pressed, hide Info page and show Welcome page
    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        homePageDisplay: 'none',
    }));
    
    // When Info Page button is pressed, hide Welcome page and show Info page
    handleInfoPagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
        homePageDisplay: 'none',
    }));
    
     handlehomePagePress = () => this.setState(state => ({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'none',
        homePageDisplay: 'block',
    }));
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleWelcomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Player Rankings
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Team Rankings
                        </Text>
                    </TouchableHighlight>
                    
                    
              
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handlehomePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Recruit Calculator
                        </Text>
                    </TouchableHighlight>
                </View>
                {/*Welcome page screen layout here*/}
                <View style={{ display: this.state.welcomePageDisplay }}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                        View style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/51df3a32cad0d055f19df312d6e532ee' }}
                    >
                       
                    </ImageBackground>
                    </View>
                </View>
                
                {/*Info page screen layout here*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                          <ImageBackground
                        View style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/9fd0799655f03c6aaf7df246c9f672ab' }}
                    >
                     </ImageBackground>
                    </View>
                </View>
                
                <View style={{ display: this.state.homePageDisplay }}>
                    <View style={styles.contentContainer}>
                         <View style={styles.container2}>
                   
                    <Text style={styles.title}>
                        Recruit Calculator
                        
                    </Text>
                    <Text style={styles.bruh}>
                    <center>
                        Type in recruit class total then add one of the 4 recruits to your class
                        </center>
                    </Text>
                </View>
               
               
                <View style={styles.moneyChanger}>
                    <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, fontSize: 50, textAlign: 'center'}}
                    />
                </View>
               
                <View style={styles.rowContainer}>
                   
                    <TouchableHighlight
                        onPress={() => this.convertMoney(1)}
                    >
                   
                        <View style={styles.button}>
                            Travis Hunter
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.convertMoney(2)}
                    >
                   
                        <View style={styles.button}>
                            Walter Nolen
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.rowContainer}>
                   
                    <TouchableHighlight
                        onPress={() => this.convertMoney(3)}
                    >
                   
                        <View style={styles.button}>
                            Evan Stewart
                        </View>
                    </TouchableHighlight>
                   
                    <TouchableHighlight
                        onPress={() => this.convertMoney(4)}
                    >
                   
                        <View style={styles.button}>
                            Travis Shaw
                        </View>
                    </TouchableHighlight>
                </View>
               
               
                <View style={styles.button2}>
                   
                    <Text style={styles.textStyle1}>
                        {this.state.moneyConverted}
                    </Text>
                </View>
                <Text style={styles.bigText}>
                    {this.state.catchPhrase}
                </Text>
                    </View>
                </View>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: '#1357a6',
    },
      background: {
        height: deviceHeight/1.1,
        width: deviceWidth,
       
    },

    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'center',
        color: 'white',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },
    
     bruh: {
        fontSize: 20,
    },
   
    container2: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    moneyChanger:{

        backGroundColor: 'blue',
        alignItems: 'center',
       
    },
    rowContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'green',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
        button2: {
        height: 30,
        width: 250,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'green',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle1:{
        fontSize: 18,
    },
    bigText:{
        width:300,
        fontSize: 20,
         alignItems: 'center',
        justifyContent: 'center',
    }
    

});