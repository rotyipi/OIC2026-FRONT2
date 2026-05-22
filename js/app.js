function getCat(catName,age,sex){
    const res=`猫名：「${catName}」、年齢${age}、性別${sex}`;
    return res;
}

console.log(getCat("タマ",3))