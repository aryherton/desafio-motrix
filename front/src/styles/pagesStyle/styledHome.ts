import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    #buttonDelete {
      width: 85%;
      height: 40px;
      display: flex;
      justify-content: end;

      button {
        width: 90px;
        height: 40px;
        background: none;
        background-color: #eddede;
        border-radius: 5px;

        font-size: 18px;
        font-weight: 600;
        color: red;
        cursor: pointer;
      }

      button:hover {
        width: 100px;
        font-size: 22px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      }

      button:active {
        width: 95px;
        font-size: 20px;
      }
    }
  }
`
