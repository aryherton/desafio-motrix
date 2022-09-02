import styled from 'styled-components'

export const SearchWrapper = styled.div`
  @media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      width: 60%;
      height: 30px;
      margin-top: 10px;

      .inputSearch {
        width: 75%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: yellow;
      }
    }
  }

  @media screen {
  @media (
    min-width: 481px
    ) and (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      width: 50%;
      height: 30px;
      margin-top: 10px;

      .inputSearch {
        width: 75%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: yellow;
      }
    }
  }

  @media screen {
  @media (
    min-width: 769px
    ) and (max-width: 1279px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      width: 40%;
      height: 30px;
      margin-top: 10px;

      .inputSearch {
        width: 75%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: yellow;
      }
    }
  }

  @media screen {
  @media (min-width: 1279px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      width: 30%;
      height: 30px;
      margin-top: 10px;

      .inputSearch {
        width: 75%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: yellow;
      }
    }
  }
`
