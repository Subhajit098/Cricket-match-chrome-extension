let url="https://api.cricapi.com/v1/currentMatches?apikey=1ff7c8ff-6ca2-4966-af47-8c952bc0f0b6&offset=0";

const getMatchData = async()=>{
   try{
    const res  = await fetch(url);
    const data = await res.json();
    if(data.status!="success") return "failed to load resources right now!";

    const matchList = data.data;

    if(!matchList) return [];
    const relevantData = matchList.map(match=>` Match Name :${match.name},Status of the match: ${match.status}`)

    console.log({relevantData});

    document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join("");

   return relevantData;

   }
   catch(err){
    console.log(err);
   }
}

getMatchData();