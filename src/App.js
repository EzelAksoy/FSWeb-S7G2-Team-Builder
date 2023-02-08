import logo from "./logo.svg";
import "./App.css";

import ÜyeKaydı from "./ÜyeKaydı";
import Anasayfa from "./Anasayfa";
import React from "react";
import { useState } from "react";

const TakımListeleri = [
  { adı: "Hasan", soyadı: "Kara", yaş: 35, mail: "isim.soyisim@gmail.com" },
  { adı: "Mustafa", soyadı: "Beyaz", yaş: 25, mail: "isim.soyisim@gmail.com" },
  { adı: "Burak", soyadı: "Yeşil", yaş: 30, mail: "isim.soyisim@gmail.com" },
  { adı: "Zeynep", soyadı: "Pembe", yaş: 30, mail: "isim.soyisim@gmail.com" },
  { adı: "Dilek", soyadı: "Kırmızı", yaş: 32, mail: "isim.soyisim@gmail.com" },
  { adı: "Zeki", soyadı: "Çalışkan", yaş: 26, mail: "isim.soyisim@gmail.com" },
];
function App() {
  const [takımListesi, setTakımListesi] = useState(TakımListeleri);
  function HandleSubmit(yeniKayıt) {
    if (!takımListesi.includes(yeniKayıt)) {
      setTakımListesi([...takımListesi, yeniKayıt]);
    }
  }
  return (
    <div className="App">
      <Anasayfa takımListesi={takımListesi} />

      <ÜyeKaydı personel={HandleSubmit} />
    </div>
  );
}

export default App;
