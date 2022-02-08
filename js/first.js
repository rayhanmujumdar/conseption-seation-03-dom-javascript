let btnTest = document.getElementsByClassName('button-test');
for(i = 0;i < btnTest.length;i++){
    let colorRate = ["red",'green','yellow','AntiqueWhite',"Aqua",'BlueViolet','Brown']
        if(btnTest[i] == btnTest[0] && colorRate[i] == colorRate[0]){
            btnTest[0].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[0];
            })
        }
        else if(btnTest[i] == btnTest[1] && colorRate[i] == colorRate[1]){
            btnTest[1].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[1];
            })
        }
        else if(btnTest[i] == btnTest[2] && colorRate[i] == colorRate[2]){
            btnTest[2].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[2];
            })
        }
        else if(btnTest[i] == btnTest[3] && colorRate[i] == colorRate[3]){
            btnTest[3].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[3];
            })
        }
        else if(btnTest[i] == btnTest[4] && colorRate[i] == colorRate[4]){
            btnTest[4].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[4];
            })
        }
        else if(btnTest[i] == btnTest[5] && colorRate[i] == colorRate[5]){
            btnTest[5].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[5];
            })
        }
        else if(btnTest[i] == btnTest[6] && colorRate[i] == colorRate[6]){
            btnTest[6].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[6];
            })
        }
        else if(btnTest[i] == btnTest[7] && colorRate[i] == colorRate[7]){
            btnTest[7].addEventListener("click",function(){
                document.body.style.backgroundColor = colorRate[7];
            })
        }
    }
