import profilePic from './assets/profile_pic.jpg'

function Card (){
    return (
        <div className = "card">
            <div className = "upper-card">
                <img className = "profile-pic" src = {profilePic} alt="Profile picture" />
            </div>
            <div className = "bottom-card">
                <h2>cynth1a.</h2>
                <p>i need fat cat and i need java</p>
            </div>
        </div>
    );
}

export default Card