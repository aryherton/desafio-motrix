import styled from 'styled-components'

export const SortStatusWrapper = styled.div`
  @media screen {
    @media ( min-width: 50px ) and ( max-width: 480px ) {
      width: 100%;
      display: flex;
      justify-content: start;
      margin-left: 25px;

      font-size: 12px;

      input {
        margin-right: 10px;
      }
    }

    @media ( min-width: 480px) and ( max-width: 768px ) {
      width: 90%;
      display: flex;
      justify-content: start;
      margin-left: 12px;

      font-size: 12px;

      input {
        margin-right: 10px;
      }
    }

    @media ( min-width: 769px) and ( max-width: 1279px ) {
      width: 90%;
      display: flex;
      justify-content: start;
      margin-left: 12px;

      font-size: 12px;

      input {
        margin-right: 10px;
      }
    }

    @media (min-width: 1279px) {
      width: 75%;
      display: flex;
      justify-content: start;
      margin-left: 12px;

      font-size: 12px;

      input {
        margin-right: 10px;
      }
    }
  }
`
