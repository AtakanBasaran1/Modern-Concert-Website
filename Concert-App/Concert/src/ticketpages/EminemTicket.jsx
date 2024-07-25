import React, { useState, useEffect } from 'react';
import '../ticketpages/eminemticket.css';
import eminem2 from '../images/eminem2.png';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function EminemTicket() {
    const [biletSayisi, setBiletSayisi] = useState(0);
    const [selectedConcert, setSelectedConcert] = useState("");
    const [selectedYer, setSelectedYer] = useState("");
    const [selectedFiyat, setSelectedFiyat] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const arttir = () => {
        if (biletSayisi > 4) {
            alert("En fazla 5 adet bilet satın alabilirsiniz.");
        } else {
            const yeniBiletSayisi = biletSayisi + 1;
            setBiletSayisi(yeniBiletSayisi);
            localStorage.setItem("Bilet Sayısı", yeniBiletSayisi);

            // Toplam fiyatı güncelle
            const yeniTotalPrice = (yeniBiletSayisi * selectedFiyat) + ' ₺';
            setTotalPrice(yeniTotalPrice);
            localStorage.setItem("Toplam Fiyat", yeniTotalPrice);
        }
    }

    const azalt = () => {
        if (biletSayisi > 0) {
            const yeniBiletSayisi = biletSayisi - 1;
            setBiletSayisi(yeniBiletSayisi);
            localStorage.setItem("Bilet Sayısı", yeniBiletSayisi);

            // Toplam fiyatı güncelle
            const yeniTotalPrice = (yeniBiletSayisi * selectedFiyat) + ' ₺';
            setTotalPrice(yeniTotalPrice);
            localStorage.setItem("Toplam Fiyat", yeniTotalPrice);
        }
    }


    const handleConcertCheckboxChange = (e) => {
        const value = e.target.value
        setSelectedConcert(value)
        localStorage.setItem("Seçilen Konser", value)
    }



    const handleYerCheckboxChange = (e) => {
        const value = e.target.value;
        const [yer, fiyat] = value.split(' / ');
        setSelectedYer(yer);
        const parsedFiyat = parseFloat(fiyat.replace('₺', ''));
        setSelectedFiyat(parsedFiyat);
        localStorage.setItem("Seçilen Yer", yer);
        localStorage.setItem("Bilet Fiyatı", fiyat);

        // Parsed fiyatı stringten sayısal veri tipine çevirmeyi sağlar.
        const yeniTotalPrice = (biletSayisi * parsedFiyat) + ' ₺';
        setTotalPrice(yeniTotalPrice);
        localStorage.setItem("Toplam Fiyat", yeniTotalPrice);
    }

    return (
        <div className='eminemTicketPage'>
            <h1>EMINƎM KONSER SEÇİMİ</h1>

            <label className="custom-checkbox">
                <input
                    value="California Konseri"
                    checked={selectedConcert === "California Konseri"}
                    onChange={handleConcertCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                29 Temmuz - California Konseri
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Abu Dhabi Konseri"
                    checked={selectedConcert === "Abu Dhabi Konseri"}
                    onChange={handleConcertCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                11 Ağustos - Abu Dhabi Konseri
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Guildford Konseri"
                    checked={selectedConcert === "Guildford Konseri"}
                    onChange={handleConcertCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                26 Ağustos - Guildford Konseri
            </label>

            <h2>YER SEÇİMİ</h2>

            <label className="custom-checkbox">
                <input
                    value="Ön Sıra / 1224 ₺"
                    checked={selectedYer === "Ön Sıra"}
                    onChange={handleYerCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                Ön Sıra / 1224 ₺
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Merkez / 998 ₺"
                    checked={selectedYer === "Merkez"}
                    onChange={handleYerCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                Merkez / 998 ₺
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Arka Sıra / 752 ₺"
                    checked={selectedYer === "Arka Sıra"}
                    onChange={handleYerCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                Arka Sıra / 752 ₺
            </label>

            <div className='biletSayisiSecimi'>
                <div><h3>Bilet Sayısı</h3> </div> <br />
                <div className='arttırEksilt'>
                    <CiCircleMinus onClick={azalt} className='azalt' />
                    <div className="biletsayisi"> {biletSayisi} </div>
                    <CiCirclePlus onClick={arttir} className='arttır' />
                </div> <br />
                <div><h4>Toplam Fiyat : {totalPrice} </h4></div>
                <button className='buyButton'> Ödeme Yap
                </button>
            </div>

            <img className='eminem-ti' src={eminem2} alt="Eminem" />
        </div>
    );
}

export default EminemTicket;
