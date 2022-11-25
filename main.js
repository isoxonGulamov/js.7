let WorldCup = [
  {
    id: 1,
    name: "England",
    price: 10000,
    score: 20,

  },
  {
    id: 2,
    name: "Xorvatiya",
    price: 100,
    score: 30,
  },
  {
    id: 3,
    name: "Germaniya",
    price: 130,
    score: 40,
  },
  {
    id: 4,
    name: "Ispaniya",
    price: 200,
    score: 50,
  },
  {
    id: 5,
    name: "Belgiya",
    price: 300,
    score: 60,
  },
  {
    id: 6,
    name: "Brazilya",
    price: 400,
    score: 70,
  },
  {
    id: 7,
    name: "Fransiya",
    price: 500,
    score: 80,
  },

  {
    id: 8,
    name: "Portugaliya",
    price: 600,
    score: 90,
  },


]
let nomi = "a"

while (nomi) {
  nomi = prompt("Jahon Chempionatiga qaysi terma jamoaga muxlisiz")
  let yesnot = false
  for (let teams of WorldCup) {
    if (teams.name.toLowerCase() == nomi.toLowerCase()) {
      yesnot = true
    }
  }
  let soni = 0
  if (yesnot) {
    soni = Number(prompt(`Siz bu ${nomi} terma jaomaga turnirda g'alaba qozonishi uchun necha ball berasiz`))
  } else {
    alert(`Bu  ${nomi} terma jamoa yutish ehtimoli 1%.Boshqa Terma jamoa tanlang `)
  }


  if (soni > 0) {

    for (let i = 0; i <WorldCup.length;i++) {
      if (soni <= WorldCup[i].score && WorldCup[i].name.toLowerCase() == nomi.toLowerCase()) {
        alert("Siz tanlagan terma jamoaning reytingi balli --"+ soni*Number(WorldCup[i].price) + "--yetdi")
        // console.log(soni);
        // console.log(WorldCup.);
      }else if (soni > WorldCup[i].score && WorldCup[i].name.toLowerCase() == nomi.toLowerCase()){
        alert(`Siz tanlagan ${nomi} terma jamoasi eng yuqori reyting darajasi ==> ${WorldCup[i].score} ball .Iltimos bu terma jamoaga katta reyting bermang. `)
        break;
      } 
  }

}

}

