import styled from 'styled-components'

export const FormLoginWrapper = styled.div`
  .form-control {
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #4CCF91;
    ::placeholder {
      color: #fff;
      font-size: 18px;
    }
  }

  #buttonsFormLogin {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin-top: 10px;

    button {
      width: 90px;
      height: 40px;
      border: none;
      background-color: #8726AD;
      box-shadow: 1px 1px 5px #000;
      border-radius: 5px;
      color: #fff;
    }

    button:hover {
      box-shadow: 2px 2px 5px #000;
      font-size: 16px;
    }

    button: active {
      box-shadow: 1px 1px 5px #000;
      font-size: 14px;
      width: 85px;
      height: 35px;
    }
  }
`
