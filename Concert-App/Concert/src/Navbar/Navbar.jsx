import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'
import { FaRegBell } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

function Navbar() {

    const [bellTable, setBellTable] = useState(false)

    const bellTableRun = () => {
        setBellTable(true)
    }

    const bellTableClose = () => {
        setBellTable(false)
    }

    return (
        <div className='navbar'>




            <Link to="/">Ana Sayfa</Link>
            <Link to="/konserler">Konserler</Link>
            <Link to="/hakkımızda">Hakkımızda</Link>

            <div className='icons'>
                <MdAudiotrack className='audio-icon' />
                <FaRegBell onClick={bellTableRun} className='bell' />
            </div>
            <button id='btn'>Giriş Yap</button>

            {bellTable ? (
                <div className='bell-table'>
                    <h3>
                        <IoIosClose onClick={bellTableClose} className='closeIcon-1' />
                        <h1>Bildirimler</h1>
                        <h2>Bildiriminiz bulunmamakta.</h2>
                    </h3>
                </div>
            ) : null}



        </div>
    )
}

export default Navbar