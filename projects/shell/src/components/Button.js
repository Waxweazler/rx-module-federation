import React from 'react';

const RemoteButton = React.lazy(() => import('mfe/Button'));

const Button = props => (
    <React.Suspense fallback="Loading Button">
        <RemoteButton {...props}/>
    </React.Suspense>
);

export default Button;
