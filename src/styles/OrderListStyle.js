import styled from "@emotion/styled";

export const OrderDetailWrap = styled.div`
  .layout_max {
    padding-left: 0px;
    padding-right: 0px;
  }

  .mypage_order_detail {}

  .mypage_order_detail .date_select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    padding: 5px 15px;
  }

  .mypage_order_detail .date_select .date_state {}

  .mypage_order_detail .date_select .btn {}

  .mypage_order_detail .date_select .btn button {
    color: orange;
    border: 1px solid orange;
    padding: 5px;
    border-radius: 800px;
  }

  .mypage_order_detail .list_wrap {
    margin-top: 20px;
  }

  .mypage_order_detail .list_wrap ul {}

  .mypage_order_detail .list_wrap ul li {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid #000;
  }

  .mypage_order_detail .list_wrap ul li .left_area {
    width: 75px;
    height: 75px;
    min-width: 75px;
  }

  .mypage_order_detail .list_wrap ul li .left_area .img_wrap {
    border-radius: 15px;
    overflow: hidden;
  }

  .mypage_order_detail .list_wrap ul li .left_area .img_wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mypage_order_detail .list_wrap ul li .right_area {
    width: calc(100% - 75px);
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }

  .mypage_order_detail .list_wrap ul li .right_area .name {}

  .mypage_order_detail .list_wrap ul li .right_area .info {
    display: flex;
    gap: 15px;
  }

  .mypage_order_detail .list_wrap ul li .right_area .info .box02 {
    font-weight: 700;
  }

  .mypage_order_detail .list_wrap ul li .right_area .state {}
`;
