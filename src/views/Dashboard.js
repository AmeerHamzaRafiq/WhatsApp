import { View, Button } from 'react-native'

function Dashboard({ navigation }) {


    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Take a Ride" onPress={() => navigation.navigate('Pickup')} />
        <Button title="Delivery" />
    </View>
}

export default Dashboard