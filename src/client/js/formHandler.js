export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userinput = document.getElementById('name').value

    console.log(userinput)
    if(Client.textChecker(userinput)){


    fetch('http://localhost:8081/', {
        
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({userData:userinput}),
        })
    .then(res=>{

        try{
        
            document.getElementById('subjectivity').innerHTML = `subjectivity: ${res.subjectivity}`;
            document.getElementById('subjectivity_confidence').innerHTML =  `subjectivity_confidence: ${res.confidence}`;
        }catch(error){
            console.log(error)
        }
    })}

    else{
        console.log('please enter some text');
    }

    
}


    
