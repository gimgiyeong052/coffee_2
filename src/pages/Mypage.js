import React from 'react'
import {MyPageWrap} from"../styles/MyPageStyle"
import { Link } from 'react-router-dom'

const Mypage = () => {
  return (
    <MyPageWrap>
        <div className="mypage_index">
            <div className="member_wrap">
                <div className="greeting">
                    <span className="name">KKystor</span>
                    님 환영 합니다.
                </div>
                <div className="point">
                    <dl>
                        <dt>보유 포인트</dt>
                        <dd></dd>
                    </dl>
                    <dl>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
            <div className="menu_wrap">
                <Link to="/">
                    <span>정보수정</span>
                </Link>
                <Link to="/OrderList">
                    <span>주문내역</span>
                </Link>
            
                    <Link to="/Resign">
                        <span>회원탈퇴</span>
                        </Link>
                
            
                    <Link to="/"><span>장바구니</span></Link>
                
            
                    <Link to="/"><span>즐겨찾기</span></Link>
                
            
                    <Link to="/"><span>로그아웃</span></Link>
                
            
                    <Link to="/"><span>Pay</span></Link>
                
            </div>
        </div>
    </MyPageWrap>
  )
}

export default Mypage