import styled from 'styled-components'

export const StyledDetailsTask = styled.div`
@media screen {
  @media (
    min-width: 50px
    ) and (max-width: 480px) {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #DDEBDF;

      #link_task_list {
        width: 200px;
        height: 60px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 8px 0px #000;
        margin-top: 10px;
        margin-bottom: 15px;
        background-color: #8C25B1;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }

      #details_task {
        width: 90%;
        height: 100%;
        display: flex;
        box-shadow: 1px 1px 5px 0px #000;
        border-radius: 5px;
        background-color: #4BD091;

        #menu_info_left {
          width: 20%;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          border-right: 2px solid #000;

          #pStatus {
            width: 100%;
            height: 15px;
            background-color: #f4ea24;
            border-radius: 5px;
            box-shadow: 1px 1px 5px 0px #000;
          }

          #pPriority {
            width: 100%;
            height: 15px;
            background-color: #f4ea24;
            border-radius: 5px;
            box-shadow: 1px 1px 5px 0px #000;
          }

          #pDate {
            width: 100%;
            height: 15px;
            background-color: #f4ea24;
            border-radius: 5px;
            box-shadow: 1px 1px 5px 0px #000;
          }
        }

        #center_title_txt {
          width: 75%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;

          #title {
            color: blue;
            font-weight: bold;
          }

          #txt {
            width: 100%;
            margin-top: 15px;
            margin-left: 25px;
            color: blue;
          }
        }
      }
    }

    @media (
      min-width: 481px
      ) and (max-width: 768px) {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #DDEBDF;

        #link_task_list {
          width: 200px;
          height: 60px;
          cursor: pointer;
          border-radius: 10px;
          border: none;
          box-shadow: 1px 1px 8px 0px #000;
          margin-top: 10px;
          margin-bottom: 15px;
          background-color: #8C25B1;
          color: #fff;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }

        #details_task {
          width: 90%;
          height: 100%;
          display: flex;
          box-shadow: 1px 1px 5px 0px #000;
          border-radius: 5px;
          background-color: #4BD091;

          #menu_info_left {
            width: 20%;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            border-right: 2px solid #000;

            #pStatus {
              width: 100%;
              height: 15px;
              background-color: #f4ea24;
              border-radius: 5px;
              box-shadow: 1px 1px 5px 0px #000;
            }

            #pPriority {
              width: 100%;
              height: 15px;
              background-color: #f4ea24;
              border-radius: 5px;
              box-shadow: 1px 1px 5px 0px #000;
            }

            #pDate {
              width: 100%;
              height: 15px;
              background-color: #f4ea24;
              border-radius: 5px;
              box-shadow: 1px 1px 5px 0px #000;
            }
          }

          #center_title_txt {
            width: 75%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;

            #title {
              color: blue;
              font-weight: bold;
            }

            #txt {
              width: 100%;
              margin-top: 15px;
              margin-left: 25px;
              color: blue;
            }
          }
        }
      }

      @media (
        min-width: 769px
        ) and (max-width: 1279px) {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #DDEBDF;

          #link_task_list {
            width: 200px;
            height: 60px;
            cursor: pointer;
            border-radius: 10px;
            border: none;
            box-shadow: 1px 1px 8px 0px #000;
            margin-top: 10px;
            margin-bottom: 15px;
            background-color: #8C25B1;
            color: #fff;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
          }

          #details_task {
            width: 90%;
            height: 100%;
            display: flex;
            box-shadow: 1px 1px 5px 0px #000;
            border-radius: 5px;
            background-color: #4BD091;

            #menu_info_left {
              width: 20%;
              height: 200px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              border-right: 2px solid #000;

              #pStatus {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }

              #pPriority {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }

              #pDate {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }
            }

            #center_title_txt {
              width: 75%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;

              #title {
                color: blue;
                font-weight: bold;
              }

              #txt {
                width: 100%;
                margin-top: 15px;
                margin-left: 25px;
                color: blue;
              }
            }
          }
        }

        @media (min-width: 1279px) {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #DDEBDF;

          #link_task_list {
            width: 200px;
            height: 60px;
            cursor: pointer;
            border-radius: 10px;
            border: none;
            box-shadow: 1px 1px 8px 0px #000;
            margin-top: 10px;
            margin-bottom: 15px;
            background-color: #8C25B1;
            color: #fff;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
          }

          #details_task {
            width: 90%;
            height: 100%;
            display: flex;
            box-shadow: 1px 1px 5px 0px #000;
            border-radius: 5px;
            background-color: #4BD091;

            #menu_info_left {
              width: 20%;
              height: 200px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              border-right: 2px solid #000;

              #pStatus {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }

              #pPriority {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }

              #pDate {
                width: 100%;
                height: 15px;
                background-color: #f4ea24;
                border-radius: 5px;
                box-shadow: 1px 1px 5px 0px #000;
              }
            }

            #center_title_txt {
              width: 75%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;

              #title {
                color: blue;
                font-weight: bold;
              }

              #txt {
                width: 100%;
                margin-top: 15px;
                margin-left: 25px;
                color: blue;
              }
            }
          }
        }
      }
      `
