import React, {Component} from 'react'
import './App.css';
import { MdMenu, MdClose } from 'react-icons/md';
import { AiOutlineMenu } from "react-icons/ai";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false,
        };
      }
    
      toggleMenu = () => {
        this.setState(prevState => ({
          isMenuOpen: !prevState.isMenuOpen,
        }));
      };
    

  render(){

    const { isMenuOpen } = this.state;

  return (
      <div className="App-header">

    <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="container-img">
            <img src={require('./assets/ivan.jpg')} height={60} width={60} className="img1" alt="Ivan" />
            <h2>Ivan</h2>
          </div>

          <div className='div-menu'>
            <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              <li>
                <a href='#Sobre' className='link-menu'>Sobre</a>
              </li>
              <li>
                <a href='#Exper' className='link-menu'>Minha Experiencia</a>
              </li>
              <li>
                <a href='#Educatio' className='link-menu'>Educação</a>
              </li>
              <li>
                <a href='#portifolio' className='link-menu'>Porifolio</a>
              </li>
              <li>
                <a href='#contato' className='link-menu'>Contato</a>
              </li>
            </ul>
          </div>
          <div className={`mobile-menu-icon ${isMenuOpen ? 'mobile-menu-icon-open' : ''}`} onClick={this.toggleMenu}>
          {isMenuOpen ? <MdClose size={30} color='#fff' /> : <MdMenu size={30}color='#fff' />}
           </div>
        </div>

      


        <div className='area-sobre' id='Sobre'>
                 <div className='area-title'>
                     <div className='area-nome'></div>
                     <div className='area-cv'></div>
                 </div>
                 <div className='area-img'>
                      <img src={require('./assets/banner-02.png')} className="img2"/>
                 </div>
          </div>

          <div className='container-divisor'>
              <div className='divisor'>
                    <hr></hr>
              </div>
          </div>
             
          <div className='area-experience' id='Exper'>
               <h4>OVER 10 YEARS OF EXPERIENCE</h4>
               <h1>My Experience</h1>
               <div className='post-experience'></div>
               <div className='post-experience'></div>
               <div className='post-experience'></div>
          </div>

          <div className='container-divisor'>
              <div className='divisor'>
                    <hr></hr>
              </div>
          </div>


          <div className='area-portifolio' id='portifolio'>
               <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
               <h1>My Portifolio</h1>
               <div className='div-post'>
                   <div className='listing-grid'>222</div>
                   <div className='listing-grid'>222</div>
                   <div className='listing-grid'>222</div>
               </div>
          </div>

          <div className='container-divisor'>
              <div className='divisor'>
                    <hr></hr>
              </div>
          </div>

      </div>
  );
}
}

export default App;
