import Profilepic from './assets/profilepic.jpeg'
function Profile(){
    return(

       <div className='Profile-MainContainer'>
         <div className="Profile-container">
         <img className='profile-image' src={Profilepic} alt="profile-picture" />
         <h3 className='profile-title'>Mr. Samarth Koli</h3>
         <hr />
         <p className='profile-description'>Passionate software developer turning ideas into impactful digital solutions, one line of code at a time.</p>
        </div>
       </div>

    );
}

export default Profile