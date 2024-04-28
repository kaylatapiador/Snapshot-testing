import { render, screen } from '@testing-library/react';
//import renderer from 'react-test-renderer'
import App from './App';

//test('renders a snapshot', () => {
  //const tree = renderer.create(<App/>).toJSON()
  //expect(tree).toMatchSnapshot()
//})

test('renders text Photo', () => {
  render(<App />)
  const nameElement = screen.getByText(/photo/i)
  expect(nameElement).toBeInTheDocument()
});