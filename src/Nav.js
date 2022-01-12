import {Component} from 'react';
import './NavStyle.css';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            window_width: 0,
            nav_bar_top: '0em',
            toggle: 'active'
        };
        this.clickToggle = this.clickToggle.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
    }

    // 모바일 화면에서 메뉴바 사이즈에 대한 토글
    clickToggle(){
        if(this.state.toggle === ''){ this.setState({toggle: 'active'}); }
        else{ this.setState({toggle: ''});}

        if(this.state.nav_bar_top === '0em'){
            this.setState({nav_bar_top: '-15em'});
        }
        else{
            this.setState({nav_bar_top: '0em'});
        }
    }

    // 메뉴 버튼 클릭 시 이벤트
    clickMenu(_menu){
        if(this.state.window_width <= 800){ this.clickToggle(); }
        this.props.changeMenu(_menu);
    }


    // 창 크기 가져오는 이벤트 등록
    componentDidMount(){
        this.setState({window_width: window.innerWidth});
        window.addEventListener("resize", () => this.setState({window_width: window.innerWidth}));
    }
    // 창 크기 변경 시 메뉴 바 사이즈 조절(모바일 <-> pc)
    componentDidUpdate(){
        if(this.state.window_width > 800 && this.state.nav_bar_top === '-15em'){
            this.setState({nav_bar_top:'0em', toggle:'active'});
        }
    }
    // 이벤트 제거
    componentWillUnmount(){
        window.removeEventListener("resize", () => this.setState({window_width: window.innerWidth}));
    }

    render(){
        // home을 제외한 나머지 메뉴는 선택될 시 css값을 변경한다.
        const menu = this.props.menu;
        var back = ['white', , , , , ];
        var font = ['black', , , , , ];
        if(menu === 'Home'){ back=['white', , , , , ]; font=['black', , , , , ]; }
        if(menu === 'People'){ back=[ , 'white', , , , ]; font=[ , 'black', , , , ]; }
        if(menu === 'Research'){ back=[ , , 'white', , , ]; font=[ , , 'black', , , ]; }
        if(menu === 'Publication'){ back=[ , , , 'white', , ]; font=[ , , , 'black', , ]; }
        if(menu === 'Software'){ back=[ , , , , 'white', ]; font=[ , , , , 'black', ]; }
        if(menu === 'Contact'){ back=[ , , , , , 'white']; font=[ , , , , , 'black']; }


        return(
            <div className='nav' style={{marginTop: this.state.nav_bar_top}}>
                <button id='nav-menu' onClick={() => this.clickMenu('Home')}>Home</button>
                <button id='nav-menu' style={{color:font[1], background:back[1]}} onClick={() => this.clickMenu('People')}>People</button>
                <button id='nav-menu' style={{color:font[2], background:back[2]}} onClick={() => this.clickMenu('Research')}>Research</button>
                <button id='nav-menu' style={{color:font[3], background:back[3]}} onClick={() => this.clickMenu('Publication')}>Publication</button>
                <button id='nav-menu' style={{color:font[4], background:back[4]}} onClick={() => this.clickMenu('Software')}>Software</button>
                <button id='nav-menu' style={{color:font[5], background:back[5]}} onClick={() => this.clickMenu('Contact')}>Contact</button>

                {/* 토글 버튼 */}
                <div id='control_menu'>
                    <a className={`cont_btn ${this.state.toggle}`} src='#' onClick={this.clickToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;