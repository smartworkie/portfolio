import React , {useState} from 'react';
import './project.css';
import Movie from '../../img/movie.PNG';
import Smart from '../../img/smart.PNG';



const Project = () => {
    const [learn, setLearn] = useState(true);
    const [learn1, setLearn1] =useState(true);
    const handleLearn =() =>{
        setLearn(!learn);
    }
    const handleLearn1 =()=>{
        setLearn1(!learn1);
    }
    const Small = (a) =>{
        if(learn ){
        return a.substring(0,30);
        }
        else{
            return a;
        }

        }
        const Small1 =(a) =>{
            if (learn1){
                return a.substring(0,30)
            }
            else{
                return a;
            }
        }
        
    return(
        <div>
        <div className='wrap'>
            <h1>Projects</h1>
           <div className='image'><div className='smartDiv'><a href = 'https://verifiedsmart.netlify.app'
            rel="noreferrer" target="_blank"> <img src={Smart} alt='smart' className='smart'/></a>
          <div className='string'> 
          <p className='small'>{Small('Web app for creation of word documents, pdf documents, excel documents and file conversion. It supports creation of user accounts (Google Sign Up and Login)')}...</p>
         {learn &&  <p className='learn' onClick={handleLearn}>Learn More</p>}</div>
       {!learn &&<p onClick ={handleLearn} className='see' id = 'see'>See Less</p>}
           </div>
           <div>
            <a href='https://movcol.netlify.app' target="_blank" rel="noreferrer"> <img src={Movie} alt='movie' className='movie'/></a>
            <div className='string'> 
          <p> {Small1('Web app created using the Movie Database API. It includes features such as logging in, ability to rate a movie after logging in and much more'
          )}...</p>
         {learn1 &&  <p className='learn' onClick={handleLearn1}>Learn More</p>}</div>
       {!learn1 &&  <p  onClick={handleLearn1} className='see'>See Less</p>}
         </div>
        </div>
        </div>
      </div>
    )
};

export default Project;