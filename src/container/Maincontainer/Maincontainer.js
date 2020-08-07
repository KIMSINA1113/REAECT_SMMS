import React, {Component} from 'react';
import { Wrapper } from '../../components';
import { PopUp } from '../../components';
import { Total } from '../../components';
import { TableForm } from '../../components';

class Maincontainer extends Component {
    render() {
        return (
            <Wrapper>
                <Total/>
                <PopUp/>
                <TableForm/>
            </Wrapper>
        );
    }
}

export default Maincontainer;