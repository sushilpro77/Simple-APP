import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Theme from 'src/config/style'

class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tests: [],
      notes: [{}, {}, {}],
    }
  }
  componentDidMount() {
    
  }

  _handleEmergency = () => alert('Breaking News');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header style={{ backgroundColor: Theme.colors.menuHeader, alignItems: 'center', justifyContent: 'space-between', height: 60 }} >
        {this.props.icon == 'menu' && 
          <Appbar.Action
            icon={this.props.icon}
            onPress={() => {
              if (this.props.icon == 'menu') {
                this.props.navigation.openDrawer()
              }
            }} 
          />}
        {this.props.icon == 'back' &&
            <Appbar.BackAction onPress={() => { 
              try {
                this.props.navigation.goBack()
              }catch(err) {
                console.log(err, "go back error");
              }
            }} 
            />
          }
        <Appbar.Content title={ this.props.title } subtitle={ this.props.Subtitle } />
      </Appbar.Header>
    );
  }
}

export default AppHeader;