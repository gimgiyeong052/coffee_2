import React from 'react';
import { WithdrawalWrap } from '../styles/ResignStyle'; 

const Resign = () => {
  return (
    <WithdrawalWrap>

      <div>Resign</div>
      <div className="layout_max">
        <div className="mypage_withdrawal">
          <div className="alert_text">
            정말로 탈퇴하시겠습니까?
          </div>
          <div className="member_info">
            <dl>
              <dt>이름 :</dt>
              <dd>김기영</dd>
            </dl>
            <dl>
              <dt>휴대폰 :</dt>
              <dd>010-5545-41212</dd>
            </dl>
          </div>
          <div className="dash_borard">
            <div className="list_st point_wrap">
              <div className="left_zone">
                보유 포인트
              </div>
              <div className="right_zone">
                <div className="num">0</div>점
              </div>
            </div>
            <div className="list_st coupon_wrap">
              <div className="left_zone">
                보유 쿠폰
              </div>
              <div className="right_zone">
                <span className="num">1</span>장
              </div>
            </div>
          </div>
          <div className="guide_text">
            <ul>
              <li>기</li>
              <li>니</li>
              <li>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam explicabo ex officiis nobis quisquam? Eaque modi recusandae architecto expedita maiores nemo delectus, possimus nesciunt labore veritatis ab animi atque.</li>
              <li>글자 길때 대응 글자 길때 대응 글자 길때 대응 글자 길때 대응 글자 길때 대응 글자 길때 대응 글자 길때 대응글자 길때 대응 글자 길때 대응 글자 길때 대응 </li>
            </ul>
          </div>
          <div className="agree_wrap">
            <label>
              <input type="checkbox" />
              <p>안내사항을 모두 확인하였으며, 동의합니다.</p>
            </label>
          </div>
          <div className="button_wrap">
            <button className="cancel" type="button">취소</button>
            <button className="withdrawal" type="button">탈퇴하기</button>
          </div>
        </div>
      </div>

      <div className="popup_layer withdrawal">
        <div className="img_area">
          <img src="/static/images/sample_img01.jpg" alt="" />
        </div>
        <p>탈퇴가 완료되었습니다</p>
        <button type="button">확인</button>
      </div>

      <div className="bg_black"></div>

    </WithdrawalWrap>
  );
};

export default Resign;
