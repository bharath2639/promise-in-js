







// let promise = new Promise((value,reject) =>{
//     // let add = 5 + 10;
//     // let total = `add this number ${add}`
//     // value(total);
//     let name ="bharath";
//     let arry =[];
//     for(i=0; i<name.length; i++){
//         arry.push(name[i])
//     }
//     value(arry);
//     reject("paisal levu");

// })

// promise.then(res => console.log(res)) ;

// function bharath(callback) {

//     setTimeout(() => {
//       const data = { id: 1, name: 'John' };
//       callback(data);
//     }, 1000);
//   }
  
//   bharath((bata) => {
//     console.log(bata);
//   });
 

// for(i=0; i<=10; i++){
//     console.log(i);
// }



// let raject = new Promise((value ,reject )=>{
//     reject `unsucessfull`
//  })

// raject.then((value) => console.log(value)); 



// let myData = (value) =>{
//     return new Promise((resolve,reject) =>{
//         if(value===10){
//             resolve `successfull`;
//         }else{
//             reject `unsuccessfull`;
//         }

//     })
// }

// myData(10).then(value => console.log(value)).catch((e) => console.log(e))



// let dataSpot = async () => {
//     return await 5+10;
// }

// console.log(dataSpot());

// function fetchData() {
//     return new Promise((resolve, reject) => {
      
//       setTimeout(() => {
//         const data = { id: 1, name: 'John' };
//         resolve(data);
//       }, 1000); 
//     });
//   }

//   fetchData().then(arr=> console.log(arr))


//   async function getData() {
//     try {
//       const data = await fetchData();
//       console.log(data); 
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getData();




  // function fetchData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const data = { message: "Data fetched successfully" };
  //       resolve(data);
  //     },2000); 
  //   });
  // }
  
  // async function getData() {
  //   try {
  //     console.log("Fetching data...");
  //     const result = await fetchData();
  //     console.log("Data received:", result);
  //     console.log("data sucess");
  //     return result;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     throw error;
  //   }
  // }
  
  
  // getData()
  //   .then(() => {
  //     console.log("Data successfully fetched.");
  //   })
  //   .catch((error) => {
  //     console.error("Error occurred:", error);
  //   });



// for(i=0;i<20;i++){
//     console.log(i);
// }




// const matter=new Promise((resolve, reject) =>{
//   name1 = "bharath";
//   name2 =[];
//   for(let i=0;i<name1.length;i++){
//     name2.push(name1[i]);
//   }
//   resolve(name2)

// })

// matter.then((res) =>console.log(res)).catch((mat)=>console.log(mat))


// function named(){
//   return new Promise((value,reject)=> {
//       setInterval(()=>{
//         const named ="bharath";
//         value(named);
//       },3000)
//   })

// }

// async function named2() {
//   try{
//     const result = await named();
//     console.log(result);
//   }catch(error){
//     console.log(error);
//   }

// }

// named2().then(()=>console.log("sucess")).catch(()=>console.log("error"))


let p = new Promise((resolve,reject)=>{
  resolve("print this promise");

  reject("this is no accept")

});

async function named(){

  return p;

};

const data = named();

// data.then((res)=>console.log(res));
// console.log(data);



const promise2 = new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve("namesthe js");

  },3000)

})

async function names(){
  console.log(" before it will doesn't wait");
  const results = await promise2;
  console.log("it will wait for results");
  console.log(results);
  console.log("stop or not");
}

names()


function results(){
  promise2.then((res)=>console.log(res))

}



   
    
  
  





