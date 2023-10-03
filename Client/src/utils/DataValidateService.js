function DataValidateService(object, ruleset, fieldNameList) {
   let error = null;
   let errorText = null;
   error = ruleset.map((rule) => {
      let field = Object.keys(rule)[0];
      let ruleVaslue = rule[field];
      return Validate(object[field], ruleVaslue) ? null : {field, ruleVaslue}
   });
   error = error.filter(item => item !== null);
   error.length > 0 && (errorText = getErorText(error, fieldNameList));
   return {error, errorText};
}

function Validate(value, rule) {
   switch (rule) {
      case "IS NOT NULL":
         return (value === undefined || value.length == 0)?  false : true;
      // case "":
      //    break;
      // case "":
      //    break;
      // case "":
      //    break;
   }
}
function getErorText(error, fieldNameList){
   const errorstring = error.map((errorItem)=>{
      switch(errorItem.ruleVaslue){
         case "IS NOT NULL": return `Не заполнено обязательное поле ${fieldNameList[errorItem.field]};`;
         // case "": return ``;
         // case "": return ``;
         // case "": return ``;
      }
   }).join('\n');
   return errorstring.substring(0, errorstring.length-1) + '.';
}

export default DataValidateService;
