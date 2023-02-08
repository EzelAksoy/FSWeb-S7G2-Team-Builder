import React, { useState } from "react";

const ÜyeKaydı = (props) => {
  const [yeniKayıt, setYeniKayıt] = useState({
    adı: "",
    soyadı: "",
    yaş: "",
    mail: "",
  });
  function HandleChange(event) {
    console.log(yeniKayıt);
    setYeniKayıt({ ...yeniKayıt, [event.target.id]: event.target.value });
  }
  const { personel } = props;

  return (
    <div>
      <form>
        <label htmlFor="name"> İsim : </label>
        <input
          name="name"
          type="text"
          id="adı"
          value={yeniKayıt.adı}
          onChange={HandleChange}
        ></input>
        <label htmlFor="soyisim"> Soyisim : </label>
        <input
          name="name"
          type="text"
          id="soyadı"
          value={yeniKayıt.soyadı}
          onChange={HandleChange}
        ></input>
        <label htmlFor="yaş"> Yaş : </label>
        <input
          name="name"
          type="text"
          id="yaş"
          value={yeniKayıt.yaş}
          onChange={HandleChange}
        ></input>
        <label htmlFor="mail"> Mail : </label>
        <input
          name="name"
          type="text"
          id="mail"
          value={yeniKayıt.mail}
          onChange={HandleChange}
        ></input>
        <br />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            personel(yeniKayıt);
          }}
        >
          {" "}
          KAYIT{" "}
        </button>
      </form>
    </div>
  );
};

export default ÜyeKaydı;
