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
export function getAllRecipesCategories(){
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
export function getMealDetail(mealId){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        }).then(res =>{
            console.log(res);
            // chaining (a?.b?.c) here if a doesnot work futher b doesn't process (only obj)
            resolve(res?.data?.meals?.[0])
        })
    })
}

export function getMealBySearchTerm(searchTerm){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        }).then(res =>{
            console.log(res);
            resolve(res?.data?.meals)
        })
    })
}

export function getMealsByFirstName(letter){
    return new Promise((resolve,reject)=>{
            axios({
                method:'get',
                url:`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
            }).then(res =>{
                resolve(res?.data?.meals)
            })
        }
    )
}