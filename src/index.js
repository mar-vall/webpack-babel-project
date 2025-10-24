import { message } from './message';
import './styles.css';
import logo from './assets/logo-assuresoft.png';

const root = document.createElement('div');
root.innerHTML = `
  <h1>${message}</h1>
  <p>Bundled with <strong>Webpack</strong> and transpiled by <strong>Babel</strong>.</p>
  <img src="${logo}" alt="Logo" />
`;

document.body.appendChild(root);
