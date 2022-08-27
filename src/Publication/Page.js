import {Component} from 'react';
import './PageStyle.css';

import linkimg from './image/link.png';
import circle from './image/circle.png';
import ComIntelligence from '../dataset/Publication/Computational-Intelligence.json';
import ComFinance from '../dataset/Publication/Computational-Finance.json';
import ComBiology from '../dataset/Publication/Computational-Biology.json';

class Publication extends Component{
    constructor(props){
        super(props);
        this.state = {
            pub_kind: 'intelligence'
        }
        this.changePubKind = this.changePubKind.bind(this);
        this.goDOI = this.goDOI.bind(this);
    }

    // 현재 publication의 클래스
    changePubKind(_kind){
        this.setState({pub_kind: _kind});
    }

    // 새 창을 열어 doi로 접속
    goDOI(_doi){
        window.location.href = _doi;
    }


    render(){
        // publication의 클래스 별 색상(선택 여부)
        var back = ['black', '', ''];
        var font = ['white', '', ''];
        var compu = ''
        // computational intelligence 클래스
        if(this.state.pub_kind === 'intelligence'){
            back = ['black', '', ''];
            font = ['white', '', ''];
            compu = ComIntelligence.map((item, index) => {
                const doi = item.DOI;
                return(
                    <div id='pub-per'>
                        <div id='per-circle'><img src={circle}/>&emsp;</div>
                        <div id='per-text'>
                            <b>{item.title}</b> <br/>
                            {item.authors} <br/>
                            <small>{item.year} - {item['journal/conference']}</small> <br/>
                        </div>
                        <div id='per-doi'>
                            <button onClick={function(e){ window.open(doi); }.bind(this)}>
                                <img src={linkimg}/>
                                DOI
                            </button>
                        </div>
                        <div id='per-empty'></div>
                    </div>
                )
            });
        }
        // computational finance 클래스
        else if(this.state.pub_kind === 'finance'){
            back = ['', 'black', ''];
            font = ['', 'white', ''];
            compu = ComFinance.map((item, index) => {
                const doi = item.DOI;
                return(
                    <div id='pub-per'>
                        <div id='per-circle'><img src={circle}/>&emsp;</div>
                        <div id='per-text'>
                            <b>{item.title}</b> <br/>
                            {item.authors} <br/>
                            <small>{item.year} - {item['journal/conference']}</small> <br/>
                        </div>
                        <div id='per-doi'>
                            <button onClick={function(e){ window.open(doi); }.bind(this)}>
                                <img src={linkimg}/>
                                DOI
                            </button>
                        </div>
                        <div id='per-empty'></div>
                    </div>
                )
            });
        }
        // computational biology 클래스
        else if(this.state.pub_kind === 'biology'){
            back = ['', '', 'black'];
            font = ['', '', 'white'];
            compu = ComBiology.map((item, index) => {
                const doi = item.DOI;
                return(
                    <div id='pub-per'>
                        <div id='per-circle'><img src={circle}/>&emsp;</div>
                        <div id='per-text'>
                            <b>{item.title}</b> <br/>
                            {item.authors} <br/>
                            <small>{item.year} - {item['journal/conference']}</small> <br/>
                        </div>
                        <div id='per-doi'>
                            <button onClick={function(e){ window.open(doi); }.bind(this)}>
                                <img src={linkimg}/>
                                DOI
                            </button>
                        </div>
                        <div id='per-empty'></div>
                    </div>
                )
            });
        }
        

        return(
            <div className='pub'>
                <div id='pub-top'>
                    <p id='pub-title'>Publication</p>
                </div>

                {/* 클래스 버튼 */}
                <div id='pub-kind-btn'>
                    <button style={{background:back[0], color:font[0]}} onClick={() => this.changePubKind('intelligence')}>Computational<br/>Intelligence</button>
                    <button style={{background:back[1], color:font[1]}} onClick={() => this.changePubKind('finance')}>Computational<br/>Finance</button>
                    <button style={{background:back[2], color:font[2]}} onClick={() => this.changePubKind('biology')}>Computational<br/>Biology</button>
                </div>

                {/* publication 리스트 부분 */}
                <div id='pub-section'>
                    {compu}
                </div>

                <div id='footer-empty'></div>
            </div>
        );
    }
}

export default Publication;