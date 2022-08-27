import {Component} from 'react';
import {Collapse} from 'antd';
import './PageStyle.css';

import ResearchContent from '../dataset/Research/Research.json';

class Research extends Component{
    render(){
        // collapse 디자인을 가져와 사용(아코디언 디자인)
        const { Panel } = Collapse;

        // research 정보 가져옴
        var r_content = '';
        r_content = ResearchContent.map((item, index) => {
            // 각 research 이미지 가져오기
            const img_url = './images/' + item.image;
            var img_tag = '';
            if(item.image !==''){ img_tag=<img id='coll-img' src={require(`${img_url}`).default}/>; }

            return(
                <div id='coll'>
                    <Collapse>
                            <Panel header={item.title} key="1">
                                <h4>researcher : {item.person}</h4>
                                <div id='coll-img-wrapper'>{img_tag}</div>
                                <p>{item.content}</p>
                            </Panel>
                    </Collapse>
                    <br/>
                </div>
            )
        });

        return(
            <div className='res'>
                <div id='res-top'>
                    <p id='res-title'>Research</p>
                </div>

                {r_content}

                <div id='footer-empty'></div>
            </div>
        );
    }
}

export default Research;