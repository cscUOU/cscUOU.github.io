import {Component} from 'react';
import './App.css';

import Nav from './Nav.js';

import Home from './Home/Page.js';
import People from './People/Page.js';
import Research from './Research/Page.js';
import Publication from './Publication/Page.js';
import Software from './Software/Page.js';
import Contact from './Contact/Page.js';

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
        menu: 'Home'
      }
      this.changeMenu = this.changeMenu.bind(this);
  }

  // 메인 화면 변경(메뉴 변경)
  changeMenu(_menu){
    this.setState({menu: _menu});
    window.scrollTo(0, 0);
  }

  render(){
    // 현재 선택된 메뉴에 따라 메인 화면 변경
    var middle_page = <Home/>
    if(this.state.menu === 'Home'){ middle_page = <Home changeMenu={this.changeMenu}/> }
    if(this.state.menu === 'People'){ middle_page = <People/> }
    if(this.state.menu === 'Research'){ middle_page = <Research/> }
    if(this.state.menu === 'Publication'){ middle_page = <Publication/> }
    if(this.state.menu === 'Software'){ middle_page = <Software/> }
    if(this.state.menu === 'Contact'){ middle_page = <Contact/> }

    return(
      <div className='app'>
        <Nav menu={this.state.menu} changeMenu={this.changeMenu}/>
        <div id='empty'></div>
        {middle_page}
      </div>
    );
  }
}


export default App;
