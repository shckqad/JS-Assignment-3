//Creating an Object Model for ID card and coming up with a formula to work expiry date //
function idCard(name, expiryDate) {
  this.name = name;
  this.expiryDate = new Date(expiryDate);
  this.currentDay = new Date();
  this.checkExpiration = function () {
    //Formula to validate ID expiration.
    var difference = this.expiryDate.getTime() - this.currentDay.getTime();
     var sign = Math.sign(difference);
     if (sign == -1) {
       return true;
     } else{
       return false;
     }
    };
this.expired = this.checkExpiration();
}

//ID card array
var visitor1 = new idCard('Jack Black', '2022/06/03');
var visitor2 = new idCard('Bellela Thorne', '2022/01/13');
var visitor3 = new idCard('Amanda Joseph', '2020/06/03');

var idArray = [visitor1, visitor2, visitor3];

//vaccine card object model
function vaxCard(name, doseTwo, doseOne){
 this.name = name;
 this.doseOne = new Date (doseOne);
 this.doseTwo = new Date(doseTwo);
 this.checkExpiry = function(index) {
    if (idArray[index].name == this.name){
        return true;
    } else{
        return false;
    }
   };
  }

//Vaccine Card Vaccine Formula finding out whether the Vaccine was taking 14 days > or <
this.checkDays = function(){
  this.difference = this.today.getTime() - this.doseTwo.getTime();
  var difference = Math.floor(difference / 86400000);
  return difference; //Make use of checkDays Function!
};

//Vaccine card array

var visitor4 = new vaxCard('Black Jack', '2022/06/03');
var visitor5 = new vaxCard('Bellela Thorne', '2022/01/13');
var visitor6 = new vaxCard('Amanda Joseph', '2020/06/03');

var vaxCardArray = [visitor4, visitor5, visitor6];

// For Loop and Document write to place table in website

for (var i = 0; i < idArray.length; i++) {
  document.write('<tr>')
  document.write('<td>', idArray[i].name , '</td>')
  //Representer of ID expiration
if (idArray[i].expired == true) {
  document.write('<td>ID EXPIRED</td>')}
  //Formula for name and ID check!
else if(vaxCardArray[i].name !== idArray[i].name){
  document.write('<td>Name Unmatched</td>')//Replace with Unmatched names instead of ID Expired
} else {
  document.write('<td>Name Matched!</td>');
}
document.write('</tr>')
}
if (vaxCardArray[i].date >= 14) {
  console.log('Vaccine Approved')
}
