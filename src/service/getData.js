import data from './feed/sample.json';

export const getData = (type = 'movie') => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.entries.filter((data)=>data.programType === type).sort((prev,curr)=>{
                return prev.releaseYear - curr.releaseYear
            }).filter((item,index)=>index < 21));
        },1000)
    });
}