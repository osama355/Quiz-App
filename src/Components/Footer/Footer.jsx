import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './footer.css'

function Footer() {
    return (
        <div className="footerMain">
            <p>&copy; Created By Muhammad 2021</p>
            <p className="phone">
                <LocalPhoneIcon className="phoneIcon"/>
                03041397724
            </p>
        </div>
    )
}

export default Footer
