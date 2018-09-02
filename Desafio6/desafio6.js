




function getLocalList(key) {
    if(typeof(key) === 'string') {
        var savedObj = localStorage.getItem(key);
        if(savedObj == undefined || savedObj === null) {
            var lista = [];
            return lista;
        } else {
            return savedObj;
        }
    }
}