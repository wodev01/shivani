app.service('ContactService', ['$location','$state',
    function ($location,$state) {
    var uid = 4;
    var contacts = [{
             id: 0,
            'name': 'Viral',
            'email': 'hello@gmail.com',
            'salary' : 10000,
            'phone': '123-234-4004'
        },
        {
            id: 1,
            'name': 'Viral1',
            'email': 'hello11@gmail.com',
            'salary' : 10000,
            'phone': '123-234-4004'
        },
        {
            id: 2,
            'name': 'Viral2',
            'email': 'hello22@gmail.com',
            'salary' : 10000,
            'phone': '123-234-4004'
        },
        {
            id: 3,
            'name': 'Hello',
            'email': 'hello2ffff2@gmail.com',
            'salary' : 100003,
            'phone': '123-534-4004'
        }];

    //save method create a new contact if not already exists
    //else update the existing object
    var save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
    };
    //simply search contacts list for given id
    //and returns the contact object if found
    var get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
            console.log("-----",contacts);
        }
    };

    //iterate through contacts list and delete
    //contact if found
    var deletedata = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    };

    //simply returns the contacts list
    var list = function () {
        return contacts;
    };

    var empObj = {};
    var setEmployee = function(obj){
        empObj = obj;
    };

    var getEmployee = function(){
        return empObj;
    };

    return {
        save: save,
        list: list,
        deletedata : deletedata,
        get : get,
        setEmployee : setEmployee,
        getEmployee : getEmployee
    };
}]);