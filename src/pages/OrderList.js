import React from 'react';
import { OrderDetailWrap } from "../styles/OrderListStyle";

const OrderList = () => {
  return (
    <OrderDetailWrap>
      <div className="order-list">
        <div className="layout_max">
          <div className="mypage_order_detail">
            <div className="date_select">
              <div className="date_state">2024.03.23 ~ 2024.04.01</div>
              <div className="btn">
                <button type="button">기간설정</button>
              </div>
            </div>
            <div className="list_wrap">
              <ul>
                <li>
                  <div className="left_area">
                    <div className="img_wrap">
                      <img src="/static/images/sample_img01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="right_area">
                    <div className="name">카푸치노 외</div>
                    <div className="info">
                      <div className="box box01">2024.03.31 18:18</div>
                      <div className="box box02">대구 중구 9,000원</div>
                    </div>
                    <div className="state">수령완료</div>
                  </div>
                </li>
                <li>
                  <div className="left_area">
                    <div className="img_wrap">
                      <img src="/static/images/sample_img02.jpg" alt="" />
                    </div>
                  </div>
                  <div className="right_area">
                    <div className="name">아메리카노</div>
                    <div className="info">
                      <div className="box box01">2024.03.31 15:30</div>
                      <div className="box box02">서울 강남 5,000원</div>
                    </div>
                    <div className="state">배송중</div>
                  </div>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderList;
