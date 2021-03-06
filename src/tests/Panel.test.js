import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  } );

  
    it( 'should render a div with class', () =>{
      const component = shallow( <Panel /> );
      expect( component.find( '.component-panel' ) ).toHaveLength( 1 );
      
    } );
    
    it( 'should render 19 buttons', () => {
      const component = shallow( <Panel /> );
      expect( component.find( 'Button' ) ).toHaveLength( 19 );
    } );
  } );
