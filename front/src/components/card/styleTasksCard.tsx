import styled from 'styled-components'

export const TasksWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
export const CardWrapper = styled.div`
/* >>>>>>> @media min-width: 320px max-width: 480px <<<<<<< */
@media screen {
  @media (
    min-width: 320px
    ) and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 95%;
      height: 25%;

      margin: 10px 0;

      border: 2px solid #30ee39;
      border-radius: 15px;

      .main_info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 75%;

        .img_status {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 10%;
          height: 100%;
        }

        .titleAndTxt {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          width: 70%;
          height: 100%;

          .titleTask {
            text-align: center;
            font-size: 16px;
            font-weight: 600;

            margin-top: 4%;
          }

          .txtTask {
            width: 100%;
            height: 100%;

            margin: 2% 2%;

            p {
              font-size: 12px;
            }
          }
        }

        .menuTask {
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          width: 20%;
          height: 80%;

          .delete {
            display: flex;
            align-items: center;
            justify-content: space-around;

            width: 80%;
            height: 0%;

            font-size: 13px;
          }
        }
      }

      .datas_info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 25%;

        .statusTask {
          width: 25%;
          height: 70%;

          .selectStatus {
            width: 100%;
            height: 100%;

            font-size: 10px;
          }
        }

        .priorityTask {
          width: 25%;
          height: 70%;

          .txt_priority {
            font-size: 12px;
          }

          .name_priority {
            font-size: 12px;
            font-weight: 600;

            text-align: center;
          }
        }

        .dateTask {
          width: 45%;
          height: 70%;

          text-align: center;

          p {
            font-size: 10px;
          }
        }

        .historyTask {
          width: 25%;
          height: 100%;

          font-size: 10px;
        }
      }
    }
  }

  /* >>>>>>> @media min-width: 481px max-width: 768px <<<<<<< */
  @media screen {
    @media (
      min-width: 481px
      ) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 90%;
        height: 25%;

        margin: 10px 0;

        border: 2px solid #30ee39;
        border-radius: 15px;

        .main_info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          height: 75%;

          .img_status {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 10%;
            height: 100%;
          }

          .titleAndTxt {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 70%;
            height: 100%;

            .titleTask {
              text-align: center;
              font-size: 16px;
              font-weight: 600;

              margin-top: 4%;
            }

            .txtTask {
              width: 100%;
              height: 100%;

              margin: 2% 2%;

              p {
                font-size: 12px;
              }
            }
          }

          .menuTask {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            width: 20%;
            height: 80%;

            .delete {
              display: flex;
              align-items: center;
              justify-content: space-around;

              width: 80%;
              height: 0%;

              font-size: 13px;
            }
          }
        }

        .datas_info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          height: 25%;

          .statusTask {
            width: 25%;
            height: 70%;

            .selectStatus {
              width: 100%;
              height: 100%;

              font-size: 10px;
            }
          }

          .priorityTask {
            width: 25%;
            height: 70%;

            .txt_priority {
              font-size: 12px;
            }

            .name_priority {
              font-size: 12px;
              font-weight: 600;

              text-align: center;
            }
          }

          .dateTask {
            width: 45%;
            height: 70%;

            text-align: center;

            p {
              font-size: 10px;
            }
          }

          .historyTask {
            width: 25%;
            height: 100%;

            font-size: 10px;
          }
        }
      }
    }

    /* >>>>>>> @media min-width: 769px max-width: 1279px <<<<<<< */
    @media screen {
      @media (
        min-width: 769px
        ) and (max-width: 1024px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 90%;
          height: 25%;

          margin: 10px 0;

          background-color: #d4ecd8;
          border-left: 5px solid #30ee39;
          border-radius: 20px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            background-color: #edf4ee;
            border-radius: 5px 5px 0px 0px;
            box-shadow: 1px 2px 0px 0px #57f9e1;

            width: 100%;
            height: 75%;

            .img_status {
              display: flex;
              align-items: center;
              justify-content: center;

              width: 10%;
              height: 100%;
            }

            .titleAndTxt {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              width: 70%;
              height: 100%;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 4%;
              }

              .txtTask {
                width: 100%;
                height: 100%;

                margin: 2% 2%;

                p {
                  font-size: 12px;
                }
              }
            }

            .menuTask {
              display: flex;
              flex-direction: column;
              justify-content: space-around;

              width: 20%;
              height: 80%;

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 0%;

                font-size: 13px;
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
              width: 20%;
              height: 70%;

              .selectStatus {
                width: 100%;
                height: 90%;

                color: #04244a;
                font-weight: 500;
                text-align: center;

                background-color: #FBB282;
                border: none;
                font-size: 12px;
                border-radius: 10px;

                input {
                  line-height: 50px;
                }
              }
            }

            .priorityTask {
              width: 25%;
              height: 70%;

              text-align: center;

              .txt_priority {
                font-size: 12px;
              }

              .name_priority {
                font-size: 12px;
                font-weight: 600;

                text-align: center;
              }
            }

            .dateTask {
              width: 25%;
              height: 70%;

              text-align: center;

              p {
                font-size: 12px;
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

      /* >>>>>>> @media min-width: 1279px <<<<<<< */
      @media screen {
        @media (min-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 90%;
          height: 25%;

          margin: 10px 0;

          border: 2px solid #30ee39;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            height: 75%;

            .img_status {
              display: flex;
              align-items: center;
              justify-content: center;

              width: 10%;
              height: 100%;
            }

            .titleAndTxt {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              width: 70%;
              height: 100%;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 4%;
              }

              .txtTask {
                width: 100%;
                height: 100%;

                margin: 2% 2%;

                p {
                  font-size: 12px;
                }
              }
            }

            .menuTask {
              display: flex;
              flex-direction: column;
              justify-content: space-around;

              width: 20%;
              height: 80%;

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 0%;

                font-size: 13px;
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            height: 25%;

            .statusTask {
              width: 25%;
              height: 70%;

              .selectStatus {
                width: 100%;
                height: 100%;

                font-size: 10px;
              }
            }

            .priorityTask {
              width: 25%;
              height: 70%;

              .txt_priority {
                font-size: 12px;
              }

              .name_priority {
                font-size: 12px;
                font-weight: 600;

                text-align: center;
              }
            }

            .dateTask {
              width: 45%;
              height: 70%;

              text-align: center;

              p {
                font-size: 10px;
              }
            }

            .historyTask {
              width: 25%;
              height: 100%;

              font-size: 10px;
            }
          }
        }
      }
      `
