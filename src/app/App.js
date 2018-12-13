import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, observer } from 'mobx-react';

class App extends React.Component {
  render() {
    return (
     
        <Provider >
            <div>Hi Lok</div>
        </Provider>


      
    );
  }
}

export default App;
