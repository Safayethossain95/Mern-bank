import React,{useEffect,useState} from 'react'
import styled from 'styled-components';

import {db} from './Firebase-config';
import { addDoc, collection,deleteDoc,doc,getDocs, updateDoc } from '@firebase/firestore';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  ul,ol{
       list-style:none;
  }
  h1,h2,h3,h4,h5,h6{
       margin:0;
       padding:0;
  }
  p{
       margin:0;
       padding:0;
  }
`;

const Main = styled.div`
width:800px;
height:500px;
background:#6471EB;
margin:80px auto;
padding:50px;
position:relative;
`;
const Input = styled.input`
     width:150px;
     background:transparent;
     border:1px solid #fff;
     padding:10px;
     border-radius:7px;
     color:#fff;
     margin-top:20px;
     display:block;
     `;
const Heading = styled.h1`

     font-size:32px;
     color:#fff;
     display:inline-block;

     `;
const Button = styled.button`
     width:173px;
     padding:10px;
     background:#fff;
     color:#6471EB;
     display:block;
     margin-top:20px;
     border-radius:7px;
     `;
const TotalMoney = styled.h2`
     font-size:32px;
     color:#fff;
     position: absolute;
     top:40%;
     left:50%;
     transform:translate(-50%,-50%);
`;
const Amount = styled.p`
     font-size:32px;
     color:#fff;
     position: absolute;
     top: 50%;
     left:50%;
     transform:translate(-50%,-50%);
`;
const Pallet = styled.div`
     padding:20px;
     position:absolute;
     right:20px;
     top: ${props => props.pos};
     text-align:center;
     background:#fff;
     
`;
const Palletheading = styled.h2`
     color:#000;
     font-size:32px;
`;


const Bank = () => {
    
     
    
     let address = collection(db, "bank");
     let [bank,setbank] = useState([]);
     
     useEffect((e)=>{
          
          let storeduser = async ()=> {
              let info = await getDocs(address);
              setbank(info.docs.map(doc => ( {...doc.data(), id:doc.id}  )))
          // console.log(info.docs.map(doc=> doc.data().amount))
          
          }
          storeduser()
      },[])

      let dataUpdate = async (id)=>{
          console.log("asi");
          let newAddress = doc(db,"bank",id)
         await updateDoc(newAddress, {amount:bank})
       }
      
     
     return (
          <>
               <GlobalStyle></GlobalStyle>
               <Main>
                    <Heading>Add Money</Heading>
                    {bank.map(info => (
                        <div>
                    <Input type="number" placeholder="Amount" onChange={(e)=>setbank(e.target.value)}></Input>
                    <Button onClick={()=>{dataUpdate(info.id)}}>Add</Button>
                    <TotalMoney>Total Money</TotalMoney>
                
                             <Amount>{info.amount}</Amount>
                             
                        </div>
                            
                       
                     ) )}
                    <Heading>Remove Money</Heading>
                    <Input placeholder="Amount" onChange={e => setbank(e.target.value)} value={bank}></Input>
                    {/* <Button type="button" onClick={dataUpdate}>Remove</Button> */}

                    <Pallet pos="20px">
                         <Palletheading>Added Money</Palletheading>
                         <Palletheading>100</Palletheading>

                    </Pallet>

                    <Pallet pos="41%">
                         <Palletheading>Removed Money</Palletheading>
                         <Palletheading>50</Palletheading>

                    </Pallet>

               </Main>

               

                        {/* {console.log(bank.map(er => (er.amount)))} */}
               
          </>
     )
}


export default Bank


