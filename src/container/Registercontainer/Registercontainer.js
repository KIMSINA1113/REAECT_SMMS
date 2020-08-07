import React, {Component} from 'react';
import { Wrapper, Register } from '../../components';

class Registercontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyNm : "asdf",
            zoneCode : "",
            address : "",
            fullAddress : "",
            phone1 : "",
            phone2 : "",
            phone3 : "",
            isDaumPost : false,
            register : [
                {
                    warranty_nm : "홍길동",
                    key : 1
                },
                {
                    warranty_nm : "이순신",
                    key : 2
                }
            ],
            nextKey : 3
        }
    }

    handleCompanyNm = (e) => {
        this.setState({
            companyNm : e.target.value
        });
    }

    handleZoneCode = (e) => {
        this.setState({
            zoneCode : e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address : e.target.value
        })
    }

    handlePhone1 = (e) => {
        this.setState({
            phone1 : e.target.phone1
        })
    }

    handlePhone2 = (e) => {
        this.setState({
            phone2 : e.target.phone2
        })
    }

    handlePhone3 = (e) => {
        this.setState({
            phone3 : e.target.phone3
        })
    }

    handleOpenPost = () => {
        this.setState({
            isDaumPost : true
        })
    }

    // postcode
    handleFullAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = ''; 
        let zoneCodes = data.zonecode;
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState ({
            fullAddress: AllAddress,
            zoneCode : zoneCodes
        })
    }

    addRegister = () => {
        this.setState({
            register : this.state.register.concat({warranty_nm:"", key:this.state.nextKey}),
            nextKey : this.state.nextKey + 1
        });
    }

    handleWarrantyNm = (e) => {
        this.setState({
            register : this.state.register.map((data) => (
                data.key==e.target.id ? 
                {
                    key : e.target.id,
                    warranty_nm : e.target.value
                }
                : data
            ))
        })
    }

    removeRegister = (id) => {
        this.setState({
            register : this.state.register.filter(data=>data.key!==id)
        })
    }
    
    render() {
        return (
            <Wrapper>
                <Register 
                    parameters = {this.state}
                    handleCompanyNm = {this.handleCompanyNm}
                    handleZoneCode = {this.handleZoneCode}
                    handleAddress = {this.handleAddress}
                    handleFullAddress = {this.handleFullAddress}
                    handlePhone1 = {this.handlePhone1}
                    handlePhone2 = {this.handlePhone2}
                    handlePhone3 = {this.handlePhone3}
                    handleOpenPost = {this.handleOpenPost}
                    addRegister = {this.addRegister}
                    handleWarrantyNm = {this.handleWarrantyNm}
                    removeRegister = {this.removeRegister}
                />
            </Wrapper>
        );
    }
}

export default Registercontainer;