import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Demo from './demo';

const ROOT_DOM = 'root';

ReactDOM.render(<Demo text={'Click This'} />, document.getElementById(ROOT_DOM));
