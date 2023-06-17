

const maxLength = 50;  // Set Max input length(100chars)

function adjustWidth(input){
    if(input.value.length==0){
        // check if input box is empty
        input.style.width='initial';
        
    }else if(input.value.length>20 && input.value.length<maxLength){
        // Increase input width by 6 px on each key press
        // reserve some extra space(5*6px) for 
        // better user experience
        input.style.width = (input.value.length*15)+(5*10) + 'px';    
    }
}

function addExperience(){
    document.getElementById('company').innerHTML+='<div class="text companyName"><input type="text" placeholder="Company Name"/></div> <div class="text companyLocation"><input type="text" placeholder="location"/></div> <div class="text roleName"><input type="text" placeholder="Role"/></div> <div class="text roleDuration"><input type="text" placeholder="Duration"/></div>';
}

function removeExperience(){   
    document.getElementById('company').innerHTML-='<div class="text companyName"><input type="text" placeholder="Company Name"/></div> <div class="text companyLocation"><input type="text" placeholder="location"/></div> <div class="text roleName"><input type="text" placeholder="Role"/></div> <div class="text roleDuration"><input type="text" placeholder="Duration"/></div>';
 
}