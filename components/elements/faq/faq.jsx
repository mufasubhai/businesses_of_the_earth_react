import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';
import Axios from 'axios';
import Header from '../../header/header'

const FAQ = (props) => {

    const addPclass = (content, tag) => {
        return content.split('<p>').join(`<span class="${tag}"><p>`).split('</p>').join('</p></span>')
    }
    const [faq, setFaq] = useState(null);


        useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/pages/129`).then(response => {
                setFaq(response.data)
            }
            );
        }, [])

    



    if (!props.faq) {
     
       useEffect(()=> {
            Axios.get(`https://businessesoftheearth.org/wp-json/wp/v2/pages/129`).then(response => {
                setFaq(response.data)
            }
            );
        }, [])
    } else {
        useEffect(()=> {
            
            setFaq(props.faq)

        }, [])
    }

    
    return (
        <div className="faq-body">
           <Header/>

            <div className="faq-wrapper-top">

           <h1>Frequently Asked Questions</h1>
            </div>
           {(!faq) ? null : 

           <div className='faq-wrapper no_reading_time'>
               

                    <span className="faq-question">
                        <span>{parse(addPclass(faq.content.rendered, 'faq-p'))}
                            </span>
                            </span>
                
               
           </div>
           }

        </div>
    )
}


export default FAQ;