const animal={
    cat:{name:"タマ",age:3,color:"black"},
    dog:{name:"ポチ",age:4,color:"white"}
};

console.log(animal.cat.name);
console.log(animal["cat"]["age"]);

console.log(animal["dog"].color);
console.log(animal.dog["color"])