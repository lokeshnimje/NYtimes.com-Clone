import { FacebookButton, LinkedInButton, TwitterButton } from 'react-social'
 
const Share=(props)=> {
   
    // let url = window.location;

    // You need to create App in the developers.facebook.com or any of the provided social media
    // links and pass the appId and the url to be shared as props in the Share component like:-
    // <Share url={anyurl-to be shared} appId={your-appId}/>

    return (
    <>
        <FacebookButton style={{height:"30px", margin:"5px 5px", padding:"5px" , outline:"none",width:"30px",borderRadius:"50%",cursor:"pointer",border:"none", backgroundColor:"#4267B2"}} url={props.url} appId={'3765231350261272'}>
            <i class="fa fa-facebook" style={{fontSize:"18px", color:"#fff"}}></i>
        </FacebookButton>
        <TwitterButton style={{height:"30px", margin:"5px 5px", padding:"5px" , outline:"none",width:"30px",borderRadius:"50%",cursor:"pointer",border:"none", backgroundColor:"#4267B2"}} url={props.url} appId={'20341472'}>
            <i class="fa fa-twitter" style={{fontSize:"18px", color:"#fff"}}></i>
        </TwitterButton>
        <LinkedInButton style={{height:"30px", margin:"5px 5px", padding:"5px" , outline:"none",width:"30px",borderRadius:"50%",cursor:"pointer", border:"none", backgroundColor:"#4267B2"}} url={props.url} appId={''}>
            <i class="fa fa-linkedin" style={{fontSize:"18px", color:"#fff"}}></i>
        </LinkedInButton>
    </>
    );
  
}
export default Share;
