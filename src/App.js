import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import data from './data/dados_iniciais.json';
function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain videoTitle={"Criando seu primeiro App com Xamarin.Forms"} 
      videoDescription={"Concebido originalmente como um kit de ferramentas UI, o Xamarin.Forms permite aos Desenvolvedores criar facilmente interfaces de usuário que podem ser compartilhadas entre Android, iOS e Universal Windows Platform (UWP)."}
      url={"https://www.youtube.com/watch?v=PgQHq-g5y9c&t=8152s"}/>
      <Carousel category={data.categorias[0]} />
      <Footer />
    </div>
  );
}

export default App;
