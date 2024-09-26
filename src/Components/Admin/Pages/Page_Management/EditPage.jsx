// import React, { useState } from "react";

// import FirstComp from "../../SubmitPages/Dmit/component/FifethComp"
// import SeconComp from "../../SubmitPages/Dmit/component/SecondComp"
// import ThirdComp from "../components/ThirdComp"
// import FourthComp from "../../SubmitPages/Dmit/component/FourthComp"
// import FourthComp from "../../SubmitPages/Dmit/component/FifethComp"

// export default function PageManagement() {

//   const [inputData, setInputData] = useState({});
//   const [components, setComponent] = useState([]);
//   const [metaData, setMetaData] = useState({});
//   const [template, setTemplate] = useState({});



//   // get page-id = 1 => DMIT , DMIT-Delhi


//   // useeffect get page-data to edit via api using page-id , payload - admin,page-id, validation-token

//   // set page-data into a state InputData
//   // set template/structure used , components used , meta data
  
//     const inputHandler = ({name, value, type, component }) => {
//         if(type=="text"){
//             setInputData({...inputData,[component] : {...inputData[component], [name] : value }});
//         } 
  
// /*        
//         if type is file -> send file to s3 and then save the s3 link to inputData "https:s3.aws.com/image-file.png"
//         if(type=="file"){
//          // s3 code
//             const objectLInk = sendFileToS3(FORM_INPUT_FILE);
//             setInputData({..., [component] : {...inputData[component], [name] : objectLInk }});
//         } 
//     }
// */
//     }
//   // <input name="" value="" type="" > 
//     const allcomp = {
//         "FirstComp" : <FirstComp data={inputData["FirstComp"]} handler={inputHandler} />,
//         "SeconComp" : <SeconComp data={inputData["SeconComp"]} />,
//         "ThirdComp" : <ThirdComp data={inputData["ThirdComp"]} />,
//         "FourthComp" : <FourthComp data={inputData["FourthComp"]} />,
//     }

//     // components : ["SecondComp", "ForuthComp"]
//     const loadComponents = components?.map(async (item) => {
//         return allcomp[item]
//     });
//   return (
//     <div className={`page-`}>
//         {loadComponents}
//     </div>
//   );
// }


