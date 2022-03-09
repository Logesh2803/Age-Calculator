/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Realm from 'realm';
let realm;

export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'UserDatabase.realm' });
    var user_details = realm.objects('user_details');
    this.state = {
      FlatListItems: user_details,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', borderBottomWidth: 2 }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          style={{}}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: '#161A20', paddingVertical: 20 }}>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>Id: {item.user_id}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>Name: {item.user_name}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>Contact: {item.user_contact}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#FFFFFF' }}>Address: {item.user_address}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}