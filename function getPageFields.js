//option 1

function getPageFields(doc, p){
    var fields = [];

    for (var i=0; i<doc.numFields; i++){
        var f = doc.getField(doc.getNthFieldName(i));
        
        if ((typeof f.page=="number" && f.page==p) || (typeof f.page!="number" && f.page.indexOf(p)>-1)){
            fields.push(f.name);

        }

    }

    return fields;
}
    
    //You can then get all the fields' names on the first page like this:
    getPageFields(this, 0);

//option 2

// get a list of field names and some properties;

console.show();

console.clear();

console.println("Number of fileds: " + this.numFields);

for(var i = 0; i < this.numFields; i++)

{

console.println((i + 1) + ": " + this.getNthFieldName(i));

}