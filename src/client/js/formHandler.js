function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userinput = document.getElementById('name').value

    console.log(userinput)
    //Client.checkForName(formText)


    postData('/',{info:userinput}) 
    .then(()=>{
        sentimentInfo('/sentiment')
    })
    .then(()=>{
        updateUI()
    })
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

    const sentimentInfo = async (url) =>{

        const response = await fetch('/sentiment')
        try{

            const sentiment = await res.json();

            return sentiment;
        }catch(error){
            console.log(error)
        }
    }

    const updateUI = async () => {
        const request = await fetch('/sentiment');
        try{
            const sentimentData = await request.json();

            document.getElementById('polarity').innerHTML = sentimentData.polarity;
            document.getElementById('polarity_confidence').innerHTML = sentimentData.polarity_confidence;
            document.getElementById('subjectivity').innerHTML = sentimentData.subjectivity;
            document.getElementById('subjectivity_confidence').innerHTML = sentimentData.subjectivity_confidence;
        }catch(error){
            console.log(error)
        }
    }
    


export { handleSubmit }
