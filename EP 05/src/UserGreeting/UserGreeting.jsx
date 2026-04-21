import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting({isLoggedIn = false, username = "Guest"}) {
    if (isLoggedIn) {
        return <h2 className = {styles.welcomeMessage}>Welcome {username}</h2>
    }
    else {
        return <h2 className = {styles.login}>Please log in to continue</h2>
    }

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting