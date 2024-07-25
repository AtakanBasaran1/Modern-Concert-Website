import React, { useState } from 'react'
import müslümtra from '../images/MüslümTra.png'
import '../pages/home.css'



function Home() {

    const [bilet, setBilet] = useState("")

    const müslümTPRun = () => {
        window.location.href = '/müslüm-gürses-bilet'
    }

    document.addEventListener('DOMContentLoaded', function () {
        // müslümTraImg elementini seç
        var müslümTraImg = document.querySelector('.müslümTraImg');

        // Animasyon sınıfını ekleyerek animasyonu başlat
        müslümTraImg.classList.add('animate__animated', 'animate__slideInRight');
    });
    return (
        <div className='home'>



            <div className='slogan'>
                <h3>EFSANE SES, UNUTULMAZ ANLAR</h3>
                <h2>Müslüm Gürses Berlin Konseri</h2>
                <button onClick={müslümTPRun} id="btn">Hemen Bilet Al</button>
                <img className='müslümTraImg' src={müslümtra} />
            </div>



        </div>
    )
}

export default Home