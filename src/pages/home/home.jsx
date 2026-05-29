import style from "./home.module.css"
function Home(){
    return(
        <><div className={style.hading}>
        <h1 className={style.h1}>EMPOWERING WOMEN 
            <br></br>
            <br></br>
            CHANGING LIVES
            <br></br>
            <br></br>
            <hr></hr>
        </h1>
        <p className={style.para}>We create opportunities where women can learn,
            <br></br>
            grow, and believe in their potential</p>
            
            </div>
            {/* <button className={style.button}>Get Involved</button> */}
            
        <div >
        <img className={style.image} src="heroimage.png"></img>
        
        </div>
        </>
        
    )
    
};
export default Home;