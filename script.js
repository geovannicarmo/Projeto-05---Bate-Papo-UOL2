

function receiveMessages(){

    let promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    
    
    promise.then(loadMessage);
    
    }
    
    function loadMessage(messages)
    {
    
        let arrayMessages = messages.data
        let msg=[];
    
        let cont=0;
    
        let batePapo = document.querySelector(".messages");
        batePapo.innerHTML=""
    
        
            const message=[]
        for(let i=0;i<arrayMessages.length;i++){
    
            message[i]= {
                from: arrayMessages[i].from,
                to: arrayMessages[i].to,
                text: arrayMessages[i].text,
                type: arrayMessages[i].type,
                time: arrayMessages[i].time,
            }
            if (message[i].type==="message"){
                
            msg[i]= `<div class="geral message1"><p>
            (${message[i].time})
            ${message[i].from}
            para  ${message[i].to}
            : ${message[i].text} ${i} 
            ${message[i].type}
            
            </p>
            </div>`;
            }

         

               else if (message[i].type==="private_message"){
                
                    msg[i]= `<div class="geral private_message1"><p>
                    (${message[i].time})
                    ${message[i].from}
                    para  ${message[i].to}
                    : ${message[i].text} ${i} 
                    ${message[i].type}
                    
                    </p>
                    </div>`;
                    }

                    else {
                
                        msg[i]= `<div class="geral status1"><p>
                        (${message[i].time})
                        ${message[i].from}
                        para  ${message[i].to}
                        : ${message[i].text} ${i} 
                        ${message[i].type}
                        
                        </p>
                        </div>`;
                        }
            
           if(message[i].type!=="private_message"||message[i].to===nickname.name){
                
                batePapo.innerHTML +=msg[i];
                cont++;
                }         
             
        }
    
        teste=batePapo.querySelectorAll(".geral")
       
        teste[cont-5].scrollIntoView();
    
    
        
       
    
    }
    
    
    function logIn(nome){
    
    
    
    
    let request =axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nickname)
    
    request.then(tratarSucesso);
    request.catch(tratarError);
    
    
    }
    
    
    function tratarSucesso()
    {
        receiveMessages()
        setInterval(conected, 4000);
        setInterval(receiveMessages, 2500);
    
    }
    
        function conected(nome){
    
        
            
            let request =axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nickname)
            
           
            
            
            }
    
    
    function tratarError(erro)
    {
        
    
        if(erro.response.status===400) 
        {
            nome = (prompt("Digite outro nome de usuario por favor."))
    
            nickname = {
                name: nome
            }
           
    
            logIn()
        }
        
    }
    
    
    function send(){
    
        let messageSent=document.querySelector("input")
    
        
       
        shippingRequisition = 
    
        {
            from: nickname.name,
            to: "Todos",
            text: messageSent.value,
            type: "message" 
        }
    
        
    
        const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', shippingRequisition);
    
       
    
        requisicao.then(enviada);
        requisicao.catch(noSend);
    
    }
    
    function enviada(){
    
        receiveMessages()
    }
    
    function noSend(erro){
    
        const statusCode = erro.response.status;
        window.location.reload()
    }
    
    nome = ("donaltio")
    
    let nickname = {
        name: nome
    }
    
    
    
    logIn()