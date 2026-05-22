function growOldCat(cat){
    cat.age=cat.age+1;
}

const catObj={name:"タマ",age:3}
console.log(`${catObj.name}${catObj.age}歳`)

growOldCat(catObj)
console.log(`${catObj.name}${catObj.age}歳`)