let btnTest = document.getElementsByClassName('button-test');
let colorRate = [
    ["red",'btn-1'],
    ["green",'btn-2'],
    ["yellow",'btn-3'],
    ["AntiqueWhite",'btn-4'],
    ["Aqua",'btn-5'],
    ["BlueViolet",'btn-6'],
    ["Brown",'btn-7'],
    ["DarkOrange","btn-8"],
    ["DarkSlateBlue","btn-9"],
    ["Fuchsia","btn-10"],
    ["Gray","btn-11"]
];
function btnColorChanging(btnTest,colorRate){
    for(let i = 0;i<btnTest.length; i++){ 
        btnTest[i].addEventListener("mouseover",()=>{ 
            // let indexNumber = [];
            // indexNumber.push(btnTest[i]);
            colorRate[i][1] = btnTest[i];
            if(btnTest[i] == colorRate[i][1]){
                btnTest[i].addEventListener('click',function(){
                    document.body.style.backgroundColor = colorRate[i][0];
                })
            }
        })
    }
}
btnColorChanging(btnTest,colorRate)
// console.log(colorRate)
// let num = [20,40,50,60];
// num.indexOf()