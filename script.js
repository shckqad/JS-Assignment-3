//Creating an Object Model for ID card and coming up with a formula to work expiry date //
function idCard(name, expiryDate) {
  this.name = name;
  this.expiryDate = new Date(expiryDate);
  this.currentDay = new Date();
  this.checkExpiration = function () {
    var difference = this.currentDay.getTime() - this.expiryDate.getTime();
     var sign = Math.sign(difference);
     if (sign == 1) {
       return true;
     } else{
       return false;
     }
   };
this.expiry = this.checkExpiration();
//ID card array
var visitor1 = new idCard('Jack Black', '2022/06/03');
var visitor2 = new idCard('Bellela Thorne', '2022/06/03');
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

this.checkDays = function(){
  this.difference = this.today.getTime() - this.doseTwo.getTime();
  var difference = Math.floor(difference / 86400000);
  return difference;
};
    var checkStatus = function(index){
      if(idArray[index].expiry == false) {
        return 'ID expired';
      }
      else if(idArray[index].name == this.name){
        return 'Fraud! Name does not match';
      }
      else if (!this.doseOne){
        return 'NO VACCINATION';
      }
      else if(!this.doseTwo){
        return 'NO SECOND DOSE!';
      }
      else if(this.checkDays() < 14){
        return '14 DAYS HAVE NOT PASSED!';
      }
      else{
        return 'Fully Vaccinated!';
      }
   };
}
//creating vaccine array.

var visitor4 = new vaxCard('Jack Black', '2022/11/03');
var visitor5 = new vaxCard('Bellela Thorne', '2022/12/03');
var visitor6 = new vaxCard('Amanda Joseph', '2020/06/03');

var vaxCardArray = [visitor4, visitor5, visitor6];

for (var i = 0; i < vaxCardArray.length; i++) {
document.write("<tr>");
document.write("<td>", idArray[i].name, "</td>");
document.write("<td>", vaxCardArray[i].checkDifference(i), "</td>");
document.write("</tr>");
}
}
