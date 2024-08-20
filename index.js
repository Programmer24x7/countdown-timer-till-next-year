const targetdate = new Date('2025-01-01T00:00:00');
function updatetime(){
    const currentdate = new Date();

    const timediff= targetdate - currentdate;

    const days = Math.floor(timediff/(1000*60*60*24));
    const hours = Math.floor((timediff%(1000*60*60*24))/(1000*60*60));
    const mins = Math.floor(((timediff)%(1000*60*60))/(1000*60));
    const sec = Math.floor((timediff)%(1000*60)/(1000));
    document.getElementById('countdown').innerHTML= `${days}D ${hours}H ${mins}M ${sec}S`; 
    setTimeout(updatetime,1000);
}
updatetime();