import React, {useEffect} from 'react'
// import { Container, Spinner } from 'reactstrap'
// import { activateAuthLayout } from '../Store/actions'
import { useDispatch } from 'react-redux';


// function LoadingScreen() {
//     return (
//         <Container fluid>
//             <Spinner style={{left: "50%", position: "absolute"}} color="primary"/>
//         </Container>
//     )
// }

const LoadingScreen = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(activateAuthLayout());
    // }, []);

    const containerRef = React.useRef();
    return (
      <h1>Loading ..</h1>
      // <p ref={containerRef} className="fallback-fadein" style={{ left: "50%", top: "50%", position: "absolute"}}>
      //   <i className="fa fa-spinner spin" style={{ fontSize: "64px", color: "#626ed4" }} />
      // </p>
    );
  };

export default LoadingScreen
