import {
  FooterAppWrap,
  SkillsAppWrap,
  HeaderAppWrap,
  TestimonialAppWrap,
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
      <SkillsAppWrap/>
      <TestimonialAppWrap/>
      <FooterAppWrap/>
    </div>
  );
};

export default App;
