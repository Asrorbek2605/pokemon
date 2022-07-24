const rootElement = document.getElementById("root")
const  root = ReactDOM.createRoot(rootElement)
const image = './images/natur.png';
const img1 = './images/heart.png';
const bodyOne = './images/pokemon.png';
const styles = {
root:{
    margin:"0",
    padding:"0"
},
    bodyimage:{
    display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    contsiner:{
        background: "#FFFFFF",
        border: "2px solid #000000",
        borderRadius: "20px",
        fontSize:"1,5rem",
        width:"250px",
        height:"400px"
    },
    img1:{
        width:"23px",
        height: "43",
    },
    image:{
        width: "56%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"30px 55px",
    },
        box:{
      borderTop:"2px solid black",
        display: "flex",
      justifyContent: "space-around",
            alignItems: "center",
        },
    box1:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    p:{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#000000",
    },
    title:{
        display:"flex",
        alignItems:"center",
        justifyContent:"start",
        marginLeft:"35px",
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight: "500",
        fontSize: "20px",
        padding: 0,
        lineHeight: "23px",
        color: "#000000",
    },
    btn1:{
        width: "260px",
        height: "60px",
        background: "#FFFFFF",
        border: "2px solid #000000",
borderRadius: "15px",
    },
    btngroup:{
    paddingTop:"0",
        margin:"50px 0",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    },
    section2:{
        background:"yellow",
        margin: "0",
        padding:"0"
    },
    sectionbody:{
    display:"grid",
        gridTemplateColumns: "auto auto auto auto",
gridGap: "60px",
        padding:"10px"
    }

}
const bodyimage = React.createElement('div',{className:'bodyimage',style:styles.bodyimage},[
    React.createElement('img',{src:bodyOne,alt:"images"})
])
const btn = React.createElement('div',{className:"btngroup",style:styles.btngroup},[
    React.createElement('button',{className:"btn1",style:styles.btn1},'Gross'),
    React.createElement('button',{className:"btn1",style:styles.btn1},'Search'),
    React.createElement('button',{className:"btn1",style:styles.btn1},'Aa-Zz'),
    React.createElement('button',{className:"btn1",style:styles.btn1},'Button'),
])
const boxs = React.createElement('div',{className:'box',style:styles.box},[
    React.createElement('p',{className:"text1",style:styles.p},"Pokemon",),
    React.createElement('img',{src:img1,alt:"img1",style:styles.img1})
        ]);
const border = React.createElement('h1',{className:'title',style:styles.title},'Grass, Poison')
const littlebox = React.createElement('div',{className:'box1',style:styles.box1},[
    React.createElement('p',{className:"text2",style:styles.p},"6.9kg",),
    React.createElement('p',{className:"text2",style:styles.p},"99age",),
]);
const section1 = React.createElement('div',{className:'container', style:styles.contsiner},[
    React.createElement('img',{src:image,alt:"nature",style:styles.image}),
    boxs,
    border,littlebox,
])
const sectionbody = React.createElement('div',{className:'sectionbody',style:styles.sectionbody},[
    section1,
    section1,
    section1,
    section1,
    section1,
    section1,
    section1,
    section1
])
const  section2 = React.createElement('div',{className:'section2',style:styles.section2},[
    bodyimage,
    btn,sectionbody
])
root.render(section2);