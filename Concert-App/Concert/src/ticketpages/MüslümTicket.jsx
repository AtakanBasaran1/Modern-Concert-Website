import React, { useState, useEffect } from 'react';

function MüslümTicket() {
  // State tanımlama: kullanıcı adını saklamak için
  const [userName, setUserName] = useState('');

  // Component mount olduğunda localStorage'den ismi al ve state'e set et
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []); // [] boş dependency array, sadece bir kere çalışması için

  // Giriş yap butonuna basıldığında localStorage'e ismi kaydet
  const handleLogin = () => {
    localStorage.setItem('userName', userName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder='adınız'
        value={userName} // state içindeki değeri input alanına bağla
        onChange={(e) => setUserName(e.target.value)} // input değeri değiştiğinde state'i güncelle
      />
      <button onClick={handleLogin}>giriş yap</button>
    </div>
  );
}

export default MüslümTicket;
