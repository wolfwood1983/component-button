import React from 'react';
import Button from 'antd/es/button';
import('antd/es/button/style');

class CompButton extends React.Component {
    render() {
        return (
            <Button style={{color:window.color}}>222</Button>
        );
    }
}

export default CompButton;