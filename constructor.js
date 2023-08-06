function Flight(Airline,AirlineNumber){
this.Airline=Airline;
this.AirlineNumber=AirlineNumber;
this.display=function(){
    console.log(this.Airline);
    console.log(this.AirlineNumber);
};
}

var fl1=new Flight("Mishra","AA124");
var fl2=new Flight("nitish","B222");
fl1.display();
fl2.display();
console.log(fl1 instanceof Flight);

console.log(fl2 instanceof Flight);
