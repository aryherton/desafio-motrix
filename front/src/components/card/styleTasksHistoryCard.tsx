import styled from 'styled-components'

export const TasksHistoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  #pHistory {
    background-color: #21bc81;
    width: 230px;
    height: 30px;
    padding-top: 5px;
    border-radius: 5px 5px 0 0;
    text-align: center;
  }

  #historyCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    /* height: 350px; */
    background-color: #e3ece8;
    border: 2px solid #21bc81;
    border-radius: 10px;
  }

  #notHistory {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
    height: 80%;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    background-color: #0e5b3d;
    margin: auto;
  }
`
