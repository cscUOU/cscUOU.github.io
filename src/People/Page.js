import {Component} from 'react';
import './PageStyle.css';

import Faculty from '../dataset/People/Faculty.json';
import CurGradStu from '../dataset/People/Current-Graduate-Students.json';
import CurUngradStu from '../dataset/People/Current-Undergraduate-Students.json';
import Alumni from '../dataset/People/Alumni.json';


class People extends Component{
    constructor(props){
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    // 클립보드에 복사(이메일에 적용)
    copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }
    
    render(){
        // 각 클래스 별 사람들의 정보를 가져옴
        // faculty 클래스
        const faculty = Faculty.map((item, index) => {
            // 사람의 얼굴 이미지 가져오기
            const img_url = './images/' + item.image;
            const email = item.email;
            var img_tag = <img src={require('./images/person.png').default}/>;
            if(item.image !==''){ img_tag=<img src={require(`${img_url}`).default}/>; }
            
            return(
                <div id='people-member-info'>
                    <div id='img-wrapper'>
                        {img_tag}
                        {/* 이미지에 마우스 hover 시 어둡게 되며 이메일 버튼 표시 */}
                        <div id='darkness'></div>
                        <button id='member-mail' onClick={function(){
                            if(email === ""){ this.copyToClipboard("no email"); }
                            else{ this.copyToClipboard(email); }
                            alert('Copied the mail to the clipboard.');
                        }.bind(this)}>Mail</button>
                    </div>
                    {/* 기본적인 정보들(이름 등) */}
                    <p id='member-name'>{item.name}</p>
                    <p id='member-info'>{item['name(kor)']}</p>
                    <p id='member-info'>{item.status}</p>
                </div>
            )
        });
        // current graduate student 클래스
        const cur_grad_stu = CurGradStu.map((item, index) => {
            const img_url = './images/' + item.image;
            const email = item.email;
            var img_tag = <img src={require('./images/person.png').default}/>;
            if(item.image !==''){ img_tag=<img src={require(`${img_url}`).default}/>; }
            
            return(
                <div id='people-member-info'>
                    <div id='img-wrapper'>
                        {img_tag}
                        <div id='darkness'></div>
                        <button id='member-mail' onClick={function(){
                            if(email === ""){ this.copyToClipboard("no email"); }
                            else{ this.copyToClipboard(email); }
                            alert('Copied the mail to the clipboard.');
                        }.bind(this)}>Mail</button>
                    </div>
                    <p id='member-name'>{item.name}</p>
                    <p id='member-info'>{item['name(kor)']}</p>
                    <p id='member-info'>{item.status}</p>
                </div>
            )
        });
        // current undergraduate student 클래스
        const cur_ungrad_stu = CurUngradStu.map((item, index) => {
            const img_url = './images/' + item.image;
            const email = item.email;
            var img_tag = <img src={require('./images/person.png').default}/>;
            if(item.image !==''){ img_tag=<img src={require(`${img_url}`).default}/>; }

            return(
                <div id='people-member-info'>
                    <div id='img-wrapper'>
                        {img_tag}
                        <div id='darkness'></div>
                        <button id='member-mail' onClick={function(){
                            if(email === ""){ this.copyToClipboard("no email"); }
                            else{ this.copyToClipboard(email); }
                            alert('Copied the mail to the clipboard.');
                        }.bind(this)}>Mail</button>
                    </div>
                    <p id='member-name'>{item.name}</p>
                    <p id='member-info'>{item['name(kor)']}</p>
                    <p id='member-info'>{item.status}</p>
                </div>
            )
        });
        // alumni 클래스
        const alumni = Alumni.map((item, index) => {
            const img_url = './images/' + item.image;
            const email = item.email;
            var img_tag = <img src={require('./images/person.png').default}/>;
            if(item.image !==''){ img_tag=<img src={require(`${img_url}`).default}/>; }
            
            return(
                <div id='people-member-info'>
                    <div id='img-wrapper'>
                        {img_tag}
                        <div id='darkness'></div>
                        <button id='member-mail' onClick={function(){
                            if(email === ""){ this.copyToClipboard("no email"); }
                            else{ this.copyToClipboard(email); }
                            alert('Copied the mail to the clipboard.');
                        }.bind(this)}>Mail</button>
                    </div>
                    <p id='member-name'>{item.name}</p>
                    <p id='member-info'>{item['name(kor)']}</p>
                    <p id='member-info'>{item.status}</p>
                </div>
            )
        });


        return(
            <div className='people'>
                <div id='people-top'>
                    <p id='people-title'>People</p>
                </div>

                <div id='people-member'>
                    {/* 만약 해당 클래스에 포함된 사람이 없을 시 해당 클래스는 주석처리 */}
                    <p id='people-member-title'>Faculty</p>
                    <div id='people-section'>
                        {faculty}
                    </div>
                    <br/>

                    <p id='people-member-title'>Current Graduate Students</p>
                    <div id='people-section'>
                        {cur_grad_stu}
                    </div>
                    <br/>

                    <p id='people-member-title'>Current Undergraduate Students</p>
                    <div id='people-section'>
                        {cur_ungrad_stu}
                    </div>
                    <br/>

                    <p id='people-member-title'>Alumni</p>
                    <div id='people-section'>
                        {alumni}
                    </div>
                </div>

                <div id='footer-empty'></div>
            </div>
        );
    }
}

export default People;