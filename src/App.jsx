import {
  Footer,
  Skills,
  HeaderAppWrap,
  Testimonial,
  Work,
  AboutAppWrap,
} from './container';
import {Navbar} from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <HeaderAppWrap/>
      <AboutAppWrap/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
