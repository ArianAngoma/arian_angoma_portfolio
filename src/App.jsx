import {
  Footer,
  Skills,
  HeaderAppWrap,
  Testimonial,
  WorkAppWrap,
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
      <WorkAppWrap/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
