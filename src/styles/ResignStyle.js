import styled from "@emotion/styled";

export const WithdrawalWrap = styled.div`
  .mypage_withdrawal {}

  .mypage_withdrawal .alert_text {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
  }

  .mypage_withdrawal .member_info {
    display: flex;
    gap: 0 10px;
    margin-top: 15px;
  }

  .mypage_withdrawal .member_info dl {
    display: flex;
    align-items: center;
  }

  .mypage_withdrawal .member_info dl dt {
    padding-right: 3px;
  }

  .mypage_withdrawal .dash_borard {
    background-color: #d9d9d9;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    min-height: 150px;
    padding: 15px;
  }

  .mypage_withdrawal .dash_borard .list_st {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mypage_withdrawal .dash_borard .list_st .left_zone {}

  .mypage_withdrawal .dash_borard .list_st .right_zone {
    display: flex;
    align-items: center;
  }

  .mypage_withdrawal .dash_borard .list_st .right_zone .num {
    color: red;
  }

  .mypage_withdrawal .guide_text {
    margin-top: 25px;
  }

  .mypage_withdrawal .guide_text ul {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .mypage_withdrawal .guide_text ul li {
    position: relative;
    padding-left: 13px;
  }

  .mypage_withdrawal .guide_text ul li::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0px;
    width: 4px;
    height: 4px;
    background-color: royalblue;
  }

  .mypage_withdrawal .agree_wrap {
    margin-top: 30px;
  }

  .mypage_withdrawal .agree_wrap label {
    display: flex;
    align-items: center;
    gap: 0 5px;
  }

  .mypage_withdrawal .agree_wrap label input {}

  .mypage_withdrawal .agree_wrap label p {
    font-weight: 700;
  }

  .mypage_withdrawal .button_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 15px;
  }

  .mypage_withdrawal .button_wrap button {
    flex: 1;
    padding: 15px 13px;
    color: #fff;
    border-radius: 10px;
  }

  .mypage_withdrawal .button_wrap button.cancel {
    background-color: #fff;
    border: 1px solid orange;
    color: orange;
  }

  .mypage_withdrawal .button_wrap button.withdrawal {
    background-color: brown;
    border: 1px solid brown;
  }
`;
