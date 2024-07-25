// MusicPlayer.jsx

import React, { useRef, useEffect } from 'react';
import '../components/musicPlayer.css'; // CSS dosyanızı import edin

function MusicPlayer() {
    const audioRef = useRef(null);

    useEffect(() => {
        // Sayfa yüklendiğinde müziği otomatik olarak başlat
        audioRef.current.play();
    }, []); // Boş bağımlılık dizisi, sadece bir kere çalışmasını sağlar

    return (
        <div className='musicPlayer'>
            <audio ref={audioRef} className="music-player" controls loop>
                <source src="/muzik.mp3" type="audio/mpeg" />
                Tarayıcınız audio elementini desteklemiyor.
            </audio>
        </div>
    );
}

export default MusicPlayer;
