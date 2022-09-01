import styled from 'styled-components'

export const LoginWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 70px;

  background-color: #ffffff;

  box-shadow: 1px 1px 5px 1px #323131;

  #header_info_user {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: center;
    }
  }

  #header_img_log {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;

    margin-right: 10%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  #header_img_exit {
    width: 60px;
    height: 60px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`
