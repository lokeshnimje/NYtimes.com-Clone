import { FacebookButton, LinkedInButton, TwitterButton } from "react-social";
 
const Share=(props)=> {
   
    let url = props.url;

    // You need to create App in the developers.facebook.com or any of the provided social media
    // links and pass the appId and the url to be shared as props in the Share component like:-
    // <Share url={anyurl-to be shared} appId={your-appId}/>

    return (
    <>
        <FacebookButton style={{height:"50px",width:"50px",borderRadius:"50%",cursor:"pointer"}} url={url} appId={props.appId}>
            <i class="fa fa-facebook" style={{fontSize:"24px"}}></i>
        </FacebookButton>
        <TwitterButton style={{height:"50px",width:"50px",borderRadius:"50%",cursor:"pointer"}} url={url} appId={props.appId}>
            <i class="fa fa-twitter" style={{fontSize:"24px"}}></i>
        </TwitterButton>
        <LinkedInButton style={{height:"50px",width:"50px",borderRadius:"50%",cursor:"pointer"}} url={url} appId={props.appId}>
            <i class="fa fa-linkedin" style={{fontSize:"24px"}}></i>
        </LinkedInButton>
    </>
    );
  
}
export default Share;
