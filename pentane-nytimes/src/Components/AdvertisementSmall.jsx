import React from "react"
import styles from "./AdvertisementSmall.module.css";
const Advertisement=()=>{
    let initialUrl="https://tpc.googlesyndication.com/simgad/460918785823631131?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkHQ5HSt9eOFqvscvXWvCS7-0izbg";
    let [url,setUrl]=React.useState(initialUrl);
    let [count,setCount]=React.useState(1);
    
    let advUrl=["https://tpc.googlesyndication.com/simgad/460918785823631131?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkHQ5HSt9eOFqvscvXWvCS7-0izbg","https://previews.123rf.com/images/zodchiy/zodchiy1706/zodchiy170600055/80946532-sale-web-banners-template-for-special-offers-advertisement-frame-with-the-discount-offer-trendy-colo.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKddBNm0kmbi3s6ghBgV8Dn2N4w8oAXD5xA&usqp=CAU","https://images.examples.com/wp-content/uploads/2017/04/Business-Roll-Up-Advertising-Banner.jpg","https://scontent.fccu13-1.fna.fbcdn.net/v/t1.0-9/130820740_2914046475481674_9154068250336813448_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=oxgskELgx4oAX-zhdEk&_nc_ht=scontent.fccu13-1.fna&oh=17272dca661cca2577761597b2edbe18&oe=6070F3A6", "https://scontent.fdel18-1.fna.fbcdn.net/v/t1.0-9/137027843_2936321429920845_6990831406426888412_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=973b4a&_nc_ohc=jp_mmhWQig8AX9dYUzA&_nc_ht=scontent.fdel18-1.fna&oh=5e832e2874184ed07c2dcf968a30d640&oe=6071E26B"]
    
    React.useEffect(()=>{
        var id=setInterval(()=>{
            if(count===5){
                setCount(count=>-1);
            }
            setUrl(advUrl[count]);
            setCount(count=>count+1);
            
        },5000)
        return ()=>{
            clearInterval(id);
        }
    },[count])

    return (
        <>
        <div className={styles.cover}>
            <div>ADVERTISEMENT</div>
            <img src={url} alt="adv"/>
            <div className={styles.close}>x</div>
        </div>
        </>
    )
}
export default Advertisement;