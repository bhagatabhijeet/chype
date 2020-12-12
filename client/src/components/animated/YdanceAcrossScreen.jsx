import y from "../../assets/images/y-trans.png";
import { useSpring,animated } from "react-spring";

export default function YdanceAcrossScreen() {
  // const values = useSpring({from:{ opacity: 0 },to:{opacity:1},config:{duration:3000}});
  // const values = useSpring({from:{ position:'absolute',left: '-100%' },to:{left:'50%'},config:{duration:2000}});
  const values = useSpring({from:{transform: 'rotate(90deg)'},to:{left:'50%'},config:{duration:2000}});
  return (
    
        <animated.div style={values}>
          <img src={y} alt="y" />
        </animated.div> //<img src={y} alt="y" style={val}/>
      )
    
  
}
