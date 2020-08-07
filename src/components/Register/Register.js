import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
import './Register.css'


class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isModalShow, isModalClose, parameters } = this.props
        const { handleCompanyNm, handleZoneCode, handleAddress, handleFullAddress } = this.props;
        const { handlePhone1, handlePhone2, handlePhone3 } = this.props;
        const { handleWarrantyNm } = this.props;
        const { addRegister, removeRegister } = this.props;
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
                <div className="box">
                    <div className="sub-title">업체명</div>
                    <input 
                        type="text" 
                        value={parameters.companyNm}
                        onChange={handleCompanyNm}></input>
                </div>
                <div className="box">
                    <div className="modalRow">
                        <div className="modalCell cellTit">
                            <div className="sub-title">주소</div>
                        </div>
                        <div className="modalCell">
                            <div className="cellFirst">
                                <div className="zipCode">{parameters.zoneCode}</div>
                                <button type="button" className="postcode" onClick={this.handleOpenPost} >
                                    <span>우편번호 찾기</span>
                                </button>
                            </div>
                            {
                                parameters.isDaumPost ?
                                    <DaumPostCode
                                        onComplete={this.handleAddress}
                                        autoClose
                                        width={width}
                                        height={height}
                                        style={modalStyle}
                                        isdaumpost={parameters.isDaumPost}
                                        />
                                : null
                            }
                            <div className="address">{parameters.sfullAddress}</div>
                            <input 
                                type="" 
                                className="addressBox" 
                                value={parameters.address}
                                onChange={handleAddress}/>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="sub-title">전화번호</div>
                    <input 
                        type="text" 
                        className="phone"
                        value={parameters.phone1}
                        onChange={handlePhone1}></input>
                    <input
                        type="text" 
                        className="phone" 
                        maxLength="4"
                        value={parameters.phone2}
                        onChange={handlePhone2}></input>
                    <input 
                        type="text" 
                        className="phone" 
                        maxLength="4"
                        value={parameters.phone3}
                        onChange={handlePhone3}></input>
                </div>

                <div className="box">
                    <div className="sub-title">
                        담보물 등록 
                        <button className="plusbtn" onClick={()=>addRegister()}>추가하기</button>
                    </div>
                    {
                        parameters.register.map((data) => (
                            <div className="plus-form">
                                <input 
                                    type="text" 
                                    className="plusdambo"
                                    id = {data.key}
                                    value={data.warranty_nm}
                                    onChange={handleWarrantyNm}></input>
                                <button className="deleteBtn" onClick={()=>removeRegister(data.key)}>삭제하기</button>
                            </div>
                        ))
                    }
                    
                </div>
                
                <div className="box">
                    <div className="label-count">총 등록한 담보물은 <span>{parameters.register.length}</span>개 입니다.</div>
                </div>
                <div className="box" style={{textAlign:"center"}}>
                    <button className="success-btn">등록 완료</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Register;

