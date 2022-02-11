import React from 'react';
import './AboutPage.css'
import me from './me.jpg'
import { Link } from 'react-router-dom';


function AboutPage(props) {
    const url1 = "";
    const url2 = "";
    return(
        <div >
            <br /><br /><br /><br />
            <h1 id='title'> About Me </h1>
            <br />
            <h1 id='name'>Aanchu K </h1>
            {/* <div className="image-container">
                <img src={me} alt="me" height="390" width="350" />
            </div> */}
            <div id='abtdisc'>
                <center>
                <p>
                    Welcome to my first Blog Post. 
                   
                </p>
                <p>
                My name is Anchu K, and I am going to show you how to start blogging today. I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same.
                   
                </p>
                <p>
                I know that starting a blog can seem overwhelming and intimidating. This free guide is all about blogging for beginners, and will teach you how to become a blogger with just the most basic computer skills. So whether you’re 8 or 88, you can create your own blog in 20 minutes.
                </p>
                </center>
            </div>
           
        </div>
        
    );   
}

export default AboutPage;
 

// var Test = React.createClass({
//     render: function() {
//       const url = "https://google.com";
   
//       return <div><a href={url}>link</a></div>;
//     }
//   });