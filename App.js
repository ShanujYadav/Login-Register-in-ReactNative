import { useState } from 'react';
import { StyleSheet, Text, Modal, TextInput, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onLoginHandler = () => {
    if (!email || !password) {
      console.warn("Please add All fields! ")
    }
    else {
      console.warn('Email : ' + email, ', ' + 'Password : ' + password);
      setEmail('')
      setPassword('')
    }
  }
  const onSignHandler = () => {
    if (!name || !email || !password) {
      console.warn("Please add All fields! ")
    }
    else {
      console.warn('Name : ' + name, ' , ' + 'Email : ' + email, ', ' + 'Password : ' + password);
      setEmail('')
      setName('')
      setPassword('')
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Login</Text>
      </View>
      <View style={{ margin: 40, marginVertical: 60 }}>
        <View style={styles.InputWrapper}>
          <TextInput placeholder='Enter Email' style={styles.Input} onChangeText={(text) => setEmail(text)} value={email} />
        </View>
        <View style={styles.InputWrapper}>
          <TextInput placeholder='Enter Password' style={styles.Input} secureTextEntry={true} onChangeText={(pass) => setPassword(pass)} value={password} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 40 }}>
          <View style={styles.Signbtn}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Loginbtn}>
            <TouchableOpacity onPress={onLoginHandler}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      {/*  Register Form*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Register</Text>
          </View>
          <View style={{ margin: 40, marginVertical: 60 }}>
            <View style={styles.InputWrapper}>
              <TextInput placeholder='Enter Name' style={styles.Input} onChangeText={(text) => setName(text)} value={name} />
            </View>
            <View style={styles.InputWrapper}>
              <TextInput placeholder='Enter Email' style={styles.Input} onChangeText={(text) => setEmail(text)} value={email} />
            </View>
            <View style={styles.InputWrapper}>
              <TextInput placeholder='Enter Password' style={styles.Input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} />
            </View>
            <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.Signbtn}>
                <TouchableOpacity onPress={onSignHandler}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>
              </View>
            </View >
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Already have an Account</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'blue' }}> Login here!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'center',
  },
  InputWrapper: {
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    height: 45,
    justifyContent: 'center',
    marginBottom: 10,
  },
  Input: {
    fontSize: 15,
    paddingLeft: 10
  },
  Signbtn: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    width: 70,
    height: 30,
    backgroundColor: '#cce6ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Loginbtn: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    width: 70,
    height: 30,
    backgroundColor: '#c6ecd9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
