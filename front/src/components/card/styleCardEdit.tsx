import styled from 'styled-components'

export const CardEditWrapper = styled.div`
/* >>>>>>> @media min-width: 320px max-width: 480px <<<<<<< */
@media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
       display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .menu_edit {
            display: flex;
            align-items: center;
            justify-content: space-around;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

            width: 100%;
            height: 15%;

            .inputs_edit {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 75%;
              height: 100%;
              border-right: 1px solid #21d8de;
              border-radius: 0px 7px 7px 0px;

              .title_edit {
                margin-bottom: 15px;
              }

              .datas_info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                color: #4d2103;

                width: 55%;
                height: 15%;

                .statusTask {
                  width: 130px;
                  height: 30px;

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
              }
            }

            .menuTask {
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                button {
                  font-size: 16px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 2px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                button:hover {
                  font-size: 14px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 3px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                .delete {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  margin-top: 15px;
                  input {
                    margin-right: 10px;
                    cursor: pointer;
                  }
                  img {
                    cursor: pointer;
                  }
                }
              }
          }

          .txtTask {
            width: 90%;
            height: 30%;
          }
    }

    @media (
      min-width: 481px
      ) and (max-width: 768px) {
         display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .menu_edit {
            display: flex;
            align-items: center;
            justify-content: space-around;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

            width: 100%;
            height: 15%;

            .inputs_edit {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 75%;
              height: 100%;
              border-right: 1px solid #21d8de;
              border-radius: 0px 7px 7px 0px;

              .title_edit {
                margin-bottom: 15px;
              }

              .datas_info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                color: #4d2103;

                width: 55%;
                height: 15%;

                .statusTask {
                  width: 130px;
                  height: 30px;

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
              }
            }

            .menuTask {
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                button {
                  font-size: 16px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 2px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                button:hover {
                  font-size: 14px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 3px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                .delete {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  margin-top: 15px;
                  input {
                    margin-right: 10px;
                    cursor: pointer;
                  }
                  img {
                    cursor: pointer;
                  }
                }
              }
          }

          .txtTask {
            width: 90%;
            height: 30%;
          }
      }

      @media (
        min-width: 769px
        ) and (max-width: 1279px) {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .menu_edit {
            display: flex;
            align-items: center;
            justify-content: space-around;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

            width: 100%;
            height: 15%;

            .inputs_edit {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 75%;
              height: 100%;
              border-right: 1px solid #21d8de;
              border-radius: 0px 7px 7px 0px;

              .title_edit {
                margin-bottom: 15px;
              }

              .datas_info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                color: #4d2103;

                width: 55%;
                height: 15%;

                .statusTask {
                  width: 130px;
                  height: 30px;

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
              }
            }

            .menuTask {
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                button {
                  font-size: 16px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 2px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                button:hover {
                  font-size: 14px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 3px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                .delete {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  margin-top: 15px;
                  input {
                    margin-right: 10px;
                    cursor: pointer;
                  }
                  img {
                    cursor: pointer;
                  }
                }
              }
          }

          .txtTask {
            width: 90%;
            height: 30%;
          }
        }
        @media (min-width: 1279px) {
           display: flex;
          flex-direction: column;
          align-items: center;

          width: 90%;

          margin: 10px 0;

          background-color: #b9d7be;
          border-left: 10px solid #30ee39;
          border-radius: 15px;

          .menu_edit {
            display: flex;
            align-items: center;
            justify-content: space-around;

            background-color: #ddebdf;
            border-radius: 5px 15px 0px 0px;
            box-shadow: 1px 2px 0px 0px #a0f3e7;

            width: 100%;
            height: 15%;

            .inputs_edit {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 75%;
              height: 100%;
              border-right: 1px solid #21d8de;
              border-radius: 0px 7px 7px 0px;

              .title_edit {
                margin-bottom: 15px;
              }

              .datas_info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                color: #4d2103;

                width: 55%;
                height: 15%;

                .statusTask {
                  width: 130px;
                  height: 30px;

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
              }
            }

            .menuTask {
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                button {
                  font-size: 16px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 2px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                button:hover {
                  font-size: 14px;
                  width: 40%;
                  height: 10%;
                  background: none;
                  border: none;
                  box-shadow: 1px 3px 5px 0px #032721;
                  border-radius: 3px;
                  cursor: pointer;
                }

                .delete {
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  margin-top: 15px;
                  input {
                    margin-right: 10px;
                    cursor: pointer;
                  }
                  img {
                    cursor: pointer;
                  }
                }
              }
          }

          .txtTask {
            width: 90%;
            height: 30%;
          }
        }
      }
      `
