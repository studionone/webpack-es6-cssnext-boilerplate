// Dependencies
import 'babel/polyfill';
import { hello } from './testing.jsx';

// Bring in CSS
import '../../css/main.css';

window.onload = () => {
    console.log('Got it! Change this line with `gulp` running and see it reload');
    hello();
};
