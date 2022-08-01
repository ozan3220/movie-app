import axios from "axios";
export const getMovie={

data(){
return{
    result:{},
randomPage:Number,
}
},
methods:{
async roll(imdb,genre){
    let found=false
    while(found==false){
        this.randomPage=(Math.floor(Math.random() * 500)+1)
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=15924b5f3d7a9f3d0638df7b72cad0ab&with_genres=${genre}&page=${this.randomPage}`)
        .then(res=>{
            let checked=[]
            while(checked.length<=19){
               let randomIndex=Math.floor(Math.random() * 20)
               
               if(checked.indexOf(randomIndex)== -1)
                checked.push(randomIndex);

                const movie=res.data.results[randomIndex]
               
                if(movie.vote_average>=imdb){
                    found=true;
                    console.log(movie);
                    this.result=movie;
                    break;
                }    
            }
        }
            );
    }
}
}
}