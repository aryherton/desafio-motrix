import styled from 'styled-components'

export const SortPriorityWrapper = styled.div`
  @media screen {
    @media ( min-width: 50px ) and ( max-width: 480px ) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      margin-top: 15px;
      font-size: 10px;
      width: 150px;
      height: 60px;

      input {
        margin-right: 10px;
      }
    }

    @media ( min-width: 480px ) and ( max-width: 768px ) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      margin-top: 15px;
      font-size: 10px;
      width: 150px;
      height: 60px;

      input {
        margin-right: 10px;
      }
    }

    @media ( min-width: 769px ) and ( max-width: 1279px ) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      margin-top: 15px;
      font-size: 10px;
      width: 150px;
      height: 60px;

      input {
        margin-right: 10px;
      }
    }

    @media (min-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      margin-top: 15px;
      font-size: 10px;
      width: 150px;
      height: 60px;

      input {
        margin-right: 10px;
      }
    }
  }
`
