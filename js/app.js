function outFunc(){
    function getCat(catName){
        const res=`猫名：「${catName}」`;
        return res;
    }

    console.log(getCat("タマ"));
}

outFunc();
console.log(getCat("大福"));