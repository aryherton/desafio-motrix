import styled from 'styled-components'

export const MenuWrapper = styled.section`
@media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 140px;

      .sortTodoList {
        width: 100%;
        height: 100px;

        margin-top: 10px;
        margin-bottom: 10px;

        background-color: #c9f3c9;
        box-shadow: 1px 1px 5px 1px #e0cd7c;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .sort {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
      }
    }

    @media (
    min-width: 480px
    ) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 140px;

      .sortTodoList {
        width: 100%;
        height: 100px;

        margin-top: 10px;
        margin-bottom: 10px;

        background-color: #c9f3c9;
        box-shadow: 1px 1px 5px 1px #e0cd7c;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .sort {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      }
    }

    @media (
    min-width: 769px
    ) and (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 140px;

      .sortTodoList {
        width: 100%;
        height: 100px;

        margin-top: 10px;
        margin-bottom: 10px;

        background-color: #c9f3c9;
        box-shadow: 1px 1px 5px 1px #e0cd7c;

        .sort {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
      }
    }

    @media (min-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 160px;

      .sortTodoList {
        width: 100%;
        height: 160px;

        margin-top: 10px;
        margin-bottom: 10px;

        background-color: #c9f3c9;
        box-shadow: 1px 1px 5px 1px #e0cd7c;

        .sort {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
        }
      }
    }
  }
  `
