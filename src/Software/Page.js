import {Component} from 'react';
import './PageStyle.css';

import SoftwareContent from '../dataset/Software/Package-info.json';

class Software extends Component{
    render(){
        const s_content = SoftwareContent.map((item, index) => {
            const src_img = './images/' + item.image;
            const link = item.github;

            return(
                <div className='pack'>
                    <div onClick={function(e){ window.open(link); }.bind(this)}>
                        <p id='gogit'>Read more</p>
                    </div>
                    <img src={require(`${src_img}`).default}/>
                    <p id='name'><b>{item.name}</b></p>
                </div>
            )
        });

        return(
            <div className='soft'>
                <div id='soft-top'>
                    <p id='soft-title'>Software</p>
                </div>

                <div className="package-wrapper">
                    {s_content}
                </div>

                
                <div id='footer-empty'></div>
            </div>
        );
    }
}

export default Software;