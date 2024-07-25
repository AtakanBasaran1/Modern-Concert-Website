import React, { useState, useRef } from 'react';
import '../pages/concert.css';
import eminem from '../images/eminem.png';
import hadise from '../images/hadise.png';
import pitbull from '../images/pitbull.png';
import semicenk from '../images/semicenk.png';
import lanadelrey from '../images/lanadelrey.png';
import { FaSpotify } from "react-icons/fa";
import '../pages/ticketTable.css'
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";


function Concert() {

    const [scrollDirection, setScrollDirection] = useState("down");


    const hadiseRef = useRef(null);
    const pitbullRef = useRef(null);
    const semicenkRef = useRef(null);
    const lanadelreyRef = useRef(null)


    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    };

    const handleSearch = (e) => {
        const inputText = e.target.value.toLowerCase();


        if (inputText === "hadise") {
            scrollToRef(hadiseRef);
        } else if (inputText === "pitbull") {
            scrollToRef(pitbullRef);
        } else if (inputText === "semicenk") {
            scrollToRef(semicenkRef);
        } else if (inputText === "lana del rey") {
            scrollToRef(lanadelreyRef);
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        setScrollDirection("up");
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScrollDirection("down");
    };
    const müslümTPRun = () => {
        window.location.href = '/müslüm-gürses-bilet'
    }
    const eminemTPRun = () => {
        window.location.href = '/eminem-bilet'
    }
    const pitbullTPRun = () => {
        window.location.href = '/pitbull-bilet'
    }
    const hadiseTPRun = () => {
        window.location.href = '/hadise-bilet'
    }
    const semicenkTPRun = () => {
        window.location.href = '/semicenk-bilet'
    }
    const LanaDelReyTPRun = () => {
        window.location.href = '/lana-del-rey-bilet'
    }

    return (
        <div className='concert'>
            <input
                type="text"
                list='subject'
                className="search-input"
                placeholder="Sanatçı arayınız.."
                onChange={handleSearch}
            />



            <datalist id='subject'>
                <option value="Pitbull"></option>
                <option value="Hadise"></option>
                <option value="Semicenk"></option>
                <option value="Lana Del Rey"></option>

            </datalist>

            <div className='Eminem'>
                <h1>EMINƎM</h1>
                <h2>29 Temmuz - California Konseri</h2>
                <h2>11 Ağustos - Abu Dhabi Konseri</h2>
                <h2>26 Ağustos - Guildford Konseri</h2>

                <div className='songs'>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> RAP GOD
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> NOT AFRAID
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> SING FOR THE MOMENT
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> STAN
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> LOVE THE WAY YOU LIE
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> MY NAME IS
                        </a>
                    </p>
                    <button onClick={eminemTPRun} className="ticket-button">Bilet Bul</button>
                </div>
                <img className='eminem-i' src={eminem} alt="Eminem" />
                <hr ref={pitbullRef} className="custom-hr" />
            </div>

            <div className='Pitbull'>
                <h1>PITBULL</h1>
                <h2>12 Temmuz - Santa Barbara Konseri</h2>
                <h2>3 Ağustos - Durant Konseri</h2>
                <h2>24 Ağustos - Virginia Beach Konseri</h2>

                <div className='songs'>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' />  TIMBER
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> GIVE ME EVERYTHING
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> HOTEL ROOM SERVICE
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> HEY BABY
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> DON'T STOP THE PARTY
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> FIREBALL
                        </a>
                    </p>
                    <button onClick={pitbullTPRun} className="ticket-button">Bilet Bul</button>
                </div>
                <img className='pitbull-i' src={pitbull} alt="Pitbull" />
                <hr ref={hadiseRef} className="custom-hr" />
            </div>

            <div className='Hadise'>
                <div className='mm'>
                    <h1>HADİSE</h1>
                    <h2>27 Temmuz - Harbiye Konseri</h2>
                    <h2>14 Ağustos - İzmir Konseri</h2>
                    <h2>22 Ağustos - Berlin Konseri</h2>

                    <div className='songs'>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> OLSUN
                            </a>
                        </p>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> MELEK
                            </a>
                        </p>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> SEVMİYOR
                            </a>
                        </p>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> YAZ GÜNÜ
                            </a>
                        </p>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> DÜM TEK TEK
                            </a>
                        </p>
                        <p>
                            <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                                <FaSpotify className='song-i' /> FAST LIFE
                            </a>
                        </p>
                        <button onClick={hadiseTPRun} c className="ticket-button">Bilet Bul</button>
                    </div>
                </div>
                <img className='hadise-i' src={hadise} alt="Hadise" />
                <hr ref={semicenkRef} className="custom-hr" />
            </div>

            <div className='Semicenk'>
                <h1>SEMİCENK</h1>
                <h2>21 Temmuz - İstanbul Konseri</h2>
                <h2>1 Ağustos - Ankara Konseri</h2>
                <h2>17 Ağustos - Berlin Konseri</h2>

                <div className='songs'>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> CANIN SAĞOLSUN
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> PİŞMAN DEĞİLİM
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> FARKETTİM
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> DÜŞER AKLIMA
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> YANA YANA
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> BATIK GEMİ
                        </a>
                    </p>
                    <button onClick={semicenkTPRun} className="ticket-button">Bilet Bul</button>
                </div>
                <img className='semicenk-i' src={semicenk} alt="Semicenk" />
                <hr ref={lanadelreyRef} className="custom-hr" />
            </div>

            <div className='lanadelrey'>
                <h1>LANA DEL REY</h1>
                <h2>22 Temmuz - Texas Konseri</h2>
                <h2>28 Temmuz - Madrid Konseri</h2>
                <h2>16 Ağustos - Lizbon Konseri</h2>

                <div className='songs'>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> BORN TO DIE
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> SUMMER TIME SADNESS
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> WEST COAST
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> DARK PARADISE
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> SAY YES TO HEAVEN
                        </a>
                    </p>
                    <p>
                        <a href="https://open.spotify.com/track/4exOj1cmTwRKZOB4xz4afj" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className='song-i' /> VIDEO GAMES
                        </a>
                    </p>
                    <button onClick={LanaDelReyTPRun} className="ticket-button">Bilet Bul</button>
                </div>
                <img className='lanadelrey-i' src={lanadelrey} alt="Lana Del Rey" />
                <hr className="custom-hr" />
            </div>


            {scrollDirection === "down" ? (
                <FaArrowCircleDown className="scroll-to-bottom" onClick={scrollToBottom} />
            ) : (
                <FaArrowCircleUp className="scroll-to-top" onClick={scrollToTop} />
            )}
        </div>
    );
}

export default Concert;
