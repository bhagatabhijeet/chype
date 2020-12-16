import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomNavbar from '../components/Navbar';
import LoggedInUserCard from '../components/LoggedInUserCard';
import { Container } from '@material-ui/core';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {ReactTransliterate} from '../components/reactTranslit'
import { useParams,Redirect } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import {languages} from "../assets/languages"
import {useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import ChatTopNav from "../components/ChatTopNav"
import UsersBox from '../components/UsersBox';



const socket = io();
socket.on("connect", function () {
  // const sessionID = socketConnection.socket.sessionid;
  console.log(socket.id);
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // textAlign:"center"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainPage() {
  const classes = useStyles();
  // const params = useParams();
  let history = useHistory();
  const userReduxState = useSelector(state=>state.user)

  const [userData, setUserData] = useState({user: 'abhi', message: ''});
  const [friendData, setFriendData] = useState({friend: 'son'});
  const [roomData, setRoomData] = useState({room: ""});
  const [chat, setChat] = useState([])
  const [lang, setLang] = useState([]);
  const [text, setText] = useState("");
  //can use props.useParams to get params form url, or props.history
  // console.log("PARAMS",params);
  useEffect(()=>{
    // console.log("PARAMS",params);
    if(!userReduxState.loggedIn)
    {
      console.log("going to signin");
      history.push("/signin");
    }


  },[]);

  const onTextChange = e => {
    setUserData({...userData, [e.target.name]: e.target.value})
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const {user, message} = userData;
    const {friend} = friendData;
    const room = [user, friend].sort().join('')
    console.log(room)
    console.log('inside of on submit', chat)
    console.log(friend)
    setUserData({user, message: ''});
  }

  const renderChat = () =>{
    return chat.map(({user, message}, index) => (
        <div key={index}>
          <h3>
            {user}: <span>{message}</span>
          </h3>
        </div>
    ))
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
      <>
        {/* <div className={classes.root}> */}
        <ChatTopNav/>
        <Grid container spacing={0}>
          <Grid item  container  xs={false} sm={3} md={2}>
            <Paper>
              {/* <LoggedInUserCard /> */}
              <UsersBox style={{width:100}}/>
            </Paper>
          </Grid>
          <Grid  item container xs={8}  sm={8}  md={5}>
            {/* <Paper className={classes.paper}>xs=3</Paper> */}
            {/* <Container> */}
            <div className="card">
              <form onSubmit={onMessageSubmit}>
                <h1> Messenger </h1>
                <div className="name-field">
                  <TextField
                      name = 'user'
                      onChange = {e => {
                        onTextChange(e);
                        console.log(userData);
                      }}
                      value = {userData.user}
                      label = "Name"
                  />
                </div>
                <div className="name-field">
                  <TextField
                      name = 'friend'
                      onChange = {e => setFriendData({...friendData, friend: e.target.value})}
                      value = {friendData.friend}
                      label = "Friend"
                  />
                </div>
                <div className="name-field">
                  <TextField
                      name = 'room'
                      // onChange = {e => onRoomChange(e)}
                      value = {roomData.room}
                      label = "Room"
                  />
                </div>
                <div >
                  <ReactTransliterate
                      margin = "dense"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      lang={lang}
                      placeholder="Start typing here..."
                  />

                  <FormControl >
                    <Select
                        displayEmpty
                        onChange={handleChange}
                        value={lang}
                        input={<Input />}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem disabled value="">
                        <em>Language</em>
                      </MenuItem>
                      {languages.map((language) => (
                          <MenuItem key={language.label} value={language.value}>
                            {language.label}
                          </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <button type={"submit"}>Send Message</button>
              </form>
            </div>



            <div className='render-chat'>
              <h1>Chat Log</h1>
              <div key={2000}>
                <h3>
                  Son: <span>first test message</span>
                </h3>
              </div>
              {renderChat()}
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nobis ullam aliquam a magni pariatur ad mollitia fugiat error itaque totam ea, dolores quis. Iure, consectetur vero odio dicta sit, error porro repudiandae earum, aperiam illum asperiores. Cumque dolorem repudiandae quasi dolores soluta velit? Ea culpa corporis magnam veritatis atque sed vero explicabo enim eius amet dicta autem perferendis, placeat laudantium asperiores a aspernatur sint ut architecto tenetur possimus veniam harum qui! Sequi deserunt quae eos vitae, quam nihil harum illum, labore eius odit nulla soluta, aperiam earum in? Hic optio molestiae odit officiis esse laborum, veritatis aliquam recusandae possimus omnis animi quia necessitatibus velit similique cum maiores modi alias unde quas veniam tenetur consectetur sit quibusdam. Reiciendis labore consequatur eaque dolor nihil suscipit sequi facilis inventore quos distinctio neque corporis expedita nulla odio, laudantium in deserunt repellat voluptatibus at illo adipisci mollitia fugiat! Ipsum eos et quisquam, iste temporibus sint omnis animi, numquam quam autem consequuntur ipsa inventore ex atque pariatur saepe porro. Nobis quia nihil similique aliquam exercitationem distinctio quae optio voluptatibus? Aut, exercitationem incidunt eius dolorem nesciunt possimus iure, vel, ipsam eum doloremque doloribus laudantium asperiores voluptatum dicta soluta vitae facilis at ab obcaecati! Impedit dolorum incidunt reprehenderit accusantium perferendis obcaecati dicta, unde doloribus officia. Beatae, quibusdam! Ducimus reprehenderit sunt dolores ab nobis eaque error quae. Earum voluptatibus quisquam aliquam tenetur, odio nesciunt fuga illum error harum cum esse tempore laborum delectus veritatis et placeat maxime quia excepturi nihil architecto? Quae facere labore odio ipsam sit eligendi fugit tempore non, eos voluptatem magnam nihil autem praesentium quis nobis dicta quidem debitis deserunt distinctio fugiat, numquam temporibus omnis dolores sapiente. A, deleniti corporis expedita impedit eos perferendis dolorem pariatur mollitia nihil ut asperiores veniam eum vel sunt, debitis facere provident. A aliquid ut, deleniti rerum atque vitae repudiandae amet adipisci quo praesentium, incidunt sequi esse pariatur optio culpa voluptatibus molestias temporibus! Officia, placeat impedit, corrupti officiis blanditiis voluptates nihil iste hic, quod laudantium ea eos unde nemo quis et sapiente. Quibusdam incidunt ab blanditiis pariatur! Perferendis veritatis officiis repudiandae atque? Quis qui sequi sint eveniet. Corrupti cumque ea eaque, quisquam, consequuntur porro odit, ab iusto repellat ipsa officiis sapiente nobis officia voluptate! Ut temporibus quibusdam similique accusantium ullam magni officia necessitatibus, facilis sit corporis iste dolorum soluta voluptatibus, esse veritatis minima? Deserunt quis amet accusamus, voluptatum omnis enim dignissimos molestias voluptatem nam voluptates aliquam odit, commodi adipisci ipsa quas, sapiente nemo doloremque excepturi rerum? Itaque ad impedit delectus quasi quisquam ratione, voluptatum nobis tempore sint voluptatem sit sunt nisi amet modi quas. Error veritatis reiciendis fugiat illum, dolorum repellendus voluptatum quo quam incidunt fuga voluptate! Repudiandae, soluta. Excepturi inventore modi necessitatibus! Dolorem dolore at maiores nisi debitis a porro dignissimos repudiandae fuga ea velit saepe, quod cupiditate tenetur pariatur reprehenderit autem voluptatibus tempora magni animi quo eum quis amet. Ut, perferendis voluptas impedit nisi aperiam cumque, fuga quaerat libero dolorem at aspernatur facere nemo nihil debitis aut aliquid laudantium eveniet id, vero suscipit dolores! Unde mollitia aliquam, commodi vero pariatur veniam praesentium reprehenderit voluptates eum illo debitis, enim possimus facere! Reprehenderit et ut magnam minus, quisquam ea esse iste magni excepturi quia dignissimos suscipit repudiandae aperiam assumenda nemo perferendis voluptates aut ullam natus quis ipsa quod laboriosam? Rem ad excepturi dolorum harum ducimus debitis, voluptatem perferendis ex aperiam blanditiis officia beatae voluptates repellendus ipsa sapiente architecto nam, sint cupiditate adipisci illum atque odio incidunt quibusdam. Repellat facere earum amet. In explicabo necessitatibus veritatis aperiam deleniti aliquam officiis optio laborum ea quo. Exercitationem, accusamus nostrum! Labore quasi quisquam dolorem minus quibusdam ipsam, recusandae praesentium libero odio perspiciatis amet assumenda iusto molestiae magnam dignissimos similique iste voluptate maiores aspernatur voluptatum nisi enim eveniet qui? Voluptatum quod tenetur ipsam laudantium quae quos animi illum corrupti itaque delectus aliquam deserunt a commodi assumenda praesentium blanditiis quam, id ea facilis quo possimus minima voluptates asperiores necessitatibus! Sit ad soluta minus quos ab natus consectetur fuga! Numquam, voluptatum dolores culpa velit architecto, quos veritatis eligendi eos molestias ipsum consequuntur. Similique, voluptatem accusantium eos non ex tempora, laboriosam exercitationem quam atque asperiores perferendis earum esse ullam tenetur ipsum accusamus vero consequatur. Itaque sint rem, nam voluptate dolor in corrupti architecto quo quibusdam laborum recusandae qui fugit, non cum odit aperiam laudantium maxime commodi? Similique tempore aliquam autem sint accusamus illum, praesentium adipisci impedit nostrum itaque, quia alias ratione. Nesciunt eaque aspernatur dolorum quae reiciendis est necessitatibus, expedita quaerat ea accusantium assumenda earum quod eveniet numquam laborum, enim amet soluta nam, illum doloremque obcaecati cumque ad. Quia praesentium nobis natus recusandae, exercitationem reiciendis, aspernatur, quod temporibus ut nihil fugiat. Voluptatum impedit ab cumque. Quaerat sint dicta tempore explicabo atque optio nemo consequatur doloremque excepturi quam iste fugiat quo numquam sequi accusantium reiciendis hic nulla eaque eveniet, ad facilis! Accusantium et earum asperiores obcaecati laborum iusto fugiat! Saepe aperiam iure, quidem officiis qui atque tempora ducimus similique excepturi at facere doloribus modi? Animi necessitatibus numquam temporibus harum optio repudiandae, perspiciatis cumque quod impedit iste placeat facere dolor ratione, incidunt recusandae possimus fuga ducimus dolores? Officiis inventore, magnam totam dolor voluptas tenetur, et dolorem eos aspernatur, doloribus nisi fugit adipisci sed eaque sequi. Quibusdam sapiente a rerum eius magni omnis voluptatum illo ipsam odit in? Magnam cupiditate autem earum sit! Qui reprehenderit aliquid necessitatibus magni recusandae, praesentium doloribus corporis aliquam laboriosam impedit mollitia vero nobis, eum laudantium asperiores modi? Dolor possimus saepe iure beatae? Voluptas possimus rem quidem aut, nesciunt numquam laboriosam quod porro sunt consequuntur amet nobis ut voluptatibus ipsam autem sapiente corrupti quibusdam aliquid harum veniam eius unde? Necessitatibus deleniti voluptatibus repellendus saepe sed rerum earum facere inventore architecto asperiores? In, nulla. Voluptate ipsum labore corrupti nemo placeat libero reiciendis necessitatibus commodi sapiente voluptatem, voluptas eveniet minus, doloribus odio officia! Odit adipisci doloremque voluptatibus dolorum facere, et, nesciunt impedit ut eius praesentium enim iste facilis! Aspernatur, quidem totam. Vel optio eum aliquam dolorem nostrum qui ea eveniet, quam nisi excepturi nobis exercitationem sit harum doloribus accusamus voluptate quibusdam itaque amet mollitia voluptas impedit repellendus minus quod corporis. Molestias ab dignissimos vitae nisi voluptatem neque temporibus eaque cumque nihil sit quos quas aperiam ullam voluptatum sapiente, molestiae velit veniam necessitatibus reprehenderit maiores error? Atque officiis eum alias molestiae commodi unde ipsum, porro optio rem quae vero velit, quasi, corrupti quas asperiores numquam. Tenetur, hic, earum, impedit omnis voluptas fugit suscipit animi quia id alias adipisci ad repellendus dolor aliquam! Quae veniam recusandae, eaque ex quis tempora. Nesciunt, ut. Suscipit eum magnam aliquid. Quo magnam tenetur ipsum facilis dolores quod laboriosam distinctio hic neque reiciendis dolore cumque nemo eligendi deserunt possimus voluptates illum, officiis excepturi sit aliquid, assumenda dolorem autem ad culpa! Accusamus illum earum maxime voluptatum. Aspernatur quis minima in corrupti libero veritatis ullam est dicta dolore consectetur id pariatur maxime quibusdam nostrum, error quasi minus asperiores animi facilis dignissimos modi. Tenetur, iste excepturi deserunt earum quibusdam quaerat culpa quae ab aut unde repudiandae facere deleniti pariatur ullam, non ipsum, eaque rem cum placeat sapiente. Accusantium, quae nemo at saepe suscipit iste fuga sapiente ea ratione doloremque quia fugiat omnis veniam corporis tempore. At accusamus eum deleniti itaque quod neque ut porro sed assumenda voluptate voluptatum, optio corporis maxime aliquid nisi necessitatibus minus et voluptas placeat nihil debitis accusantium repudiandae sint. A excepturi iste aspernatur. Magni voluptatum assumenda minus corrupti, eum ipsa cum debitis asperiores magnam natus tempore dolor velit sint pariatur aspernatur porro distinctio. Deserunt, possimus! Nulla autem sed nisi praesentium explicabo vitae ratione ea rem commodi, provident eligendi repudiandae ipsum et consequuntur! Ab debitis provident laboriosam, quia autem, quasi vitae cum ipsa voluptate impedit quo eius doloremque odit ipsum magni? Assumenda nam voluptas illo eius necessitatibus harum repellendus hic, distinctio molestiae nihil eligendi quam sapiente cupiditate possimus reiciendis? Ipsum est, necessitatibus voluptatum aut, animi qui nesciunt praesentium aliquam totam quia libero veritatis nam esse porro temporibus. Fugit quaerat nisi recusandae dolorum sit cupiditate, omnis repellendus tempore aspernatur, laudantium nostrum nihil inventore doloremque accusantium. Explicabo nemo, sunt eaque necessitatibus assumenda inventore veritatis quod fugiat, modi alias totam? Excepturi provident cumque natus cupiditate minima, dolor quasi autem, odit repellendus perspiciatis quam esse consequuntur omnis! Unde velit et iste ducimus optio non voluptatem quidem neque quasi vitae corporis maiores tempora, autem exercitationem expedita illum eveniet repellat quo sapiente incidunt corrupti in? Dolore esse, aspernatur iure error tempora nihil eum ducimus saepe omnis corporis magni ex sit odit? Natus soluta non id et nostrum placeat architecto mollitia, nobis porro, assumenda omnis sit dolorem consectetur tempora quisquam, provident molestias odio consequuntur eveniet beatae! Dignissimos sapiente ratione facere impedit quidem. Dignissimos sint, quis expedita quos alias delectus sunt totam labore nesciunt eius doloribus perspiciatis distinctio, obcaecati beatae excepturi optio facilis omnis ex porro dolorum facere corrupti quam. Modi quo soluta iure excepturi, totam officiis eum, corporis neque repellat ea quidem sed et corrupti. Quasi facere molestias tempora quibusdam, architecto laboriosam dicta dolore minima cupiditate voluptatibus iusto amet error accusantium. Voluptate quasi amet fugit voluptas nisi neque alias minus quis laborum. Nulla beatae corrupti assumenda cupiditate, modi officiis temporibus magni quisquam corporis quis cum veniam vitae ad iusto obcaecati aperiam distinctio reprehenderit! Distinctio quibusdam consequuntur quidem eligendi facilis neque facere commodi labore repellat aliquam dolor itaque omnis esse laborum, expedita rem delectus eius illum a voluptate rerum nihil, nostrum debitis! Maxime eius sint perferendis dolore maiores, ipsam quibusdam totam dolor earum nesciunt a et? Ratione aliquid maiores, in nam impedit hic repudiandae vel quia necessitatibus odit nemo repellat eaque tempore temporibus fugit! Eveniet nostrum placeat animi consequatur iste. Corrupti expedita earum enim non dolorum aut dicta pariatur labore. Vel id labore quia provident! Non neque, aperiam corporis rerum sequi reiciendis cum accusamus accusantium sed asperiores ea aut consectetur recusandae optio quod dolorum alias suscipit voluptas odit labore similique! Quisquam iusto impedit officia architecto possimus harum ipsum error dolore asperiores veritatis alias ab fugiat doloribus delectus mollitia nesciunt, quibusdam sequi, porro, cupiditate voluptatem dicta culpa voluptatibus enim? Maxime sit commodi consectetur ab optio cum aliquam praesentium atque reprehenderit a laborum debitis nisi facere consequatur, cupiditate sed quaerat repellendus possimus. Sequi nihil nam corrupti reprehenderit distinctio culpa eligendi beatae, dolorum enim alias labore adipisci deleniti in explicabo iste repellat fugit quae necessitatibus et ab illum aut eaque vel. Eum dicta obcaecati maxime totam deserunt, saepe quis iusto in atque id quibusdam. Iusto ipsa distinctio fuga itaque nobis placeat aperiam possimus rerum temporibus id sint fugiat dolorum dignissimos quae laboriosam soluta a minus quibusdam nihil quasi, velit pariatur! Cupiditate, blanditiis? Placeat ratione accusantium explicabo quos nostrum rerum laboriosam in laborum atque id, sunt, repudiandae quasi! Dolorem aliquam laborum alias. Quos ad nulla, aliquid dicta, nesciunt quasi aliquam quae ipsam commodi officiis obcaecati pariatur sequi molestiae nam eum? Non exercitationem esse quam deleniti error. Dolores autem veritatis sapiente deserunt laborum rerum quod suscipit. Quam, accusantium voluptatum, iusto omnis amet temporibus repudiandae eaque fuga cum et quas necessitatibus magni pariatur neque a autem modi, illum inventore! Quae quam natus, accusantium debitis voluptate repellat eligendi quisquam aut aspernatur maiores? Nihil inventore, officia, itaque laudantium eos quod nulla dolorem est impedit nisi quidem cumque similique omnis, et voluptatum. Quis sit eos, incidunt qui iure commodi facere aspernatur omnis illum tempora, sapiente quia perspiciatis autem aliquid delectus laborum natus. Provident, unde nisi. Explicabo similique perferendis qui aut id possimus nihil repellendus iure. Aliquid necessitatibus assumenda autem, eum, iure aliquam ad quae cupiditate quaerat animi a nisi, dolor porro quos tenetur quo. Cum nihil magnam voluptatibus rem aliquam similique ea quidem ad saepe nulla adipisci debitis rerum atque non fugit ipsum eius explicabo qui in quisquam eveniet provident dicta, eligendi excepturi? Quos quis deserunt inventore saepe! Maxime rerum quas magni deserunt, eaque in! Optio ipsum odit ullam rem, amet, deleniti sunt sit voluptatem suscipit dignissimos, accusantium praesentium itaque velit? Unde, autem veritatis nesciunt est porro fuga illum, voluptatum, perferendis molestias facere consectetur? Quas nesciunt et, deleniti dicta ut nulla, fugiat illum corrupti mollitia iusto nobis alias distinctio unde, fugit rem deserunt necessitatibus aspernatur. Ipsam soluta mollitia voluptatum officiis veniam rem reprehenderit, animi voluptate alias odit expedita nulla distinctio nostrum sit corrupti?
            </div>
            <div style={{position:'fixed',width:'100%',height:100,top:'90vh',backgroundColor:'black',color:'white',display:'flex',flexDirection:'row'}}>

              <form onSubmit={onMessageSubmit}>
                <div className="name-field">
                  <ReactTransliterate
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      lang={lang}
                      placeholder="Start typing here..."
                      containerStyles={{
                        width: "300px",
                      }}/>
                </div>

                <button type={"submit"}>Send Message</button>

              </form>
            </div>

            {/* </Container> */}
          </Grid>

        </Grid>
        {/* </div> */}
      </>
  );
}