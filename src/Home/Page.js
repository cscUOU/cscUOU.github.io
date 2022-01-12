import {Component} from 'react';
import './PageStyle.css';

import back from './image/background.jpg';

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <img id='image' src={back}/>
                <div id='lab-title'>
                    <p>UNIVERCITY OF ULSAN</p>
                    <hr/>
                    <p><small>Complex Systems Computing Lab</small></p>
                </div>

                <div id='home-section'>
                    <p id='home-title'>Mission</p>
                    <p>
                        Complex systems can create emergent dynamical behaviors by simple interactions between components. 
                        We aim to develop computational methods to investigate the principles behind various complex systems.<br/><br/>
                        In biological systems, we try to unravel a network consisting of biological components, discover a relationship between structural and dynamical characteristics, and predict a disease causality.<br/><br/>
                        In the financial systems, we try to construct a correlation network between different markets, discover a latent feature, and predict a future of financial variables.<br/><br/>
                        In the engineering field, we try to develop an automatic machine learning framework which can efficiently solve a variety of optimization problems, and apply it to not only the complex systems problems but also the real-world applications.<br/>
                        We enjoy making interesting questions and answering them freely.
                    </p>
                </div>

                <div id='home-section'>
                    <p id='home-title'>Join Us</p>
                    <p> 
                        We are always looking for talented and motivated people to join us.<br/>
                        If you’re interested in our lab, please contact <a onClick={() => this.props.changeMenu('People')}>Yungkeun Kwon</a>
                    </p>
                </div>

                <div id='footer'></div>
            </div>
        );
    }
}

export default Home;