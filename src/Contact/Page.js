import { Component } from 'react';
import './PageStyle.css';

class Contact extends Component{
    render(){
        return(
            <div className='contact'>
                <div id='con-top'>
                    <p id='con-title'>Contact</p>
                </div>

                {/* 연구실 주소와 전화번호 */}
                <div id='con-info'>
                    <p> <b style={{fontSize:'1.4em'}}>Location</b> :   735 Mugeo-dong, Nam-gu, Ulsan / University of Ulsan, Building 7,  </p>
                    <p> <b style={{fontSize:'1.4em'}}>Call</b> :   052-259-2728 </p>
                </div>

                {/* 연구실 위치(구글 지도) */}
                <div id='map'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1623.192878921186!2d129.25512026515364!3d35.54417399789136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35662ded77b0d227%3A0x71a708256466f7b6!2z7Jq47IKw64yA7ZWZ6rWQIOqzte2VmTHtmLjqtIA!5e0!3m2!1sen!2skr!4v1634319526038!5m2!1sen!2skr" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="fast"
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default Contact;