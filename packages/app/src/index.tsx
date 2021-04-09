import React from 'react';
import ReactDOM from 'react-dom';
import tw from 'twin.macro';

function App() {
    return <div css={tw`p-5`}>test</div>;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
