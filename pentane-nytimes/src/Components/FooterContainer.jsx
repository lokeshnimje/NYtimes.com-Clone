import React from 'react'
import Footer from './footer/FooterIndex'   // FooterIndex.js from Components
import { MdSubscriptions, MdGames} from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
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
                    <Footer.Links >Home Page</Footer.Links>
                    <Footer.Links >World</Footer.Links>
                    <Footer.Links >Coronavirus</Footer.Links>
                    <Footer.Links >U.S</Footer.Links>
                    <Footer.Links> Politics </Footer.Links>
                    <Footer.Links> New York </Footer.Links>
                    <Footer.Links> Business </Footer.Links>
                    <Footer.Links> Tech </Footer.Links>
                    <Footer.Links> Science </Footer.Links>
                    <Footer.Links> Sport </Footer.Links>
                    <Footer.Links> Obituaries </Footer.Links>
                    <Footer.Links> Todays's Paper </Footer.Links>
                    <Footer.Links> Corrections </Footer.Links>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Opinion</Footer.Title>
                    <Footer.Links > Today's Opinion </Footer.Links>
                    <Footer.Links > Op-Ed Columnists </Footer.Links>
                    <Footer.Links > Editorials </Footer.Links>
                    <Footer.Links > Op-Ed Contributors </Footer.Links>
                    <Footer.Links > Letters </Footer.Links>
                    <Footer.Links > Sunday Review </Footer.Links>
                    <Footer.Links > Video: Opinion </Footer.Links>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Arts</Footer.Title>
                    <Footer.Links > Todays's Arts</Footer.Links>
                    <Footer.Links > Art & Design</Footer.Links>
                    <Footer.Links > Books </Footer.Links>
                    <Footer.Links > Dance </Footer.Links>
                    <Footer.Links > Movies </Footer.Links>
                    <Footer.Links > Music </Footer.Links>
                    <Footer.Links > Pop Culture </Footer.Links>
                    <Footer.Links > Television </Footer.Links>
                    <Footer.Links > Theater </Footer.Links>
                    <Footer.Links > Video Arts </Footer.Links>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Living</Footer.Title>
                    <Footer.Links > At Home </Footer.Links>
                    <Footer.Links > Automibiles </Footer.Links>
                    <Footer.Links > Games </Footer.Links>
                    <Footer.Links > Education </Footer.Links>
                    <Footer.Links > Food </Footer.Links>
                    <Footer.Links > Health </Footer.Links>
                    <Footer.Links > Jobs </Footer.Links>
                    <Footer.Links > Love </Footer.Links>
                    <Footer.Links > Magzine </Footer.Links>
                    <Footer.Links > Parenting </Footer.Links>
                    <Footer.Links > Real Estate </Footer.Links>
                    <Footer.Links > Recipes </Footer.Links>
                    <Footer.Links > Styles </Footer.Links>
                    <Footer.Links > T Magzine </Footer.Links>
                    <Footer.Links > Travel </Footer.Links>
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
                                 <Footer.Link2 ><h3> <BsNewspaper style={{marginRight:'10px'}} /> Home Delivery </h3> </Footer.Link2>
                            </span>
                                <span style={{ marginBottom:'-25px'}}> <Footer.Link2 > <h3><MdSubscriptions style={{marginRight:'10px'}} />Subscription</h3></Footer.Link2></span>

                            <span style={{ marginBottom:'-25px'}}>
                                <Footer.Link2 > <h3><MdGames style={{marginRight:'10px'}} /> Games</h3></Footer.Link2>
                            </span>
                            <span style={{ marginBottom:'-25px'}}>
                                <Footer.Link2 > <h3><GiCook style={{marginRight:'10px'}} /> Cooking</h3></Footer.Link2>
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