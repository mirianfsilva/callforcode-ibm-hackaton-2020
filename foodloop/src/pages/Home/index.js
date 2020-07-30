import React from 'react';
import Menu from '../../components/Navbar'
// import dadosIniciais from '../../data/dados_iniciais.json';
// import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#fcfdf4" }}>
      <Menu />

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      /> */}

      <Footer />
    </div>
  );
}

export default Home;