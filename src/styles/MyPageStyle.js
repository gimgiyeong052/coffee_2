import styled from "@emotion/styled";

export const MyPageWrap = styled.div`
width: 767px;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px;
.mypage_index{
    display: flex;
    flex-direction: column;
    padding-top: 50PX;
    .member_wrap{
    text-align: center;
}
.menu_wrap{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* .box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(33.3333% - 20px);
    border: 1px solid #000;
    border-radius: 15px;
    aspect-ratio: 1 / 1; 
    } */
    > a { 
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(33.3333% - 20px);
    border: 1px solid #000;
    border-radius: 15px;
    aspect-ratio: 1 / 1; 
    text-decoration: none;
    & span {
        color: red;
        font-size: 30px;
    }
}
}
}
`;

// const MyPageWra = styled.div``;


// export {MyPageWra,MyPageInner, MypageContents};