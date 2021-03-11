import React from 'react'
import Footer from './footer/FooterIndex'   // FooterIndex.js from Components
import { SiNewyorktimes } from "react-icons/si"


export function FooterContainer() {

return (<div>
        
<Footer style ={{  paddingTop:'50px'}}>
            <Footer.Wrapper >
                <div style ={{ borderTop:'3px solid #ddd', padding:'1px', borderBottom:'1px solid #ddd'}}></div>
            <Footer.Row >
                <Footer.Column >
                    {/* New york times's logo */}
                    <img src= "https://www.vectorlogo.zone/logos/nytimes/nytimes-wordmark.svg"  alt="new york times's logo'"/>
                </Footer.Column>
            </Footer.Row>
            
            <Footer.Row>
                <Footer.Column>
                <Footer.Title >News</Footer.Title>
                    <Footer.Link >Home Page</Footer.Link>
                    <Footer.Link >World</Footer.Link>
                    <Footer.Link >Coronavirus</Footer.Link>
                    <Footer.Link >U.S</Footer.Link>
                    <Footer.Link> Politics </Footer.Link>
                    <Footer.Link> New York </Footer.Link>
                    <Footer.Link> Business </Footer.Link>
                    <Footer.Link> Tech </Footer.Link>
                    <Footer.Link> Science </Footer.Link>
                    <Footer.Link> Sport </Footer.Link>
                    <Footer.Link> Obituaries </Footer.Link>
                    <Footer.Link> Todays's Paper </Footer.Link>
                    <Footer.Link> Corrections </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Opinion</Footer.Title>
                    <Footer.Link > Today's Opinion </Footer.Link>
                    <Footer.Link > Op-Ed Columnists </Footer.Link>
                    <Footer.Link > Editorials </Footer.Link>
                    <Footer.Link > Op-Ed Contributors </Footer.Link>
                    <Footer.Link > Letters </Footer.Link>
                    <Footer.Link > Sunday Review </Footer.Link>
                    <Footer.Link > Video: Opinion </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Arts</Footer.Title>
                    <Footer.Link > Todays's Arts</Footer.Link>
                    <Footer.Link > Art & Design</Footer.Link>
                    <Footer.Link > Books </Footer.Link>
                    <Footer.Link > Dance </Footer.Link>
                    <Footer.Link > Movies </Footer.Link>
                    <Footer.Link > Music </Footer.Link>
                    <Footer.Link > Pop Culture </Footer.Link>
                    <Footer.Link > Television </Footer.Link>
                    <Footer.Link > Theater </Footer.Link>
                    <Footer.Link > Video Arts </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Living</Footer.Title>
                    <Footer.Link > At Home </Footer.Link>
                    <Footer.Link > Automibiles </Footer.Link>
                    <Footer.Link > Games </Footer.Link>
                    <Footer.Link > Education </Footer.Link>
                    <Footer.Link > Food </Footer.Link>
                    <Footer.Link > Health </Footer.Link>
                    <Footer.Link > Jobs </Footer.Link>
                    <Footer.Link > Love </Footer.Link>
                    <Footer.Link > Magzine </Footer.Link>
                    <Footer.Link > Parenting </Footer.Link>
                    <Footer.Link > Real Estate </Footer.Link>
                    <Footer.Link > Recipes </Footer.Link>
                    <Footer.Link > Styles </Footer.Link>
                    <Footer.Link > T Magzine </Footer.Link>
                    <Footer.Link > Travel </Footer.Link>
                </Footer.Column>
                {/* newly added column */}
                <Footer.Column>    
                <Footer.Title>more</Footer.Title>
                   <Footer.Link2 >  Reader Center</Footer.Link2>                   
                   <Footer.Link2 > Wirecutter</Footer.Link2>
                    <Footer.Link2 > Live Events </Footer.Link2>
                    <Footer.Link2 > The Learning Network </Footer.Link2>
                    <Footer.Link2 > Toops and Services </Footer.Link2>
                    <Footer.Link2 > Multimedia Photography </Footer.Link2>
                    <Footer.Link2 > Video </Footer.Link2>                    
                    <Footer.Link2 > NewsLetter </Footer.Link2>
                    <Footer.Link2 > TimesMachine </Footer.Link2>
                    <Footer.Link2 > NYT Store </Footer.Link2>
                    <Footer.Link2 > Times Journeys </Footer.Link2>                    
                    <Footer.Link2 > Manage My Account </Footer.Link2>
                    <Footer.Link2 > NYT Licensing </Footer.Link2>
                    
                   
                </Footer.Column>

                <Footer.Column style={ {borderLeft:'1px solid #ddd'} }>    
              
                        <Footer.Column>
                            <Footer.Title>subscribe</Footer.Title>
                        </Footer.Column>
                        {/* Row inside subscribe column as there are two rows appearing*/}
                    <Footer.Row> {/* first row inside subscribe*/}
                        
                       <Footer.Column>
                            <span style={{ marginBottom:'-25px',marginTop:'-25px'}}>
                                 <Footer.Link2 ><h3> <img style={{marginRight:'10px'}} src="home-delivery.png" alt="home delivery"/> Home Delivery </h3> </Footer.Link2>
                            </span>
                                <span style={{ marginBottom:'-25px'}}> <Footer.Link2 > <h3><SiNewyorktimes style={{marginRight:'10px'}} /> Digital Subscription</h3></Footer.Link2></span>

                            <span style={{ marginBottom:'-25px'}}>
                                <Footer.Link2 > <h3><img style={{marginRight:'10px'}}  src="new-york-time-logo.png" alt="new york time logo"/> Games</h3></Footer.Link2>
                            </span>
                            <span style={{ marginBottom:'-25px'}}>
                                <Footer.Link2 > <h3><img style={{marginRight:'10px'}}  width="15px" height="20px" src="cooking.png" alt="cooking"/> Cooking</h3></Footer.Link2>
                            </span>
                            

                            <Footer.List  style={{ marginTop:'25px'}}>
                                <li>
                                    Email Newsletter
                                </li>
                                <li>
                                    Corporate Subscription
                                </li>
                                <li>
                                    Education Rate
                                </li>
                            </Footer.List>

                       </Footer.Column>
                    </Footer.Row>

                    <Footer.Row >  {/* second row inside subscribe*/}
                           <Footer.Column style={{borderTop: "1px solid #ddd", marginTop: "20px", paddingTop: "20px"}}>
                           
                            <Footer.List>
                               <li>
                                  Mobile Application
                               </li>
                               <li>
                                   Replica Edition
                               </li>
                               <li>
                                 International
                               </li>
                               <li>
                                   Canada
                               </li>
                               <li>
                                   Espanol
                               </li>
                           </Footer.List>

                           </Footer.Column>
                           
                   </Footer.Row>
                    

                </Footer.Column>

            </Footer.Row>
            
            <Footer.FooterBottom>
            <span>
                    &copy; 2021 The New York TIme Company
               </span>
               <span>NYTCo</span>
               <span>Contact Us</span>
               <span>Accessibilty</span>
               <span>Work with us</span>
               <span>Advertisers</span>
               <span>T Brand Studio</span>
               <span>Your Ad Choices</span>
               <span> Privacy Policy</span>
               <span>Terms of Services</span>
               <span>Terms of sales</span>
               <span>site map</span>
               <span>Help</span>
               <span>Subscription</span>
            </Footer.FooterBottom>
            </Footer.Wrapper>
        </Footer>



    </div>    )
}