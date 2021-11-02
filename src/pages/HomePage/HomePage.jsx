import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderDiv from "../../components/Header/Header";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import FloatingDiv from "../../components/FloatingDiv/FloatingDiv";
import Roomcards from "../../components/Roomcards/Roomcards";
import "./homepage.styles.css";

const HomePage = () => {
  let history = useHistory();
  const positionValue = [0, 16]; // postion left and top, in vw and vh respectively
  const paddingValue = [10, 5, 10, 5]; // top, right, bottom, left in pixels
  const borderRadiusValue = [0, 20, 20, 0]; // left top, right top, right bottom, left bottom in pixels
  return (
    // <div className='main-container'>
    //   <FloatingDiv
    //     position={positionValue}
    //     padding={paddingValue}
    //     borderRadius={borderRadiusValue}
    //     bgColor='orange'
    //     textDivColor='red'
    //     textColor='black'
    //     color='white'
    //     title='It seems you are not signed in.'
    //   >
    //     <div className='d-flex justify-content-around w-100'>
    //       <Button
    //         variant='warning'
    //         className='rounded-pill border-1 border-dark'
    //         onClick={() =>
    //           history.push({
    //             pathname: "/login-signup",
    //             state: {
    //               signUp: false,
    //             },
    //           })
    //         }
    //       >
    //         Log In
    //       </Button>
    //       <Button
    //         variant='info'
    //         className='rounded-pill border-1 border-dark'
    //         onClick={() =>
    //           history.push({
    //             pathname: "/login-signup",
    //             state: {
    //               signUp: true,
    //             },
    //           })
    //         }
    //       >
    //         Sign Up
    //       </Button>
    //     </div>
    //   </FloatingDiv>
    //
    //   <FooterComponent />
    // </div>
    <>
      <HeaderDiv />
      {/* <FloatingDiv
        position={positionValue}
        padding={paddingValue}
        borderRadius={borderRadiusValue}
        bgColor="orange"
        textDivColor="red"
        textColor="black"
        color="white"
        title="It seems you are not signed in."
      >
        <div className="d-flex justify-content-around w-100">
          <Button
            variant="warning"
            className="rounded-pill border-1 border-dark"
            onClick={() =>
              history.push({
                pathname: "/login-signup",
                state: {
                  signUp: false,
                },
              })
            }
          >
            Log In
          </Button>
          <Button
            variant="info"
            className="rounded-pill border-1 border-dark"
            onClick={() =>
              history.push({
                pathname: "/login-signup",
                state: {
                  signUp: true,
                },
              })
            }
          >
            Sign Up
          </Button>
        </div>
      </FloatingDiv> */}
      <Roomcards />
      <FooterComponent />
    </>
  );
};

export default HomePage;
