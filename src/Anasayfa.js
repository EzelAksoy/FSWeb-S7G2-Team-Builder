import React from "react";
import styled from "styled-components";

const Anasayfa = (props) => {
  const Sc_p = styled.p`
    width: 80vw;
    height: 5vh;
    margin: 10px auto;
    padding: 10px auto;
    border: 0.25px solid black;
  `;
  const { takımListesi } = props;
  return (
    <div>
      <p>TAKIM LİSTESİ</p>
      {takımListesi.map((item) => (
        <Sc_p>
          İsim : "{item.adı}" Soyisim : "{item.soyadı}" Yaş : "{item.yaş}" Mail
          : "{item.mail}"{" "}
        </Sc_p>
      ))}
    </div>
  );
  console.log("Anasayfa");
};

export default Anasayfa;
