export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userinput = document.getElementById('name').value

    console.log(userinput)
    if(Client.textChecker(userinput)){


    postData('http://localhost:8081/',{userData:userinput}) 
    .then(res=>{
        updateUI(res)
    })}

    else{
        console.log('please enter some text');
    }

    

    const postData = async (url='',data = {}) =>{
        
      
        const response = await fetch(url,{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        });

        try{

            const newData = await response.json();

            return newData;
        }catch(error){
            console.log(error)
        }
    }


    const updateUI = async (res) => {
        
        try{
        

            // document.getElementById('polarity').innerHTML = `Polarity: ${sentimentData.polarity}`;
            // document.getElementById('polarity_confidence').innerHTML = `Polarity confidence: ${sentimentData.polarity_confidence}`;
            document.getElementById('subjectivity').innerHTML = `subjectivity: ${res.subjectivity}`;
            document.getElementById('subjectivity_confidence').innerHTML =  `subjectivity_confidence: ${res.confidence}`;
        }catch(error){
            console.log(error)
        }
    }
    
}


