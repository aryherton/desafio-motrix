import styled from 'styled-components'

export const CardHistoryWrapper = styled.div`
/* >>>>>>> @media min-width: 320px max-width: 480px <<<<<<< */
@media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 95%;
      height: 50%;

      margin: 10px 0;

      background-color: #b9d7c8;
      /* border-left: 10px solid #30ee39; */
      border-radius: 15px;

      .main_info {
        display: flex;
        align-items: center;

        color: #12318e;

        background-color: #dccfaa;
        border-radius: 9px 9px 3px 3px;

        width: 100%;
        height: 100px;

        .titleAndTxt {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          width: 70%;
          height: 100%;

          .titleTask {
            margin-left: 15px;
            font-size: 16px;
            font-weight: 600;

            margin-top: 2%;
          }

          .txtTask {
            width: 100%;
            height: 100%;

            margin: 2% 8%;
            color: #000000;

            p {
              width: 90%;
              height: 60%;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              word-wrap: break-word;
            }
          }
        }
      }

      .datas_info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #4d2103;

        width: 80%;
        height: 25%;

        .statusTask {
          width: 50%;
          height: 80%;

          text-align: center;
          color: #483b06;
          font-size: 12px;
        }

        .dateTask {
          width: 50%;
          height: 70%;

          color: #483b06;
          text-align: center;

          p {
            font-size: 10px;
          }
        }

        .historyTask {
          width: 20%;
          height: 100%;

          color: #4d2103;

          background: none;
          border: none;
          cursor: pointer;

          font-size: 12px;
        }
      }
    }

    @media (
      min-width: 481px
      ) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 95%;
        height: 50%;

        margin: 10px 0;

        background-color: #b9d7c8;
        /* border-left: 10px solid #30ee39; */
        border-radius: 15px;

        .main_info {
          display: flex;
          align-items: center;

          color: #12318e;

          background-color: #dccfaa;
          border-radius: 9px 9px 3px 3px;

          width: 100%;
          height: 100px;

          .titleAndTxt {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 70%;
            height: 100%;

            .titleTask {
              margin-left: 15px;
              font-size: 16px;
              font-weight: 600;

              margin-top: 2%;
            }

            .txtTask {
              width: 100%;
              height: 100%;

              margin: 2% 8%;
              color: #000000;

              p {
                width: 90%;
                height: 60%;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                word-wrap: break-word;
              }
            }
          }
        }

        .datas_info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          color: #4d2103;

          width: 80%;
          height: 25%;

          .statusTask {
            width: 50%;
            height: 80%;

            text-align: center;
            color: #483b06;
            font-size: 12px;
          }

          .dateTask {
            width: 50%;
            height: 70%;

            color: #483b06;
            text-align: center;

            p {
              font-size: 10px;
            }
          }

          .historyTask {
            width: 20%;
            height: 100%;

            color: #4d2103;

            background: none;
            border: none;
            cursor: pointer;

            font-size: 12px;
          }
        }
      }

      @media (
        min-width: 769px
        ) and (max-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 95%;
          height: 50%;

          margin: 10px 0;

          background-color: #b9d7c8;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;

            color: #12318e;

            background-color: #dccfaa;
            border-radius: 9px 9px 3px 3px;

            width: 100%;
            height: 110px;

            .titleAndTxt {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              width: 70%;
              height: 100%;

              .titleTask {
                margin-left: 15px;
                font-size: 16px;
                font-weight: 600;

                margin-top: 2%;
              }

              .txtTask {
                width: 100%;
                height: 100%;

                margin: 2% 8%;
                color: #000000;

                p {
                  width: 90%;
                  height: 60%;
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  word-wrap: break-word;
                }
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 80%;
            height: 25%;

            .statusTask {
              width: 50%;
              height: 80%;

              text-align: center;
              color: #483b06;
              font-size: 12px;
            }

            .dateTask {
              width: 50%;
              height: 70%;

              color: #483b06;
              text-align: center;

              p {
                font-size: 10px;
              }
            }

            .historyTask {
              width: 20%;
              height: 100%;

              color: #4d2103;

              background: none;
              border: none;
              cursor: pointer;

              font-size: 12px;
            }
          }
        }

        @media (min-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 95%;
          height: 50%;

          margin: 10px 0;

          background-color: #b9d7c8;
          /* border-left: 10px solid #30ee39; */
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;

            color: #12318e;

            background-color: #dccfaa;
            border-radius: 9px 9px 3px 3px;

            width: 100%;
            height: 130px;

            .titleAndTxt {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              width: 70%;
              height: 100%;

              .titleTask {
                margin-left: 15px;
                font-size: 16px;
                font-weight: 600;

                margin-top: 2%;
              }

              .txtTask {
                width: 100%;
                height: 100%;

                margin: 2% 8%;
                color: #000000;

                p {
                  width: 90%;
                  height: 60%;
                  font-size: 12px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  word-wrap: break-word;
                }
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 80%;
            height: 25%;

            .statusTask {
              width: 50%;
              height: 80%;

              text-align: center;
              color: #483b06;
              font-size: 12px;
            }

            .dateTask {
              width: 50%;
              height: 70%;

              color: #483b06;
              text-align: center;

              p {
                font-size: 10px;
              }
            }

            .historyTask {
              width: 20%;
              height: 100%;

              color: #4d2103;

              background: none;
              border: none;
              cursor: pointer;

              font-size: 12px;
            }
          }
        }
      }
      `
