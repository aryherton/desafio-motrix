import styled from 'styled-components'

const checkHistory = localStorage.getItem('history')
console.log(checkHistory);

export const TasksWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
export const CardWrapper = styled.div`
/* >>>>>>> @media min-width: 320px max-width: 480px <<<<<<< */
@media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
      display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;
          height: 10%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-around;

            color: #12318e;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

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

              width: 65%;
              height: 100%;

              border-right: 2px solid #48ed8d;
              border-radius: 10px;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 4%;
              }

              .btn_txt_details {
                background: none;
                cursor: pointer;
                border: none;


                .txtTask {
                  width: 100%;
                  height: 100%;

                  margin: 2% 2%;

                  p {
                    width: 90%;
                    height: 15%;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                  }
                }
              }
            }

            .menuTask {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: space-around;

              width: 25%;
              height: 80%;

              button {
                width: 100%;
                height: 30%;

                font-size: 20px;

                background: none;
                border: none;

                color: #070a08;
                cursor: pointer;
              }

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 30%;
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 100%;
            height: 15%;

            .statusTask {
              width: 25%;
              height: 100%;

              .selectStatus {
              width: 100%;
              height: 90%;
              align-self: flex-start;

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
              width: 15%;
              height: 70%;

              text-align: center;

              .txt_priority {
                font-size: 10px;
              }

              .name_priority {
                font-size: 10px;
                font-weight: 600;

                text-align: center;
              }
            }

            .dateTask {
              width: 35%;
              height: 70%;

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

          width: 90%;
          height: 40%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-around;

            color: #12318e;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

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

              width: 70%;
              height: 100%;

              border-right: 2px solid #48ed8d;
              border-radius: 10px;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 2%;
              }

              .btn_txt_details {
                background: none;
                cursor: pointer;
                border: none;


                .txtTask {
                  width: 100%;
                  height: 100%;

                  margin: 2% 2%;

                  p {
                    width: 90%;
                    height: 30%;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                  }
                }
              }
            }

            .menuTask {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: space-around;

              width: 10%;
              height: 80%;

              button {
                width: 100%;
                height: 30%;

                font-size: 20px;

                background: none;
                border: none;

                color: #070a08;
                cursor: pointer;
              }

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 30%;
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 90%;
            height: 15%;

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
              width: 35%;
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

      @media (
        min-width: 769px
        ) and (max-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;
          height: 80%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-around;

            color: #12318e;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

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

              width: 70%;
              height: 100%;

              border-right: 2px solid #48ed8d;
              border-radius: 10px;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 2%;
              }

              .btn_txt_details {
                background: none;
                cursor: pointer;
                border: none;


                .txtTask {
                  width: 100%;
                  height: 100%;

                  margin: 2% 2%;

                  p {
                    width: 90%;
                    height: 50%;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                  }
                }
              }
            }

            .menuTask {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: space-around;

              width: 10%;
              height: 80%;

              button {
                width: 100%;
                height: 30%;

                font-size: 20px;

                background: none;
                border: none;

                color: #070a08;
                cursor: pointer;
              }

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 30%;
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 80%;
            height: 15%;

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
        @media (min-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;
          height: 80%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .main_info {
            display: flex;
            align-items: center;
            justify-content: space-around;

            color: #12318e;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

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

              width: 70%;
              height: 100%;

              border-right: 2px solid #48ed8d;
              border-radius: 10px;

              .titleTask {
                text-align: center;
                font-size: 16px;
                font-weight: 600;

                margin-top: 2%;
              }

              .btn_txt_details {
                background: none;
                cursor: pointer;
                border: none;


                .txtTask {
                  width: 100%;
                  height: 100%;

                  margin: 2% 2%;

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

            .menuTask {
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: space-around;

              width: 10%;
              height: 80%;

              button {
                width: 100%;
                height: 30%;

                font-size: 20px;

                background: none;
                border: none;

                color: #070a08;
                cursor: pointer;
              }

              .delete {
                display: flex;
                align-items: center;
                justify-content: space-around;

                width: 80%;
                height: 30%;
              }
            }
          }

          .datas_info {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #4d2103;

            width: 80%;
            height: 15%;

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
      `
