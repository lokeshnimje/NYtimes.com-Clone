import React from 'react'
import Comment from './Comment';
import Share from './Share';

const MainArticle = () => {
    const obj = JSON.parse(localStorage.getItem("pageInfo"))
    const {head, sub, img, cap, by, day, month, year, link} = obj
    console.log(obj);
    return (
        <div style = {{textAlign:"left", width:"60%", margin:"10px auto", }}>
            <div style = {{fontSize:"22px"}}> <h1>{head}</h1> </div>
            <div style = {{fontSize:"18px", fontWeight:"500", marginBottom:"10px"}}> {sub} </div>
            <div style ={{  padding:'5px', borderTop:'1px solid #ddd'}}></div>
            <div style ={{color:"teal", fontSize:"12px" }}>
                <div><img src={img} alt={cap} style={{width:"90%",height:"400px"}}/> </div>
                {(cap.length > 0)? cap: "Copyright (c) 2021 The New York Times Company. All Rights Reserved."}
            </div>
            <div style = {{marginTop:"5px", textAlign:"left", color:"teal", fontWeight:"500" }}> 
                <div>{by}</div>
                <div>{day} {month}, {year}</div>
            </div>
            <div> <Share url = {link}/> </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"80%",  margin:"10px 0"}}> 
                <div>
                    <b>A</b>t Fountain Court Chambers in central London, the senior clerk is called Alex Taylor. A trim, bald 54-year-old who favors Italian suiting, Taylor isn’t actually named Alex. Traditionally in English law, should a newly hired clerk have the same Christian name as an existing member of the staff, he’s given a new one, allegedly to avoid confusion on the telephone. During his career, Taylor has been through no fewer than three names. His birth certificate reads “Mark.” When he first got to Fountain Court in 1979, the presence of another Mark saw him renamed John. Taylor remained a John through moves to two other chambers. Upon returning to Fountain Court, in 2008, he became Alex. At home his wife still calls him Mark.
                    <br/>
                    <br/>
                    Alex/John/Mark Taylor belongs to one of the last surviving professions of Dickensian London. Clerks have co-existed with chimney sweeps and gene splicers. It’s a trade that one can enter as a teenager, with no formal qualifications, and that’s astonishingly well-paid. A senior clerk can earn a half-million pounds per year, or more than $650,000, and some who are especially entrenched make far more.
                    <br/>
                    <br/>   
                    Clerks—pronounced “clarks”—have no equivalent in the U.S. legal system, and have nothing in common with the Ivy League–trained Supreme Court aides of the same spelling. They exist because in England and Wales, to simplify a bit, the role of lawyer is divided in two: There are solicitors, who provide legal advice from their offices, and there are barristers, who argue in court. Barristers get the majority of their business via solicitors, and clerks act as the crucial middlemen between the tribes—they work for and sell the services of their barristers, steering inquiring solicitors to the right man or woman.
                    </div>
                    <br/>
                    
                    <div>
                    Clerks are by their own cheerful admission “wheeler-dealers,” what Americans might call hustlers. They take a certain pride in managing the careers of their bosses, the barristers—a breed that often combines academic brilliance with emotional fragility. Many barristers regard clerks as their pimps. Some, particularly at the junior end of the profession, live in terror of clerks. The power dynamic is baroque and deeply English, with a naked class divide seen in few other places on the planet. Barristers employ clerks, but a bad relationship can strangle their supply of cases. In his 1861 novel Orley Farm, Anthony Trollope described a barrister’s clerk as a man who “looked down from a considerable altitude on some men who from their professional rank might have been considered as his superiors.”
                    <br/>
                    <br/>
                    Fountain Court is among the most prestigious groups in London practicing commercial law, the branch that deals with business disputes. One day last summer, Taylor gave a tour of the premises, just north of the River Thames. The waiting room had been recently remodeled, with upholstered sofas, low tables, and asymmetrically hung pictures that called to mind an upmarket hotel. Taylor explained that the barristers had tried to walk an aesthetic line between modernity and the heritage that clients expect of people who are sometimes still required to wear a horsehair wig to court. Barristers are self-employed; chambers are a traditional way for them to band together to share expenses, though not profits. The highest-ranking members, barristers who’ve achieved the rank of Queen’s Counsel, are nicknamed silks, after the plush material used to make their robes. But even the silks cannot practice without the services of clerks, who operate from a designated room in each chambers, matching the ability and availability of barristers to solicitors in need.
                </div>

            </div>

            <div>
                <Comment/>
            </div>
        </div>
    )
}

export default MainArticle
