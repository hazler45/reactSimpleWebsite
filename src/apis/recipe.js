import axios from 'axios';
export function getAllRecipesByCategory(category){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        }).then(res =>{
            console.log(res);
            resolve(res.data.meals)
        })
    })
}
export function getAllRecipesByCategories(){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:'https://www.themealdb.com/api/json/v1/1/categories.php'
        }).then(res =>{
            console.log(res);
            resolve(res.data.categories)
        })
    })
}