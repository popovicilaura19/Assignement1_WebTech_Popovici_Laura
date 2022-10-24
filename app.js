function hash(input, dictionary) {
	if(typeof input!='string'){
        throw new Error('Input should be a string');
    }
   dictionary.forEach(element => {
    if(typeof element!='string')
    throw new Error('Invalid dictionary format');
   });
   var newString='';
   dictionary.forEach(element=>{
    const values=input.split(' ');
    values.forEach(value=>{
        if(element===value){
            const valueToReplace=value.slice(1,-1);
            const firstLetter=value.slice(0,1);
            const lastLetter=value.slice(value.length-1);
            value=firstLetter;
            for(var i=0;i<valueToReplace.length;i++){
                value+='#';
            }
            value+=lastLetter;
        }

    newString+=value;
    newString+=' ';
    }
    )
   })
   return newString;
	
}

const app = {
	hash
};

module.exports = app;
