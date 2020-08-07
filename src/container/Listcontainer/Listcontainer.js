import React, {Component} from 'react';
import { Wrapper } from '../../components';
import { CompanyList } from '../../components';
import { DamboList } from '../../components';

class Listcontainer extends Component {
    render() {
        return (
            <Wrapper>
                <CompanyList/>
                <DamboList/>
            </Wrapper>
        );
    }
}

export default Listcontainer;