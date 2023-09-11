const person={
        village:'Ramgarh',
        district:'Sultanpur',
        fullname:function(){
        return this.firstname+' ' + this.lastname
    }
}

const person1={
    firstname:'Nitish',
    lastname:'Mishra'
}

const res=person.fullname.bind(person1);
console.log(res);