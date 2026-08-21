function ProfilePic () {

    const image = './assets/hero.png'

    const handleClick = () => {console.log ("WOII")}

    return (
        <img onClick = {handleClick} src = {image} alt = "React icon"></img>
    )
}

export default ProfilePic