import React, { useState, useEffect } from 'react';
import '../ticketpages/hadiseticket.css';
import eminem2 from '../images/hadise2.png';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function HadiseTicket() {
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
        <div className='hadiseTicketPage'>
            <h1>HADİSE KONSER SEÇİMİ</h1>

            <label className="custom-checkbox">
                <input
                    value="Santa Barbara Konseri"
                    checked={selectedConcert === "Santa Barbara Konseri"}
                    onChange={handleConcertCheckboxChange}
                    name="dummy"
                    type="checkbox" />
                <span className="checkmark"></span>
                27 Temmuz - Harbiye Konseri
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Durant Konseri"
                    checked={selectedConcert === "Durant Konseri"}
                    onChange={handleConcertCheckboxChange}
                    name="dummy"
                    type="checkbox" />
                <span className="checkmark"></span>
                14 Ağustos - İzmir Konseri
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Virginia Konseri"
                    checked={selectedConcert === "Virginia Konseri"}
                    onChange={handleConcertCheckboxChange}
                    name="dummy"
                    type="checkbox" />
                <span className="checkmark"></span>
                22 Ağustos - Berlin Konseri
            </label>

            <h2>YER SEÇİMİ</h2>

            <label className="custom-checkbox">
                <input
                    value="Ön Sıra / 998 ₺"
                    checked={selectedYer === "Ön Sıra"}
                    onChange={handleYerCheckboxChange}
                    name="dummy"
                    type="checkbox" />
                <span className="checkmark"></span>
                Ön Sıra / 998 ₺
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Merkez / 751 ₺"
                    checked={selectedYer === "Merkez"}
                    onChange={handleYerCheckboxChange}
                    type="checkbox" />
                <span className="checkmark"></span>
                Merkez / 751 ₺
            </label> <br />
            <label className="custom-checkbox">
                <input
                    value="Arka Sıra / 510 ₺"
                    checked={selectedYer === "Arka Sıra"}
                    onChange={handleYerCheckboxChange}
                    name="dummy"
                    type="checkbox" />
                <span className="checkmark"></span>
                Arka Sıra / 626 ₺
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

export default HadiseTicket;
