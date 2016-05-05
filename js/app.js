document.addEventListener("DOMContentLoaded", function(){

  var item= document.querySelector(".item");
  var quantity=document.querySelector(".quantity");
  var price=document.querySelector(".price");
  var addItemButton=document.querySelector(".addItem");//guzik dodawania itemow do tabeli
  var table= document.querySelector("table");//zmienna odnoszaca sie do tabeli i jej dzieci,potem.
  var overallSum=document.querySelector("#sumOfAllItems");//zmienna ktora bedzie mi wyliczac calkowita kwote, bez wartoci z przekreślenia
  var suma=0;//definiuje zmienna sume, ktora poczatkowo bedzie przybierac wartosc 0

  function odswiezSume(){//na koncu definiuje zmienna ktora bedzie wrzucac aktualne dane, tzn bez wartosci z przekreslenia
    overallSum.children[1].innerHTML=suma;
  }
  odswiezSume();//wywoluje funkcje!!!

addItemButton.addEventListener("click", function(event){//definiuje event klikniecia dla guzika dodaj item
  console.log("click");
  var newItem=item.value;//definiuje zmienne, ktore odnosic sie beda do przedmiotu/ilosci/ceny
  var newQuantity=quantity.value;
  var newPrice=price.value;
  var singleItemCost=newPrice*newQuantity;//definiuje zmienna ktora w komorke z kwota bedzie mi mnozyc ilosc*cena
//kazy nowy wiersz bedzie jednym itemem, bedzie mial guzik przekreslenia, nazwe itemu,ilosc,cene i wartosc przemnoszonej ilosci przez cene
  console.log(newItem, newQuantity, newPrice, singleItemCost);//wrzucam na kosole nowe zmienne zeby zobaczyc czy dzialaja
  var newTr = document.createElement("tr");//tworze nowe zmienne, wiersz i kolejne komorki w tym wierszu
  var newTd1 = document.createElement("td");
  var newTd2 = document.createElement("td");
  var newTd3 = document.createElement("td");
  var newTd4 = document.createElement("td");
  var newTd5 = document.createElement("td");


  var button=document.createElement("button");//tworze nowa zmienna ktora bedzie tym oim guzikiem przekreslenia w tabeli
  button.innerHTML="Skreśl przedmiot";//za pomoca innerhtml daje jej wartosc skresl przedmiot
  newTd1.appendChild(button);
  console.log("przypisuje");//sprawdzam wrzucajac na konsole czy dziala
//guzik przekreslenia
  button.addEventListener("click", function(event){//skoro mam juz ten button moge przypisac mu event ktory sprawi ze po kliknieciu dane z tego wiersza zostana przekreslone i ze do calosci nie beda brane pod uwage pola z przekreslenia
  console.log(event);
  event.target.parentNode.parentNode.children[1];//musze zaczac od indeksu 1!!!!!! bo zerowym jest ten guzik
  console.log(event.target.parentNode.parentNode.children[1]);
  console.log(parseFloat(event.target.parentNode.parentNode.children[4].innerHTML));
  suma-=parseFloat(event.target.parentNode.parentNode.children[4].innerHTML);//suma bedzie liczba!
  odswiezSume();//musze wywolac funkcje ktora wrzucilam na poczatek, ktora dawac bedzie do ogolnej kwoty aktualne dane
  for(var i=1; i<5; i++){//musze to zrobic petla, zby dla kazdego dziecka, dla kazdej komorki po dodaniu przekreslenia, przekresli mi wszystkie wartosci w rzedzie
    event.target.parentNode.parentNode.children[i].innerHTML="<s>" + event.target.parentNode.parentNode.children[i].innerHTML + "</s>";
  }//do przekreslania moge uzyc tagow html, s albo strike
});
  newTd2.innerHTML = newItem;//do wczesniej zdefiniowanych zmiennych i stowrznych nowych elemenow daje im wlasciwosc innerhtml
  newTd3.innerHTML = newQuantity;
  newTd4.innerHTML = newPrice;
  newTd5.innerHTML = singleItemCost;

  newTd5.classList.add("cenaItemu");

  newTr.appendChild(newTd1);
  newTr.appendChild(newTd2);
  newTr.appendChild(newTd3);
  newTr.appendChild(newTd4);
  newTr.appendChild(newTd5);

  table.lastElementChild.insertBefore(newTr, table.lastElementChild.lastElementChild);
 console.log(table.lastElementChild);
  suma+=singleItemCost;//do sumy mi doda obliczona wartosc itemu
  odswiezSume();
})
});//zamkniecie calej funkcji DOMContentLoaded
