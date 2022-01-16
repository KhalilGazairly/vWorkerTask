function inbutSubmit(){

    var arr = document.getElementsByName('card-input');
    let sum=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
        sum += parseInt(arr[i].value);
    }

    return sum;
}


function brexSubmit(e){
    console.log(e);
    var sum = inbutSubmit();

    var brex = sum*0.3;
    
    var unlimited_rewards = sum*1.1;
    var lifetime_rewards = sum*1.2;



    var amx_details = `
                    <tr >
                            <td >
                        <label for="card-progres">Brex Bussniss Card</label>
                        </td>
                        <td>
                            <progress id="card-progres" value="${brex}" max="1000"> </progress>
                        </td>
                        <td >
                        <span>$${(brex).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                        </td>
                    </tr>
                    <tr>
                            <td class="unlimited-row">
                                <label for="unlimited">Unlimited rewards </label>
                            </td>
                            <td>
                                <progress id="unlimited" value="${unlimited_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="unlimited-row">$${(unlimited_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
                    <tr>
                            <td class="life-row">
                                <label for="lifetime">Lifetime rewards</label>
                            </td>
                            <td>
                                <progress id="lifetime" value="${lifetime_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="life-row">$${(lifetime_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
`

    document.getElementById("card-row").innerHTML = amx_details;
}

function strSubmit(){
    var sum = inbutSubmit();
    
    var stripe = sum*2.9;
    
    var unlimited_rewards = sum*1.1;
    var lifetime_rewards = sum*1.2;

 
    var stripe_details = `
                    <tr >
                            <td >
                        <label for="card-progres">Stripe Bussniss Card</label>
                        </td>
                        <td>
                            <progress id="card-progres" value="${stripe}" max="1000"> </progress>
                        </td>
                        <td >
                        <span>$${(stripe).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                        </td>
                    </tr>
                    <tr>
                            <td class="unlimited-row">
                                <label for="unlimited">Unlimited rewards </label>
                            </td>
                            <td>
                                <progress id="unlimited" value="${unlimited_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="unlimited-row">$${(unlimited_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
                    <tr>
                            <td class="life-row">
                                <label for="lifetime">Lifetime rewards</label>
                            </td>
                            <td>
                                <progress id="lifetime" value="${lifetime_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="life-row">$${(lifetime_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
`
    document.getElementById("card-row").innerHTML = stripe_details;
}

function amxSubmit(){
    var sum = inbutSubmit();
    
    var amex = sum*1.3;
    
    var unlimited_rewards = sum*1.1;
    var lifetime_rewards = sum*1.2;


    var amex_details = `
                    <tr >
                            <td >
                        <label for="card-progres">Amex Bussniss Card</label>
                        </td>
                        <td>
                            <progress id="card-progres" value="${amex}" max="1000"> </progress>
                        </td>
                        <td >
                        <span>$${(amex).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                        </td>
                    </tr>
                    <tr>
                            <td class="unlimited-row">
                                <label for="unlimited">Unlimited rewards </label>
                            </td>
                            <td>
                                <progress id="unlimited" value="${unlimited_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="unlimited-row">$${(unlimited_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
                    <tr >
                            <td class="life-row">
                                <label for="lifetime">Lifetime rewards</label>
                            </td>
                            <td>
                                <progress id="lifetime" value="${lifetime_rewards}" max="1000"> </progress>
                            </td>
                            <td >
                                <span class="life-row">$${(lifetime_rewards).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            </td>
                    </tr>
`
    document.getElementById("card-row").innerHTML = amex_details;
}

