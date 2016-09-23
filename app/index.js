import React           from 'react';
import ReactDOM        from 'react-dom';
import AltContainer    from 'alt-container';
import PopAlertStore   from './stores/PopAlertStore.js';
import style           from './styles/main.scss';
import PopAlertHeader  from './components/PopAlertHeader.js';
import PopAlertBody    from './components/PopAlertBody.js';


var PopAlertParent = React.createClass({
  render () {
    return (
        <div>
          <AltContainer stores={{PopAlertStore}}>
            <PopAlertHeader />
            <PopAlertBody />
          </AltContainer>
        </div>
    );
  }
});

ReactDOM.render(
  <PopAlertParent />,
  document.getElementById('app')
);
