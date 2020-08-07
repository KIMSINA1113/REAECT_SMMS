import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
import './Register.css'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zoneCode : "",
            fullAddress : "",
            isDaumPost : false,
            isRegister : false,
            register: [],
        }
    }

    handleOpenPost = () => {
        this.setState({
            isDaumPost : true
        })
    }

    // postcode
    handleAddress = (data) => {
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

    render() {
        const { isModalShow, isModalClose } = this.props;
        const { name, address, isDaumPost, fullAddress, zoneCode, isRegister } = this.state;
        // DaumPostCode style
        const width = 595;
        const height = 450;
        const modalStyle = {
            position: "absolute",
            top: "300px",
            left: "30%",
            zIndex: "100",
            border: "1px solid #000000",
            overflow: "hidden"
        }
        return (
            <div className="Form">
            <div className="title">업체 등록</div>
            <div className="register-form">
                <div class="box">
                    <div className="sub-title">업체명</div>
                    <input type="text"></input>
                </div>
                <div class="box">
                    <div className="modalRow">
                        <div className="modalCell cellTit">
                            <div className="sub-title">주소</div>
                        </div>
                        <div className="modalCell">
                            <div className="cellFirst">
                                <div className="zipCode">{zoneCode}</div>
                                <button type="button" className="postcode" onClick={this.handleOpenPost} >
                                    <span>우편번호 찾기</span>
                                </button>
                            </div>
                            {
                                isDaumPost ?
                                    <DaumPostCode
                                        onComplete={this.handleAddress}
                                        autoClose
                                        width={width}
                                        height={height}
                                        style={modalStyle}
                                        isDaumPost={isDaumPost}
                                        />
                                : null
                            }
                            <div className="address">{fullAddress}</div>
                            <input type="" className="addressBox"/>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div className="sub-title">전화번호</div>
                    <input type="text" className="phone"></input>
                    <input type="text" className="phone" maxLength="4"></input>
                    <input type="text" className="phone" maxLength="4"></input>
                </div>
                
                <div class="box">
                    <div className="label-count">총 등록한 담보물은 <span>8</span>개 입니다.</div>
                </div>
                <div class="box" style={{textAlign:"center"}}>
                    <button className="success-btn">등록 완료</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Register;

/*<div class="box">
                    <div className="sub-title">담보물 등록 <button className="plusbtn" onClick="plus-dambo">추가하기</button></div>
                    <div class="plus-form">
                        <input type="text" className="plusdambo"></input>
                        <button className="deleteBtn">삭제하기</button>
                    </div>
                    <div class="plus-form">
                        <input type="text" className="plusdambo"></input>
                        <button className="deleteBtn">삭제하기</button>
                    </div>
                </div>

                
                */