/* Chanukah Expo topic games - content per taken topic.
   All facts come from each topic's reading page (Alevsky booklet) and its quiz.
   The escape-room locks use the topic's existing quiz from data.js at runtime. */
window.EXPO_GAMES = {
"1": {
  match: [
    ["שמש", "The helper light, placed a little higher than the others"],
    ["בית הלל", "We add one more light every night, like this opinion"],
    ["A kosher מנורה", "Lights in one straight row, all at the same height"],
    ["Iron מנורה", "What they used after the original was stolen"],
    ["Silver מנורה", "The best material, if you can afford it"],
    ["Half hour", "The time we may not use the מנורה's light"]
  ],
  seq: [
    "Put the מנורה at the entrance, facing outside",
    "Set the 8 lights in a straight row, equal height",
    "Place the שמש a little higher than the rest",
    "Light when it gets dark",
    "Add one more light each night",
    "Let the lights shine for others to see"
  ],
  who: [
    {a:"The שמש", c:["I am one of the lights on the מנורה, but I am not counted in the 8.", "I sit a little higher than the other lights.", "If someone uses the מנורה's light, we say they used mine."]},
    {a:"The iron מנורה", c:["I am a מנורה from the Chanukah story.", "I was not the original - I replaced one that was stolen.", "I am made of a plain metal, not silver or gold."]},
    {a:"A fancy store מנורה that is not kosher", c:["I look beautiful in a Judaica store.", "My lights go up like stairs.", "You should not use me, because my lights are not in one straight row at the same height."]},
    {a:"The בעל שם טוב", c:["I am a great teacher in this topic's reading.", "I taught that we can learn a lesson in serving ה' from everything we see or hear.", "The מנורה lessons in the reading start with my teaching."]}
  ],
  tf: [
    {s:"The lights of a kosher מנורה can be at different heights, like stairs.", t:false, fix:"The lights must be in one straight row, all at the same height."},
    {s:"The שמש is placed a little higher than the other lights.", t:true},
    {s:"Two people can light two sides of the same מנורה.", t:false, fix:"Two people cannot light different sides of one מנורה - it would not be clear how many lights were meant."},
    {s:"During the half hour of the מצוה we may use the מנורה's light for reading.", t:false, fix:"During the half hour we may not benefit from the מנורה's light; the שמש is there in case someone does."},
    {s:"The original מנורה was stolen, so on Chanukah they used an iron one.", t:true},
    {s:"A מנורה facing outside teaches us to bring the light of תורה to others.", t:true}
  ],
  gap: [
    {b:"The lights of a kosher מנורה must be in one straight", a:"row", w:"of equal height."},
    {b:"The", a:"שמש", w:"is placed a little higher than the rest of the lights."},
    {b:"The original מנורה was stolen, so they used an", a:"iron", w:"one."},
    {b:"If you can afford it, a", a:"silver", w:"מנורה is best."},
    {b:"We light the מנורה at", a:"nightfall", w:"to brighten up the darkness."}
  ],
  jeop: [
    {cat:"Kosher or not", qa:[
      ["Lights set like stairs, at different heights", "Not kosher - lights must be in one straight row, equal height",10],
      ["A מנורה made of silver", "Kosher - silver is the best material",20],
      ["Two people lighting two sides of one מנורה", "Not allowed - it would not be clear how many lights were meant",30]]},
    {cat:"The שמש", qa:[
      ["Where the שמש sits", "A little higher than the other lights",10],
      ["Why the שמש is higher (simple reason)", "So it is clear it is not one of the 8 Chanukah lights",20],
      ["The deeper lesson of the שמש", "We light up others with תורה and מצוות, like the שמש lights the others",30]]},
    {cat:"Lessons from the מנורה", qa:[
      ["Adding a light every night teaches", "Even if we did well yesterday, we can still add and improve",10],
      ["Lighting facing outside teaches", "To brighten other people's lives with the light of תורה",20],
      ["Lighting at nightfall teaches", "To bring light to places and people still in the dark",30]]}
  ]
},
"2": {
  match: [
    ["כהן גדול", "His seal proved the jug of oil was still pure"],
    ["One day", "How long the oil in the jug should have lasted"],
    ["Eight days", "How long it actually burned - and how long new oil took"],
    ["חכמה", "Wisdom - oil is compared to this, because it rises above"],
    ["שבט אשר", "The olives for the מנורה came from their land, near Tekoa"],
    ["יחידה", "The level of the נשמה that always stays holy and pure"]
  ],
  seq: [
    "The יוונים break the seals and make the oil טמא",
    "The Jews search the בית המקדש for pure oil",
    "They find one jug, sealed by the כהן גדול",
    "The jug has enough oil for one day",
    "New pure oil takes eight days to prepare",
    "ה' makes a miracle: the oil burns all eight days"
  ],
  who: [
    {a:"The jug of pure oil", c:["I was found after an intense search in the בית המקדש.", "I held enough oil for only one day.", "My seal from the כהן גדול proved I was still טהור."]},
    {a:"שבט אשר", c:["I am one of the שבטים.", "יעקב אבינו blessed me with an abundance of oil.", "The olives for the מנורה came from near Tekoa, in my land."]},
    {a:"יחידה", c:["I am one of the 5 levels of the נשמה.", "My name means unity or alone.", "I am an actual part of ה' - nothing can ruin me."]},
    {a:"Olive oil", c:["I am a liquid that rises above other liquids.", "I am compared to חכמה.", "I am the best choice for the Chanukah lights, because the miracle happened with me."]}
  ],
  tf: [
    {s:"The Jews knew the jug was pure because it had the seal of the כהן גדול.", t:true},
    {s:"The jug they found held enough oil for eight days.", t:false, fix:"It held enough for one day; the miracle made it last eight."},
    {s:"The הלכה said they could not have used טמא oil even if they had to.", t:false, fix:"טומאה הותרה בציבור - for the public need they could have used it; they wanted only the best."},
    {s:"Oil is compared to חכמה because it rises above other liquids.", t:true},
    {s:"Only olive oil is allowed for the Chanukah lights.", t:false, fix:"All kinds of oil are fit; olive oil is best because the miracle happened with it."},
    {s:"Only the very first drop from each olive was used for the מנורה in the בית המקדש.", t:true}
  ],
  gap: [
    {b:"The jug was sealed with the seal of the", a:"כהן גדול", w:"so they knew it was pure."},
    {b:"Each jug had enough oil to burn for", a:"one", w:"day."},
    {b:"To prepare new oil would take", a:"eight", w:"days."},
    {b:"שמן is compared to", a:"חכמה", w:"because it rises above the rest."},
    {b:"The olives for the מנורה came from near Tekoa, in the land of שבט", a:"אשר", w:"."}
  ],
  jeop: [
    {cat:"The jug", qa:[
      ["How they knew the oil was pure", "The seal of the כהן גדול",10],
      ["How much oil was in the jug", "Enough for one day",20],
      ["Why new oil took eight days", "That is how long preparing new pure oil took - and the oil lasted until then",30]]},
    {cat:"Deep ideas", qa:[
      ["What oil is compared to", "חכמה - wisdom",10],
      ["What the one pure jug teaches about us", "Every Jew has a pure point inside that nobody can ruin",20],
      ["The level of נשמה that can never be defiled", "יחידה",30]]},
    {cat:"Lighting with oil", qa:[
      ["Best oil for Chanukah lights", "Olive oil, because the miracle happened with it",10],
      ["Which part of the olive was used in the בית המקדש", "Only the very first drop",20],
      ["If you have no olive oil", "Choose an oil that burns with a clean, clear flame",30]]}
  ]
},
"3": {
  match: [
    ["לאטקעס", "Latkes - fried food for Chanukah"],
    ["סופגניות", "Doughnuts"],
    ["Dairy foods", "Eaten to remember Yehudis' story"],
    ["Fried in oil", "Remembers the miracle of the oil"],
    ["Salty cheese", "What made Holofernes so thirsty"],
    ["Yehudis", "The brave daughter of Yochanan the כהן גדול"]
  ],
  seq: [
    "Yehudis dresses in her finest gowns and goes to the camp",
    "She brings rolls, salty cheese and old wine",
    "Holofernes invites her to his feast",
    "She feeds him the salty cheese, chunk after chunk",
    "He drinks more and more strong wine",
    "He falls to the ground, dead drunk - and the Jews are saved"
  ],
  who: [
    {a:"A סופגניה (doughnut)", c:["I am a Chanukah food.", "I am fried in oil, to remember the miracle.", "I am sweet and round, not a potato pancake."]},
    {a:"Yehudis", c:["I was the daughter of Yochanan the כהן גדול.", "I brought my own food to the Greek general's feast.", "My bravery saved the Jews of Besulia."]},
    {a:"Salty cheese", c:["I am a food in the Yehudis story.", "The general loved me, chunk after chunk.", "I made him very, very thirsty."]},
    {a:"A latke", c:["I am a Chanukah food fried in oil.", "Avraham Avinu and the Maccabees never ate me.", "I am made from potatoes."]}
  ],
  tf: [
    {s:"We eat foods fried in oil to remember the miracle of the oil.", t:true},
    {s:"We eat dairy on Chanukah because there was no meat then.", t:false, fix:"We eat dairy to remember the miracle of Yehudis and her cheese."},
    {s:"Yehudis gave the general sweet cake to make him sleepy.", t:false, fix:"She fed him salty cheese, which made him thirsty for strong wine."},
    {s:"סופגניות are doughnuts.", t:true},
    {s:"The Maccabees ate potato latkes at the first Chanukah.", t:false, fix:"Potatoes were not around then."},
    {s:"Yehudis was the daughter of Yochanan the כהן גדול.", t:true}
  ],
  gap: [
    {b:"On Chanukah we eat foods fried in", a:"oil", w:"to remember the miracle."},
    {b:"We eat", a:"dairy", w:"foods to remember the story of Yehudis."},
    {b:"Yehudis fed the general salty", a:"cheese", w:"chunk after chunk."},
    {b:"The cheese made Holofernes so", a:"thirsty", w:"that he drank more and more wine."},
    {b:"סופגניות are", a:"doughnuts", w:"."}
  ],
  jeop: [
    {cat:"Why we eat it", qa:[
      ["Latkes and doughnuts", "Fried in oil, to remember the miracle of the oil",10],
      ["Dairy foods", "To remember the miracle of Yehudis",20],
      ["חנוכה געלט and dreidel", "More Chanukah customs listed together with the foods",30]]},
    {cat:"The Yehudis story", qa:[
      ["Who Yehudis was", "The brave daughter of Yochanan the כהן גדול",10],
      ["What she brought", "Crusty rolls, salty cheese and old wine",20],
      ["Why the wine worked", "The salty cheese made him thirsty, so he drank until he was drunk",30]]},
    {cat:"Riddles", qa:[
      ["How do we know Avraham Avinu did not eat potato latkes on Chanukah?", "There was no Chanukah yet in his time",10],
      ["How do we know the Maccabees did not eat potato latkes?", "Potatoes were not in their part of the world yet",20],
      ["What sufganiyot are", "Doughnuts",30]]}
  ]
},
"5": {
  match: [
    ["The war", "A small band of Jews defeated mighty armies"],
    ["The oil", "One day's supply burned for eight days"],
    ["על הנסים", "The תפילה of thanks we add every day of Chanukah"],
    ["אנטיכוס", "The king who sent army after army"],
    ["Seven days", "How long the oil miracle seems to be, since day one had oil"],
    ["Open miracle", "Clearly above nature, not hidden"]
  ],
  seq: [
    "אנטיכוס sends army after army against the Jews",
    "The small band of Jews wins back the land and בית המקדש",
    "They clean up the בית המקדש",
    "They find one jug of pure oil - enough for one day",
    "They light the מנורה",
    "The oil burns for eight days"
  ],
  who: [
    {a:"על הנסים", c:["I am a תפילה.", "I am said every day of Chanukah.", "I thank ה' for the miracles, the mighty acts and the wars."]},
    {a:"אנטיכוס", c:["I was a king.", "I sent army after army, each bigger than the last.", "My biggest army lost to a small band of Jews."]},
    {a:"The one jug of oil", c:["I was found after the בית המקדש was cleaned.", "I should have lasted only one day.", "I lasted eight days - an open miracle."]},
    {a:"The eighth day", c:["People ask why I exist.", "The oil miracle seems to be only seven days, because day one had its own oil.", "One answer: they put in only 1/8 of the jug each day, so even day one was a miracle - and I am celebrated too."]}
  ],
  tf: [
    {s:"The two miracles of Chanukah are winning the war and the oil lasting eight days.", t:true},
    {s:"Al Hanissim says ה' gave the mighty into the hands of the strong.", t:false, fix:"He gave the mighty into the hands of the weak."},
    {s:"The Chanukah miracle was hidden inside nature.", t:false, fix:"It was open - clearly above nature."},
    {s:"When the Greek army saw יהודה in the last battle, they got scared and fought each other.", t:true},
    {s:"The oil miracle was really only seven days, because the first day had its own oil.", t:true},
    {s:"We say על הנסים only on the first day of Chanukah.", t:false, fix:"We say it every day during Chanukah."}
  ],
  gap: [
    {b:"ה' performed a great miracle, and our small band of faithful Jewish warriors", a:"defeated", w:"one of the mightiest armies on earth."},
    {b:"They found only one jug of pure olive oil, enough to burn for", a:"one", w:"day."},
    {b:"The one-day supply burned for", a:"eight", w:"days."},
    {b:"על הנסים thanks ה' for the miracles, the redemption, the mighty acts, the saving acts and the", a:"wars", w:"."},
    {b:"You delivered the mighty into the hands of the", a:"weak", w:", the many into the hands of the few."}
  ],
  jeop: [
    {cat:"Two miracles", qa:[
      ["The two miracles we celebrate", "Winning the war, and the oil lasting eight days",10],
      ["Open or hidden?", "Open - clearly above nature",20],
      ["Why the oil miracle seems like only seven days", "Day one already had its own oil",30]]},
    {cat:"על הנסים", qa:[
      ["When we say it", "Every day during Chanukah",10],
      ["The mighty were given into the hands of...", "The weak",20],
      ["What the Jews did after entering the holy place", "Cleaned the היכל, purified, kindled the lights and made 8 days of Chanukah",30]]},
    {cat:"Seven or eight?", qa:[
      ["Answer 1: the 1/8 answer", "They put only 1/8 of the jug in each day, so every day was a miracle",10],
      ["Answer 2: the jug answer", "After filling the מנורה, the jug was still full every day",20],
      ["Answer 3: the cups answer", "Each morning the cups were still full after burning all night",30]]}
  ]
},
"6": {
  match: [
    ["Dreidel", "Yiddish for top or spinning thing"],
    ["נ ג ה ש", "נס גדול היה שם - a great miracle happened there"],
    ["נ ג ה פ", "What dreidels say in ארץ ישראל - it happened here"],
    ["ג (גאַנץ)", "Take the whole pot"],
    ["ש (שטעל)", "Put one in"],
    ["משיח", "The letters נגהש have the same גמטריא as this word"]
  ],
  seq: [
    "The Greeks forbid children to learn תורה",
    "The children keep learning in secret, in fields and caves",
    "They bring a dreidel with them wherever they go",
    "Greek soldiers' footsteps are heard coming",
    "The books disappear and out comes the dreidel",
    "The soldiers are invited to join a game"
  ],
  who: [
    {a:"The dreidel", c:["I am a toy connected to Chanukah.", "I was really a secret cover-up for learning תורה.", "I have 4 letters on my sides."]},
    {a:"The letter ג", c:["I am a letter on the dreidel.", "In the game I am the best letter to spin.", "When you land on me you take the whole pot."]},
    {a:"The letter ש", c:["I am a letter on the dreidel.", "In ארץ ישראל I am replaced by פ.", "When you land on me you put one in."]},
    {a:"The gragger", c:["I am a toy, but not for Chanukah.", "I belong to פורים.", "I am twirled from the bottom, not spun from the top."]}
  ],
  tf: [
    {s:"נ ג ה ש stands for נס גדול היה שם - a great miracle happened there.", t:true},
    {s:"In ארץ ישראל the ש is replaced by a ת.", t:false, fix:"It is replaced by a פ, for פה - here."},
    {s:"Children played dreidel to hide that they were learning תורה.", t:true},
    {s:"Landing on ה means you take the whole pot.", t:false, fix:"ה means half - you take half the pot."},
    {s:"The letters נגהש have the same גמטריא as משיח.", t:true},
    {s:"We spin the dreidel from the bottom and the gragger from the top.", t:false, fix:"Dreidel is spun from the top; the gragger is twirled from the bottom."}
  ],
  gap: [
    {b:"The word dreidel means top or spinning thing in", a:"Yiddish", w:"."},
    {b:"The 4 letters stand for נס גדול היה", a:"שם", w:"- a great miracle happened there."},
    {b:"In ארץ ישראל dreidels say נס גדול היה", a:"פה", w:"- a great miracle happened here."},
    {b:"When you spin a ג, you take the whole", a:"pot", w:"."},
    {b:"The letters נגהש have the same גמטריא as", a:"משיח", w:"."}
  ],
  jeop: [
    {cat:"The letters", qa:[
      ["What נ ג ה ש stands for", "נס גדול היה שם - a great miracle happened there",10],
      ["What is different in ארץ ישראל", "פ instead of ש - a great miracle happened here",20],
      ["The גמטריא of נגהש equals", "משיח",30]]},
    {cat:"How to play", qa:[
      ["נ - nothing", "Do nothing",10],
      ["ג - gantz", "Take the whole pot",20],
      ["ש - shtel", "Put one in",30]]},
    {cat:"The cover-up", qa:[
      ["Why the Greeks were extra harsh to children", "As long as children learned תורה, their mission would fail",10],
      ["What the children did when soldiers came", "Hid the books and played dreidel",20],
      ["Why we spin from the top", "Chanukah's miracle was clearly from Above, higher than nature",30]]}
  ]
},
"10": {
  match: [
    ["Yehudis", "Brave daughter of Yochanan the כהן גדול who saved Besulia"],
    ["Holofernes", "The wicked Greek general who laid siege to the town"],
    ["Chana", "The mother of seven brave sons"],
    ["Uzzia", "Commander of the Jewish fighters in Besulia"],
    ["Salty cheese and wine", "Yehudis' plan to make the general drunk"],
    ["The king's ring", "The trick to make it look like the boy bowed"]
  ],
  seq: [
    "Holofernes lays siege to Besulia and cuts off food and water",
    "Yehudis says she has a plan and goes to the enemy camp",
    "She feeds Holofernes salty cheese and strong wine",
    "He falls to the ground, dead drunk",
    "Yehudis brings his head back to the city",
    "At dawn the Jews attack, and the enemy flees in terror"
  ],
  who: [
    {a:"Yehudis", c:["I spent my time davening and helping others.", "I brought cheese and wine to the enemy general.", "I saved the Jews of Besulia."]},
    {a:"Chana's youngest son", c:["I was only seven years old.", "The king offered me gold, silver and a high position.", "I refused to bow, even to pick up his ring."]},
    {a:"Holofernes", c:["I was a mighty general.", "I laid siege to the town and cut off its food and water.", "A woman's cheese and wine were my downfall."]},
    {a:"Chana", c:["I was a mother in the Chanukah story.", "All seven of my sons chose ה' over the king.", "I told my last son to tell Avraham: I gave ה' seven sons."]}
  ],
  tf: [
    {s:"Yehudis brought the general gold and silver.", t:false, fix:"She brought crusty rolls, salty cheese and old wine."},
    {s:"Chana had seven sons.", t:true},
    {s:"The king threw his ring down so it would look like the boy bowed.", t:true},
    {s:"The children who played dreidel stopped learning תורה when it got dangerous.", t:false, fix:"They kept learning - the dreidel hid their learning."},
    {s:"Yehudis compared her plan to Yael, through whom ה' delivered Sissera.", t:true},
    {s:"Uzzia the commander encouraged Yehudis to go right away.", t:false, fix:"He tried to discourage her from the dangerous mission, but she insisted."}
  ],
  gap: [
    {b:"Holofernes laid", a:"siege", w:"to the town and cut off the food and water supply."},
    {b:"Yehudis was the daughter of Yochanan the", a:"כהן גדול", w:"."},
    {b:"She fed him the salty cheese, and he washed it down with strong", a:"wine", w:"."},
    {b:"Chana had", a:"seven", w:"sons."},
    {b:"The king threw his", a:"ring", w:"on the floor, so everyone would think the boy bowed."}
  ],
  jeop: [
    {cat:"Yehudis", qa:[
      ["What she brought to the general", "Crusty rolls, salty cheese and old wine",10],
      ["Why the salty cheese mattered", "It made him thirsty, so he drank wine until he was drunk",20],
      ["What happened at dawn", "The Jews attacked; the enemy saw their commander's head and fled",30]]},
    {cat:"Chana and her sons", qa:[
      ["How many sons", "Seven",10],
      ["The ring trick", "The king threw his ring down so it would look like the boy bowed to pick it up",20],
      ["Chana's message to Avraham", "You offered one son; I gave ה' seven",30]]},
    {cat:"The dreidel kids", qa:[
      ["What was forbidden", "Children learning תורה",10],
      ["Where the children learned", "At home, in the fields, in the mountains and caves",20],
      ["What happened when soldiers came", "The books disappeared and the dreidel came out",30]]}
  ]
},
"11": {
  match: [
    ["חנוכה celebration", "הלל and הודאה - praise and thanks, a spiritual way"],
    ["פורים celebration", "ימי משתה ושמחה - feasting and joy"],
    ["אנטיכוס", "King of the Chanukah story"],
    ["אחשוורוש", "King of the Purim story"],
    ["מרדכי ואסתר", "The heroes of Purim"],
    ["Persia", "Where the Purim story happened"]
  ],
  seq: [
    "In Persia, המן makes a decree against the Jews",
    "מרדכי and אסתר save the Jews - the first Purim",
    "Years later, the Greeks rule ארץ ישראל",
    "אנטיכוס makes decrees against keeping תורה",
    "The Maccabees fight back and win",
    "The בית המקדש is rededicated - the first Chanukah"
  ],
  who: [
    {a:"פורים", c:["My miracle was hidden, clothed in nature.", "My celebration is with the body - a festive meal.", "My toy is twirled from the bottom."]},
    {a:"חנוכה", c:["My miracle was open, clearly above nature.", "My celebration is spiritual - praise and thanks.", "My toy is spun from the top."]},
    {a:"מרדכי ואסתר", c:["We are heroes, but not of Chanukah.", "Our story happened in Persia.", "Our king was אחשוורוש."]},
    {a:"The gragger", c:["I am the toy of פורים.", "I am twirled from the bottom.", "One reason: on פורים the Jews worked hard and earned the miracle."]}
  ],
  tf: [
    {s:"Purim happened before Chanukah.", t:true},
    {s:"The Chanukah story happened in Persia.", t:false, fix:"It happened in ארץ ישראל; Purim happened in Persia."},
    {s:"On Chanukah the decree was mainly against our bodies.", t:false, fix:"On Chanukah the decree was against our נשמות; on Purim they wanted our bodies."},
    {s:"We spin the dreidel from the top and twirl the gragger from the bottom.", t:true},
    {s:"Chanukah's miracle happened slowly, over a few years.", t:false, fix:"That is Purim; Chanukah's miracles were quick and obvious."},
    {s:"The heroes of Chanukah are the Maccabees - the חשמונאים.", t:true}
  ],
  gap: [
    {b:"On חנוכה the main celebration is הלל and", a:"הודאה", w:"- praise and thanksgiving."},
    {b:"On פורים the decree was against our", a:"bodies", w:", so we celebrate with a festive meal."},
    {b:"פורים happened in", a:"Persia", w:", and חנוכה happened in ארץ ישראל."},
    {b:"We spin the dreidel from the", a:"top", w:"and twirl the gragger from the bottom."},
    {b:"The heroes of פורים are מרדכי and", a:"אסתר", w:"."}
  ],
  jeop: [
    {cat:"Which is which", qa:[
      ["Feasting and joy, with the body", "Purim",10],
      ["הלל and הודאה, spiritual", "Chanukah",20],
      ["Oily latkes and donuts, and dairy", "Chanukah",30]]},
    {cat:"The stories", qa:[
      ["Which came first", "Purim",10],
      ["Where Chanukah happened", "ארץ ישראל",20],
      ["The king of each story", "Purim: אחשוורוש; Chanukah: אנטיכוס",30]]},
    {cat:"Top and bottom", qa:[
      ["Dreidel is spun from...", "The top",10],
      ["Why from the top", "Chanukah's miracle was clearly from Above, higher than nature",20],
      ["Why the gragger is from the bottom", "Purim's miracle was hidden in nature - and the Jews worked and earned it",30]]}
  ]
},
"15": {
  match: [
    ["חנו-כה", "They rested on the 25th"],
    ["Dedication", "Another meaning of the word חנוכה"],
    ["חנוכת הבית", "The celebration after the בית המקדש was cleaned"],
    ["The משכן", "Completed on the 25th of כסלו, years earlier in the desert"],
    ["חינוך", "Education - חנוכה comes from this word"],
    ["ח' נרות והלכה כבית הלל", "What the letters of חנוכה stand for"]
  ],
  seq: [
    "ח - 8",
    "נ - נרות (lights)",
    "ו - והלכה (and the law)",
    "כ - כבית (like Beis)",
    "ה - הלל (Hillel)"
  ],
  who: [
    {a:"חנו-כה", c:["I am two Hebrew words joined together.", "כה is the number 25.", "I mean: they rested from their enemies on the 25th."]},
    {a:"The משכן", c:["I was the מקדש of the desert.", "I was completed on the 25th of כסלו, many years before the Chanukah story.", "My dedication was a few months later, on ראש חודש ניסן."]},
    {a:"חינוך", c:["I am a Hebrew word that means education.", "חנוכה comes from me.", "Rashi explains I help someone get to the place where they are supposed to be."]},
    {a:"חנוכת הבית", c:["I am a celebration for a home or holy place.", "People make me after settling into a new home to thank ה'.", "The חשמונאים made me after cleaning the בית המקדש and building a new מזבח."]}
  ],
  tf: [
    {s:"חנו-כה means they rested on the 25th.", t:true},
    {s:"The word חנוכה also means dedication.", t:true},
    {s:"The משכן in the desert was completed on the 15th of כסלו.", t:false, fix:"It was completed on the 25th of כסלו - the same date as Chanukah."},
    {s:"חנוכה is connected to חינוך, which means education.", t:true},
    {s:"The letters of חנוכה stand for: 8 lights, and the הלכה is like בית שמאי.", t:false, fix:"Like בית הלל - we add a light each night."},
    {s:"Good חינוך is only about how much you know.", t:false, fix:"How much we know is not as important as how much we do - good חינוך is good training."}
  ],
  gap: [
    {b:"חנו means they rested, and כה is the number", a:"25", w:"."},
    {b:"The word חנוכה also means", a:"dedication", w:"- like a חנוכת הבית."},
    {b:"The משכן in the desert was completed on the 25th of", a:"כסלו", w:"."},
    {b:"חנוכה comes from the word חינוך, which means", a:"education", w:"."},
    {b:"ח' נרות והלכה כבית", a:"הלל", w:"- 8 lights, and the law follows Beis Hillel."}
  ],
  jeop: [
    {cat:"The name", qa:[
      ["חנו-כה", "They rested on the 25th",10],
      ["Another meaning of חנוכה", "Dedication (or renewal)",20],
      ["The education word inside חנוכה", "חינוך",30]]},
    {cat:"Dedications", qa:[
      ["What was dedicated in the Chanukah story", "The בית המקדש - cleaned, with a new מזבח",10],
      ["What was completed on 25 כסלו in the desert", "The משכן",20],
      ["When the משכן's dedication was", "A few months later, on ראש חודש ניסן",30]]},
    {cat:"The acronym", qa:[
      ["What the letters stand for", "ח' נרות והלכה כבית הלל - 8 lights and the law follows Beis Hillel",10],
      ["What בית הלל say about lighting", "Add another light every night",20],
      ["The lesson from adding light nightly", "Always add more תורה and מצוות, no matter how well we did before",30]]}
  ]
},
"16": {
  match: [
    ["Gelt", "Money, in Yiddish"],
    ["The fifth night", "Especially for giving חנוכה געלט"],
    ["10%", "How much of your gelt goes to צדקה"],
    ["Long ago", "Kids stayed home, learned with parents, and were rewarded with gelt"],
    ["Chocolate coins", "Popular today, often used in dreidel games"],
    ["צדקה", "We increase in this during Chanukah, especially for poor תורה learners"]
  ],
  seq: [
    "Long ago, kids stayed home from school on Chanukah",
    "Parents had more time to learn with them",
    "Parents heard what they had learned in school",
    "The kids were rewarded for their learning with חנוכה געלט",
    "Today gelt still encourages learning - and 10% goes to צדקה"
  ],
  who: [
    {a:"חנוכה געלט", c:["My name is Yiddish.", "I mean money.", "Kids get me on Chanukah, especially on the fifth night."]},
    {a:"The fifth night", c:["I am one of the nights of Chanukah.", "All nights are fine for gelt, but I am special.", "I am the night especially for giving חנוכה געלט."]},
    {a:"Chocolate gelt", c:["I am a modern kind of gelt.", "I am wrapped in gold or silver foil.", "I am often used instead of money in dreidel games."]},
    {a:"10%", c:["I am a fraction of your gelt.", "I do not stay with you.", "I go to צדקה."]}
  ],
  tf: [
    {s:"Gelt means money in Yiddish.", t:true},
    {s:"Long ago, kids got gelt as a reward for their learning.", t:true},
    {s:"Half of your gelt should go to צדקה.", t:false, fix:"10% of the money goes to צדקה."},
    {s:"The first night is especially for gelt.", t:false, fix:"The fifth night is especially for חנוכה געלט."},
    {s:"Chocolate coins are often used in place of money in dreidel games.", t:true},
    {s:"On Chanukah we should decrease in צדקה.", t:false, fix:"We should increase in צדקה, especially for poor people who learn תורה."}
  ],
  gap: [
    {b:"Gelt means", a:"money", w:"in Yiddish."},
    {b:"Kids were rewarded for their fine", a:"learning", w:"with חנוכה געלט."},
    {b:"10% of the gelt goes to", a:"צדקה", w:"."},
    {b:"The", a:"fifth", w:"night is especially for חנוכה געלט."},
    {b:"Chocolate coins are wrapped in gold or silver", a:"foil", w:"."}
  ],
  jeop: [
    {cat:"Gelt basics", qa:[
      ["What gelt means", "Money, in Yiddish",10],
      ["The special night for gelt", "The fifth night",20],
      ["How much goes to צדקה", "10%",30]]},
    {cat:"Why gelt?", qa:[
      ["Why kids got gelt long ago", "A reward for their learning",10],
      ["Why parents had time to learn with the kids", "Kids stayed home from school in celebration of Chanukah",20],
      ["What gelt encourages today", "Learning תורה - and giving צדקה",30]]},
    {cat:"Gelt today", qa:[
      ["Chocolate coins wrapped in foil", "Chocolate gelt",10],
      ["Where chocolate gelt is often used", "In dreidel games, instead of money",20],
      ["Who to increase צדקה for on Chanukah", "Poor people who learn תורה",30]]}
  ]
},
"17": {
  match: [
    ["פרסומי ניסא", "Publicizing the miracle - the whole point of the lights"],
    ["The doorway", "The best place to light, facing the street"],
    ["Left side", "Where the מנורה goes at the door - the מזוזה is on the right"],
    ["3 to 10 tefachim", "The best height for the מנורה"],
    ["20 amos", "Higher than this, the מצוה does not count"],
    ["The shul מנורה", "Lit with a ברכה, but nobody fulfills the מצוה with it"]
  ],
  seq: [
    "Choose the entrance of the home, facing the street",
    "Place the מנורה inside the doorway",
    "Put it within one tefach of the left doorpost",
    "Set it between 3 and 10 tefachim above the ground",
    "Light it so people outside can see",
    "Everyone at home still lights their own מנורה"
  ],
  who: [
    {a:"פרסומי ניסא", c:["I am two Hebrew words.", "I mean publicizing the miracle.", "I am the reason we light where people can see."]},
    {a:"The shul מנורה", c:["I am lit with a ברכה.", "I am placed on the south side of the shul, between מנחה and מעריב.", "Nobody fulfills the מצוה through me - each person lights at home."]},
    {a:"A tefach", c:["I am a small measurement, about 4 inches.", "The מנורה should be between 3 and 10 of me above the ground.", "At the doorway, the מנורה sits within one of me from the left doorpost."]},
    {a:"20 amos", c:["I am a height limit.", "An amah is about 18 inches, and I am 20 of them.", "A מנורה higher than me does not count - people do not look up that high."]}
  ],
  tf: [
    {s:"The best place for the מנורה is the doorway, facing the street.", t:true},
    {s:"At the door, the מנורה goes on the right side, next to the מזוזה.", t:false, fix:"It goes on the left side, opposite the מזוזה - surrounded by מצוות."},
    {s:"A מנורה placed higher than 10 tefachim never counts.", t:false, fix:"Above 10 tefachim you still fulfilled the מצוה; above 20 amos it does not count."},
    {s:"Lighting in shul counts for your home.", t:false, fix:"No - each person still lights their own מנורה at home."},
    {s:"In Israel, many families light outside near the doorway so people passing by see the lights.", t:true},
    {s:"When ראש חודש טבת falls on שבת, we read from three ספרי תורה.", t:true}
  ],
  gap: [
    {b:"פרסומי ניסא means", a:"publicizing", w:"the miracle."},
    {b:"The מנורה should be lit at the entrance, facing the", a:"street", w:", where most people can see it."},
    {b:"At the doorway, the מנורה goes within one tefach of the", a:"left", w:"doorpost."},
    {b:"A מנורה higher than 20", a:"amos", w:"does not count."},
    {b:"The shul מנורה is lit between מנחה and", a:"מעריב", w:"."}
  ],
  jeop: [
    {cat:"Where to light", qa:[
      ["The best place", "At the doorway, facing the street",10],
      ["Which side of the door", "The left side, opposite the מזוזה",20],
      ["Backup places", "A window facing the street, or near the front door",30]]},
    {cat:"How high", qa:[
      ["The best height", "Between 3 and 10 tefachim",10],
      ["Above 10 tefachim", "You still fulfilled the מצוה",20],
      ["Above 20 amos", "The מצוה does not count - light again",30]]},
    {cat:"In shul and shul readings", qa:[
      ["Why we light in shul", "For פרסומי ניסא, with a ברכה",10],
      ["Does the shul lighting count for home?", "No - everyone lights their own at home",20],
      ["Three ספרי תורה on שבת ראש חודש טבת", "Parshas hashavuah, ראש חודש, and the הפטרה for חנוכה",30]]}
  ]
},
"18": {
  match: [
    ["מתתיהו", "The old כהן who started the revolt"],
    ["מודיעין", "The small town where מתתיהו lived with his five sons"],
    ["מי לה' אלי", "מתתיהו's cry - whoever is for ה', follow me"],
    ["יהודה המכבי", "The son who led the army"],
    ["מי כמוכה באלים ה'", "What the word מכבי stands for"],
    ["שמעון", "The last surviving brother, who led the people to peace"]
  ],
  seq: [
    "A מתיון prepares to slaughter a pig on a מזבח in public",
    "מתתיהו stops him and cries: מי לה' אלי",
    "מתתיהו, his five sons and a small group flee to the hills",
    "They fight a guerrilla war against the mighty armies",
    "מתתיהו appoints יהודה as military leader",
    "יהודה's army wins, and they clean the בית המקדש and light the מנורה"
  ],
  who: [
    {a:"מתתיהו", c:["I was a frail old man, but a giant in spirit.", "I was the son of יוחנן the כהן גדול, from the חשמונאי family.", "I began the rebellion with the cry מי לה' אלי."]},
    {a:"יהודה המכבי", c:["I was one of מתתיהו's five sons.", "I was appointed military leader.", "My name is an acronym for מי כמוכה באלים ה'."]},
    {a:"מקבת", c:["I am a Hebrew word.", "I mean a hammer used in battles.", "Some say יהודה was called מכבי because of me - his fist and leadership were like a hammer."]},
    {a:"שמעון", c:["I was one of the five brothers.", "מתתיהו appointed me as spiritual advisor.", "I was the last surviving brother and led the people to complete peace."]}
  ],
  tf: [
    {s:"מתתיהו started the revolt against the Greeks.", t:true},
    {s:"מתתיהו lived in Yerushalayim.", t:false, fix:"He lived in the small town of מודיעין."},
    {s:"מכבי is short for מי כמוכה באלים ה'.", t:true},
    {s:"מתתיהו had seven sons.", t:false, fix:"He had five sons."},
    {s:"יהודה was appointed the spiritual advisor.", t:false, fix:"שמעון was the spiritual advisor; יהודה led the army."},
    {s:"When the armies saw יהודה in the last battle, they were terrified and fought each other.", t:true}
  ],
  gap: [
    {b:"מתתיהו lived with his five sons in the small town of", a:"מודיעין", w:"."},
    {b:"He cried מי לה'", a:"אלי", w:"- whoever is for ה', follow me!"},
    {b:"The word מכבי is an acronym for מי כמוכה", a:"באלים", w:"ה'."},
    {b:"מתתיהו had", a:"five", w:"sons."},
    {b:"The בית המקדש was out of our hands for about", a:"three", w:"years."}
  ],
  jeop: [
    {cat:"The family", qa:[
      ["Who started the revolt", "מתתיהו",10],
      ["How many sons he had", "Five",20],
      ["The last surviving brother", "שמעון",30]]},
    {cat:"מכבי", qa:[
      ["What מכבי stands for", "מי כמוכה באלים ה'",10],
      ["The hammer word behind מכבי", "מקבת",20],
      ["What יהודה told his men before the final battle", "Not power or weapons win a war - ה' will fight for us",30]]},
    {cat:"The name חשמונאים", qa:[
      ["What חשמונאי means", "Distinguished - great and famous",10],
      ["The town some say the family came from", "חשמון",20],
      ["The hidden 8 in the name", "חש-שמונאים: they felt the eight - and חַ (8) שְׁמוֹנָ (8)",30]]}
  ]
}
};
