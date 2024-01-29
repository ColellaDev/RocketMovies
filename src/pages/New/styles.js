import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;

  padding: 40px 123px;

  display: flex;
  flex-direction: column;

  > h1 {
    margin-top: 30px;
  }

  > h2 {
    font-size: 20px;
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div:nth-child(6) {
    display: flex;
    gap: 24px;
   
    padding: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 88px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    
  }

  overflow-y: auto;
`;
export const CustomTitle = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const CustomButton = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;

  :nth-child(1) {
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;
