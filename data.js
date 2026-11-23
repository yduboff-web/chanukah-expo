/* =========================================================
   CHANUKAH EXPO – SITE DATA
   Everything the site shows comes from this file.
   Edit dates, topics, reading sheets and extra readings here.
   Groups and logins live in Firebase now, not in this file. See README.
   ========================================================= */

window.EXPO = {

  /* ---------------------------------------------------------
     DATES – shown on every group's Deadlines tab.
     date: "YYYY-MM-DD", or "" if not set yet (shows "Date coming").
     --------------------------------------------------------- */
  deadlines: [
    { date: "",           what: "Topic test" },
    { date: "2026-11-30", what: "Proposal and materials list due" },
    { date: "2026-12-01", what: "Last day to order materials" },
    { date: "2026-12-07", what: "Build day 1" },
    { date: "2026-12-08", what: "Build day 2" },
    { date: "2026-12-09", what: "Practice expo" },
    { date: "2026-12-10", what: "Expo day" }
  ],

  /* Which deadline the Proposal tab points to (index in the list above). */
  proposalDeadline: 1,

  /* ---------------------------------------------------------
     TOPICS
     pages:   where to read in the Alevsky booklet
     reading: simplified reading sheet – null until written.
              Use an array of paragraphs, or a link "https://…".
     extra:   approved chabad.org sheet – null until written.
     ideas:   booth ideas for the wheel (short = label on the wheel)
     quiz:    review game questions – a = right answer, w = wrong ones
     --------------------------------------------------------- */
  topics: [
    {
      n: 1, name: "Menorah",
      about: "The Menorah in the Beis Hamikdash and the one we light.",
      focus: "How the two menorahs are different, what makes a menorah kosher, and the lessons it teaches.",
      today: "How can your home be a menorah that shines outside?",
      pages: ["pp. 19–20", "pp. 24–25", "p. 35", "Kitzur pp. 3, 5, 8"],
            overview: "The menorah we light on Chanukah reminds us of the golden Menorah that stood in the Beis Hamikdash. There are rules that make a menorah kosher, and the menorah teaches us to shine our light outward, to others.",
      reading: [
        "The בעל שם טוב taught that we can - and should - learn a lesson in our service of ה', from everything we see or hear. What can we learn from the מנורה? Let's find out!",
        "We light the מנורה according to the opinion of בית הלל - we add another candle every night. Although we did the מצוה perfectly last night - we still “add” another light tonight... This shows, that even if yesterday we did what we could and should; we learned תורה and did our מצוות in the best way, we still add to what we do and improve in the things we already do.",
        "The מנורה should be put בחוץ - at the window or at the entrance of the house, towards the outside... Lighting the מנורה facing the outside teaches us that we should not be satisfied if everything is good and warm in our own homes. Rather, it is our job to help illuminate and brighten others' lives with the light of the מנורה. The “outside” can also refer to people who have not yet had the opportunity to learn as much as we did about ה', His תורה and מצוות.",
        "We light the מנורה at nightfall to brighten up the darkness of the night - the places that are spiritually “dark” and people whose lives are not yet “brightened” by the תורה and מצוות.",
        "The lights must be in one straight row of equal height. (Unfortunately, many of the artistic מנורות that are sold in Judaica stores are not Kosher, because their lights are at different heights. Like on stairs or different objects etc.) Two people cannot light different sides of the same מנורה or candelabra. If they would, it would not be clear (to another who sees it afterwards) how many lights are meant to be lit. (Kitzur Shulchan Aruch)",
        "The שמש should be a little higher than the rest of the lights, so it will be noticeable that it is not part of the חנוכה lights. (Kitzur Shulchan Aruch)",
        "Why is the שמש higher than the rest of the candles? The “regular” reason is so that it should be recognizable that the שמש is not part of the חנוכה Lights. The deeper explanation: The שמש lights the other candles. Spiritually, we are שמשים, as we light up our surroundings by our good example and by teaching others who know less than we do. One who lights up others with the light of תורה and מצוות - becomes elevated and higher - closer to ה'. This is why the שמש is placed above the others.",
        "The מנורה should (best) be made of a metal. If you can afford it, a silver מנורה is best. (Kitzur Shulchan Aruch)",
        "The original מנורה was stolen from the בית המקדש. On חנוכה, they used an iron replacement."
      ],
      extra: [
        "[1-a] There are not very many requirements for a kosher menorah, and most—but not all—of the menorahs on the market are just fine. The basic elements of the menorah are eight candle (or oil) holders, and one more, that is set apart from the rest, for the shamash (attendant) candle.",
        "Source: What Constitutes a Kosher Chanukah Menorah? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/591946/jewish/What-Is-a-Kosher-Menorah.htm",
        "Article's sources: The article is a practical guide and does not cite primary sources.",
        "[1-b] The eight candles of the menorah must be arranged in a straight line, not set in a semicircle. Similarly, the menorah's lights should be level or on an even slant, not some randomly higher than others.",
        "Source: What Constitutes a Kosher Chanukah Menorah? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/591946/jewish/What-Is-a-Kosher-Menorah.htm",
        "Article's sources: The article is a practical guide and does not cite primary sources.",
        "[1-c] Whenever purchasing a mitzvah article, we try to buy the most beautiful one that is within our means. So, if at all possible, go for the silver menorah. Beautifying a mitzvah is our way of expressing our appreciation to G-d, and how dearly we hold His commandments.",
        "Source: What Constitutes a Kosher Chanukah Menorah? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/591946/jewish/What-Is-a-Kosher-Menorah.htm",
        "Article's sources: The article is a practical guide and does not cite primary sources."
      ],

      ideas: [
        { short: "Kosher or not?", how: "Visitors sort menorah pictures into kosher and not kosher, using the rules on p. 20 and Kitzur p. 5." },
        { short: "Then and now", how: "A side-by-side display of the Menorah in the Beis Hamikdash and the menorah we light, showing what’s different." },
        { short: "Build it right", how: "Visitors build a kosher menorah from blocks or clay: lights in a straight row at the same height, shamash a little higher." },
        { short: "Menorah lessons", how: "Flip cards with the lessons on p. 19. Visitors guess each lesson before they flip." },
        { short: "Place the shamash", how: "Visitors put the shamash in the right spot and say why it goes there." }
      ],
      quiz: [
        { q: "Why are some fancy menorahs not kosher?", a: "The lights aren’t in a straight row at the same height", w: ["They’re made of silver", "They have a shamash", "They’re too small"], p: "Kitzur p. 5" },
        { q: "Where does the shamash go?", a: "A little higher than the other lights", w: ["Lower than the other lights", "In the middle, at the same height", "Anywhere on the table"], p: "Kitzur p. 8" },
        { q: "What happened to the original Menorah of the Beis Hamikdash?", a: "It was stolen, so they used an iron one", w: ["It broke in the battle", "It was hidden in a cave", "It was buried under the Mizbeach"], p: "p. 25" },
        { q: "Our menorah faces outside. What does that teach us?", a: "To bring the light of Torah to others too", w: ["To keep the house warm", "To let the smoke out", "To show the Greeks"], p: "p. 19" },
        { q: "We light the menorah when it gets dark. What does that teach us?", a: "To light up places and people that are still in the dark", w: ["That candles are cheaper at night", "That the Beis Hamikdash was dark", "That we should go to sleep early"], p: "p. 19" }
      ]
    },
    {
      n: 2, name: "Oil",
      about: "The one sealed jar, and what oil stands for.",
      focus: "The jar itself, why olive oil, and what oil stands for. (The Miracle and Number 8 groups cover the eight days.)",
      today: "What is the pure jar inside you that nobody can ruin?",
      pages: ["p. 12", "pp. 24–25", "pp. 31–32", "p. 34", "Kitzur p. 3"],
            overview: "The Jews searched the Beis Hamikdash and found only one small jug of pure oil, still sealed by the Kohen Gadol - and it burned for eight days. The oil teaches us that every Jew has a pure point inside that nobody can ruin.",
      reading: [
        "The oil that was used for the מנורה needed to be pure olive oil, untouched by others, and sealed with the seal of the כהן גדול. The יוונים had desecrated most of the oil and broke their seals. After an intense search, they finally found one jug of pure oil. Each jug had enough oil to burn in the מנורה for one day.",
        "To prepare new oil would take eight days. ה' caused another open miracle to occur and the oil burned for eight days, until they were able to prepare new oil.",
        "Yaakov Avinu blessed Shevet Asher with an abundance (a lot) of oil. The oil for the מנורה in the בית המקדש came from the olives near the city of Tekoa, which belonged to שבט אשר. Only the very first drop of oil from each olive, was allowed to be used for the מנורה.",
        "When mixed with other liquids, שמן - oil rises above the rest. שמן is compared to חכמה (wisdom) - which is one of the highest powers within a person. The יוונים tried to ruin our חכמה and tried to teach us all kinds of philosophies (ways of thinking) to mix up our שכל and stop us from learning תורה the real way - because it comes from ה'. They tried to make all the oil טמא (impure). Then we found one jug of pure oil. Which means that they didn't succeed in ruining our חכמה.",
        "PINTELE YID CANNOT BE RUINED. Each person is like a whole world. Many of the things that happen in the world also happen right inside us. The fact that they found a jug of pure, untouched oil, teaches us that there is a place within ourselves that always remains holy and pure. Nothing can ruin or defile it.",
        "WHY ONLY PURE OIL? The הלכה is that טומאה הותרה בציבור - In a situation where the public congregation needs it - the regular laws of טומאה/טהרה are pushed off. This means that the חשמונאים were really able to light the מנורה, even if they wouldn't have found the one jug of pure oil. Why then did the חשמונאים not use the טמא oil to light the מנורה? One answer is that the חשמונאים were operating on such a high spiritual level at the time - the level of מסירת נפש - that it was unthinkable for them to do a מצוה - anything less than the best possible way. This is why ה' performed the great miracle that the oil lasted for eight days, instead of one.",
        "All kinds of oil are fit to light the מנורה. It is best to use olive oil, because the miracle happened with olive oil. If you don't have olive oil, choose an oil that burns with a clean, clear flame. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[2-a] It looked the same, smelled the same, tasted the same. There was nothing in that little jar of oil to distinguish it from any other pure grade, olive oil. The only distinct thing about it was the seal of the high priest, signifying that it was ritually pure. But the Jews insisted on using only the ritually pure oil, and no other, to light the menorah in the Holy Temple, thus precipitating the renowned miracle of Chanukah.",
        "Source: Pure Oil - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/221817/jewish/Pure-Oil.htm",
        "Article's sources: The article is an essay and does not cite primary sources.",
        "[2-b] Ritual purity is a state that has no parallel in the physical universe; it exists solely in the world of the spirit. The Jewish tenacity in adhering to their rigorous rules of purity and impurity drove the rationalistic Greeks berserk. This was why, when plundering the Holy Temple, they defiled every jar of oil that they could get their hands on.",
        "Source: Pure Oil - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/221817/jewish/Pure-Oil.htm",
        "Article's sources: The article is an essay and does not cite primary sources.",
        "[2-c] The preferred way to fulfill the mitzvah of lighting the Chanukah Menorah is to use pure olive oil and wicks of cotton, for the resulting light is pure and clear; it also commemorates the Menorah in the Holy Temple which was lit with olive oil.",
        "Source: Oil or Candles for the Menorah? - Chabad.org (Rabbi Eliyahu Kitov) - https://www.chabad.org/holidays/chanukah/article_cdo/aid/105044/jewish/Oil-or-Candles-for-the-Menorah.htm",
        "Article's sources: Excerpted from Rabbi Eliyahu Kitov's \"The Book of Our Heritage\" (Feldheim)."
      ],

      ideas: [
        { short: "Oil floats", how: "Pour oil into water and show how it rises to the top. Explain why oil is compared to חכמה (p. 31)." },
        { short: "Find the pure jar", how: "Hide one jar with a “seal of the Kohen Gadol” among look-alikes. Visitors search for it." },
        { short: "Where it came from", how: "A map showing the olives of Tekoa, in the land of Shevet Asher (p. 25)." },
        { short: "The jar inside you", how: "A display about the pure jar inside every Jew that can’t be ruined (p. 32)." },
        { short: "Why only pure?", how: "A poster answering why they searched for pure oil when they didn’t have to (p. 34)." }
      ],
      quiz: [
        { q: "How did they know the jar of oil was pure?", a: "It had the seal of the Kohen Gadol", w: ["It was the biggest jar", "It was hidden under the Mizbeach", "It smelled different"], p: "p. 12" },
        { q: "How long should the oil in the jar have lasted?", a: "One day", w: ["Three days", "Eight days", "One hour"], p: "p. 12" },
        { q: "Which oil is best for the Chanukah lights?", a: "Olive oil, because the miracle happened with olive oil", w: ["Whatever oil is cheapest", "Only candle wax", "Any oil with a nice smell"], p: "Kitzur p. 3" },
        { q: "Oil rises above other liquids. The booklet compares oil to…", a: "חכמה, wisdom", w: ["Gold", "Water", "Strength in battle"], p: "p. 31" },
        { q: "The olives for the Menorah came from the land of which shevet?", a: "Asher", w: ["Yehuda", "Levi", "Binyamin"], p: "p. 25" }
      ]
    },
    {
      n: 3, name: "Food",
      about: "What we eat on Chanukah and why.",
      focus: "Foods fried in oil, dairy foods, and the reason behind each.",
      today: "How can a regular meal remind you of Hashem?",
      pages: ["p. 4", "p. 15", "pp. 47–50", "Kitzur p. 2"],
            overview: "On Chanukah we eat foods fried in oil, like latkes and donuts, to remember the miracle of the oil. We also eat dairy foods to remember the story of brave Yehudis and her cheese.",
      reading: [
        "On חנוכה, we light the מנורה, thank ה' in our Tefilos, eat foods fried in oil, (לאטקעס and סופגניות - doughnuts), play Dreidel and give “חנוכה געלט” to children. What a special time it is for all!",
        "Some of the חנוכה customs are: Eating foods fried in oil, like donuts and latkes - to remember the miracle of the oil. Eating Milchig - Dairy foods - to honor Yehudis' brave dairy Story (see the Yehudis story).",
        "Some eat dairy foods to remember the miracle (of Yehudis) that happened with dairy foods. (Kitzur Shulchan Aruch)",
        "YEHUDIS: Yehudis dressed in her finest gowns, anointed herself with oils and perfume and went towards the city gates. She was accompanied only by her faithful maid, who carried a basket filled with crusty rolls, salty cheese, and several bottles of old wine.",
        "That evening, when Yehudis entered Holofernes' tent, the table was laden with delicacies (all kinds of good nosh). The general invited her to join the feast. But Yehudis told him she had prepared her own food and wine special for him, and wanted him to taste it. “My goat cheese is famous in all of Besulia,” Yehudis said, “I'm sure you'll like it, general.”",
        "Holofernes loved the cheese. But it was so salty! “Please pour me a drink! Your delicious cheese makes me so thirsty” said Holofernes. “Ahhh - you will just love my wine!” smiled Yehudis. She fed him the salty cheese, chunk after chunk, and he washed it down with more and more of the strong wine. Before long, Holofernes was sprawled on the ground, dead drunk...",
        "It was a wonderful victory, and it was the G-d fearing and brave daughter of Yochanan the High Priest, the father of the Chashmonai family, who saved all the Jews of Besulia. Our heroine Yehudis, continues to inspire faith and courage in our hearts to this day.",
        "Ready for a Riddle? 1. How do we know that Avraham Avinu did not eat Potato Latkes on Chanukah? 2. How do we know that the Maccabees did not eat Potato Latkes on Chanukah?"
      ],
      extra: [
        "[3-a] The tradition of eating latkes on Chanukah derives from two events. First, foods cooked in oil commemorate the miracle of the Chanukah oil; second, cheese latkes recall the brave heroine Yehudis, who (in 164 BCE) helped save her people by slaying the vicious Greek general Holofernes with the help of a little cheese.",
        "Source: Why All the Oil and Cheese (and Potatoes)? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103095/jewish/Why-All-the-Oil-and-Cheese.htm",
        "Article's sources: The article does not cite primary sources.",
        "[3-b] Yehudis declined to eat his food—it wasn't kosher, after all—but she had brought her own, and a large wineskin to share with him. Charmingly, she plied him with salty cheeses; then, as he grew more and more thirsty, she offered him great quantities of wine to slake his thirst.",
        "Source: Why All the Oil and Cheese (and Potatoes)? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103095/jewish/Why-All-the-Oil-and-Cheese.htm",
        "Article's sources: The article does not cite primary sources."
      ],

      ideas: [
        { short: "Match it up", how: "Visitors match each Chanukah food to the reason we eat it." },
        { short: "Yehudis’s cheese", how: "A short poster of the Yehudis story that explains why we eat dairy (pp. 47–50)." },
        { short: "Recipe cards", how: "Hand out simple Chanukah recipe cards with the reason printed on each one." },
        { short: "Mystery bag", how: "Sealed, packaged foods with a hechsher in paper bags. Visitors guess the food and its reason." },
        { short: "Taste station", how: "Only if your teacher says yes: dairy or pareve foods with a hechsher." }
      ],
      quiz: [
        { q: "Why do we eat foods fried in oil?", a: "To remember the miracle of the oil", w: ["Because it’s winter", "Because the Greeks banned oil", "To remember the Mizbeach"], p: "p. 15" },
        { q: "Why do some people eat dairy on Chanukah?", a: "To remember the miracle of Yehudis", w: ["Because Chanukah is like Shavuos", "Because there was no meat then", "To remember the Kohen Gadol"], p: "p. 15" },
        { q: "What did Yehudis give the Greek general to make him thirsty?", a: "Salty cheese", w: ["Latkes", "Bread", "Olives"], p: "pp. 47–50" },
        { q: "What are sufganiyot?", a: "Doughnuts", w: ["Potato pancakes", "Cheese blintzes", "Olive cakes"], p: "p. 4" }
      ]
    },
    {
      n: 4, name: "בית הלל vs. בית שמאי",
      about: "Going up or going down each night.",
      focus: "The two opinions, why we follow בית הלל, and the two ways of thinking behind them.",
      today: "What’s one good thing you can add a little more of each day?",
      pages: ["pp. 18–19", "p. 22", "Kitzur p. 4"],
            overview: "The sages Beis Shammai and Beis Hillel argued about how to light: start with eight candles and count down, or start with one and add one every night. We follow Beis Hillel - we always add more light.",
      reading: [
        "בית שמאי vs. בית הלל: The גמרא (מסכת שבת) relates the מחלוקת (difference of opinion) between בית שמאי and בית הלל, about how we should light the מנורה.",
        "בית שמאי Says: on the first night, we should light 8 candles, on the second night 7, on the third 6 - and so on - one candle less each night.",
        "בית הלל Says: on the first night we light 1, on the second night 2, on the third night 3 - and so on - adding a candle each night.",
        "The גמרא brings 2 opinions about their reasoning: Opinion #1: 1. בית שמאי says to light as many candles - as the number of days still left to חנוכה. On the 1st day, light 8, because there are 8 days left. On the 3rd day, light 7, as there are seven days left. 2. בית הלל says to light the number of candles as the days that have already passed. On day 2, light 2, because it is the second day, etc.",
        "Opinion #2: 1. בית שמאי says we light less each night just like the קרבנות on סוכות, as they offer one Korbon less each night. 2. בית הלל says we must always increase in matters of holiness, not lessen.",
        "חנוכה is also an acronym for the words “ח' נרות והלכה כבית הלל” which means that we follow the הלכה of בית הלל in the way we light the מנורה. בית הלל holds that we should add one light to the מנורה each night. בית שמאי's opinion is that we start with 8 lights on the first night of חנוכה, 7 lights on the 2nd night, and work our way down to one light on the final night of חנוכה. We follow בית הלל, and the law is like בית הלל.",
        "The first night we light one candle. We add an additional light each night (the 2nd night, two candles, the third night, three and so on) until the eighth night, on which we light eight. (Kitzur Shulchan Aruch)",
        "On the first night, light the candle on the far right. On the second night, add a candle to its left and so on. Always light the newest candle first - the one on the left, and make your way towards the one on the right. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[4-a] \"מצות נר חנוכה נר איש וביתו והמהדרין נר לכל אחד ואחד והמהדרין מן המהדרין בית שמאי אומרים יום ראשון מדליק שמנה מכאן ואילך פוחת והולך בית הלל אומרים יום ראשון מדליק אחת מכאן ואילך מוסיף והולך\" — \"The basic commandment of Chanukah lights is for the head of the household to light one candle for the entire family each night. Those who want to enhance their fulfillment of mitzvot light one candle each night for each member of the household. Those who desire to enhance their observance of mitzvot even further... According to Beit Shammai, the first day one kindles eight candles, and henceforth continuously decreases. According to Beit Hillel, the first day one lights one candle, and henceforth continuously increases.\" (Shabbat 21b)",
        "Source: Questions and Answers on the Dispute on How the Menorah Is Lit - Chabad.org - https://www.chabad.org/library/article_cdo/aid/2829782/jewish/The-Dispute-on-How-the-Menorah-Is-Lit.htm",
        "Article's sources: This quotation is from Talmud, Shabbat 21b. Later discussion in the same article cites Rambam, Hilchot Chanukah 4:1; Rama, Orach Chaim 671:2; and Tosafot on Shabbat 21b."
      ],

      ideas: [
        { short: "Up or down?", how: "Two menorahs side by side, one counting up and one counting down." },
        { short: "Which night?", how: "Show a menorah. Visitors say which night it is by each opinion." },
        { short: "The Gemara", how: "Display the Gemara from Shabbos 21b (p. 22) with a simple translation." },
        { short: "Two ways", how: "A board showing both ways of fighting darkness and what each teaches us." },
        { short: "Add one more", how: "Visitors write one good thing they’ll add a little more of each day." }
      ],
      quiz: [
        { q: "How many lights does בית שמאי say to light on the first night?", a: "Eight", w: ["One", "Two", "Four"], p: "p. 18" },
        { q: "Whose opinion do we follow when we light?", a: "בית הלל", w: ["בית שמאי", "Both, on different nights", "Neither one"], p: "p. 18" },
        { q: "What does ח׳ נרות והלכה כבית הלל mean?", a: "Eight lights, and the halacha is like בית הלל", w: ["Light eight candles in the window", "בית הלל lit eight lights", "The eighth light is the shamash"], p: "p. 18" },
        { q: "Why does בית הלל add a light each night?", a: "We go up in holiness, not down", w: ["The oil got stronger each day", "It’s easier to count", "The Greeks lit that way"], p: "p. 22" },
        { q: "On the third night, how many lights would בית שמאי light?", a: "Six", w: ["Three", "Five", "Eight"], p: "p. 22" }
      ]
    },
    {
      n: 5, name: "What was the miracle?",
      about: "The war and the oil.",
      focus: "Both miracles, and why we thank Hashem for each one. (The Oil group covers the jar itself.)",
      today: "Where do you see Hashem helping you?",
      pages: ["p. 4", "pp. 11–14", "p. 21", "p. 24"],
            overview: "Was the main miracle of Chanukah the oil, the war, or something even deeper? This topic looks at what really happened, and why we celebrate for eight days.",
      reading: [
        "After cleaning up the mess in the בית המקדש they prepared to light the מנורה. They found only one jug of pure olive oil - enough to burn for one day. ה' performed another miracle, and the one-day supply burned for eight days.",
        "Each year we celebrate חנוכה to commemorate and publicize these miracles.",
        "HOW LONG WAS IT REALLY? We found enough oil to last for one day. We lit the מנורה and it lasted for eight days. That was a big נס. However, it seems that the נס itself was really only for seven days. We had enough oil for one day! Why do we light the מנורה for eight days, if the נס of the שמן was only for seven?",
        "There are many answers given to this question. Here are a few: The jug of oil they found had enough to burn for one full day. The חשמונאים figured that it would be better for the מנורה to be lit just a little bit every day, than to use it all up in one day. Therefore, they only put 1/8 of the jug of oil into the מנורה, thinking that it would burn for just a few hours. This small measure of oil lasted until the next day. They repeated this every day, for eight days, until they could make new oil. This way, the נס really was for eight full days, because even the first day was a נס.",
        "After they had filled all the cups of the מנורה, they found that the jug of oil was still full. This happened every day of the eight days.",
        "They actually filled up the “cups” of the מנורה on the first day, and each morning they found the cups of the מנורה still full, after burning all night.",
        "There are several more answers! Find some on your own!",
        "The story of חנוכה is summed up very well in the תפילה of praise and thanks we say daily during חנוכה - “על הנסים”: [We thank You ה'] על הנסים, ועל הפורקן, ועל הגבורות, ועל התשועות, ועל המלחמות (ועל הנפלאות) שעשית לאבותינו בימים ההם בזמן הזה. [Thank You!]"
      ],
      extra: [
        "[5-a] If there was enough oil in the flask to last one day, then the miraculous part was the oil lasting for the next seven days. Shouldn't Chanukah, which celebrates the miracle of the oil, be celebrated for just seven days? Many commentators, including Rabbi Yosef Caro himself, have proposed various answers to this question.",
        "Source: Why Is Chanukah 8 (Not 7) Days Long? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/459286/jewish/Why-Is-Chanukah-8-Not-7-Days-Long.htm",
        "Article's sources: The question is posed by Rabbi Yosef Caro in his commentary Beit Yosef (Orach Chaim 670), on Talmud, Shabbat 21b.",
        "[5-b] 1. Divided the oil: Knowing that it would take another eight days to procure pure oil, the Jews divided the jug of oil—which contained enough oil for only one night—into eight equal amounts. They figured that they would light one-eighth of the oil each of the next eight nights. Miraculously, each night, the oil that should have lasted only one-eighth of the night lasted for the entire night. 2. Jug remained full: After they filled the Menorah with oil on the first night, the jug remained full, and they were able to fill the Menorah the following night. The same thing happened the next seven days. 3. Menorah remained full: When the Jews entered the Sanctuary that first morning after lighting the Menorah, they found that the cups of the Menorah were still full of oil, despite having burned the entire night.",
        "Source: Why Is Chanukah 8 (Not 7) Days Long? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/459286/jewish/Why-Is-Chanukah-8-Not-7-Days-Long.htm",
        "Article's sources: Beit Yosef, Orach Chaim 670 (the article's footnotes for these three answers)."
      ],

      ideas: [
        { short: "War or oil?", how: "Visitors sort fact cards into the miracle of the war and the miracle of the oil." },
        { short: "Few vs. many", how: "A small group against a huge pile, with the matching lines from Al HaNissim (p. 13)." },
        { short: "Al HaNissim pairs", how: "Visitors match the pairs: mighty and weak, many and few, impure and pure." },
        { short: "Open miracle", how: "Compare an open miracle (Chanukah) with a hidden one (Purim) (p. 21)." },
        { short: "How long really?", how: "Show the question on p. 24 and let visitors guess the answers." }
      ],
      quiz: [
        { q: "What are the two miracles we celebrate on Chanukah?", a: "Winning the war, and the oil lasting eight days", w: ["The oil and the dreidel", "Finding the Menorah and the jar", "The Greeks leaving and the rain falling"], p: "p. 14" },
        { q: "Al HaNissim says Hashem gave the mighty into the hands of…", a: "The weak", w: ["The Kohanim", "The strong", "The kings"], p: "p. 13" },
        { q: "Was the Chanukah miracle hidden or open?", a: "Open, clearly above nature", w: ["Hidden inside nature", "Nobody noticed it", "It happened in a dream"], p: "p. 21" },
        { q: "In the last battle, what happened when the Greek army saw Yehuda?", a: "They got scared and fought each other", w: ["They gave up right away", "They ran to the Beis Hamikdash", "They asked for peace"], p: "p. 12" },
        { q: "Why does the booklet say the oil miracle was really seven days?", a: "There was already enough oil for the first day", w: ["The oil ran out on the seventh night", "One of the days was Shabbos", "They lit late on the first night"], p: "p. 24" }
      ]
    },
    {
      n: 6, name: "Dreidel",
      about: "The letters and the story behind the game.",
      focus: "What the letters mean, why kids played it under the Greeks, and how the game works.",
      today: "Those kids kept learning when it was dangerous. What keeps you learning?",
      pages: ["p. 23", "p. 25", "pp. 27–29"],
            overview: "The dreidel looks like a simple game, but it hides a secret story from the times of the Greeks. Here you will learn how to play and what the four letters really mean.",
      reading: [
        "THE DREIDEL. Can you imagine a game that literally saves your life? Hard to imagine, isn't it? Well, the game of Dreidel is a good ol' “spin the top game” - but it sure didn't start out that way. The Dreidel was actually a secret cover-up operation. (Sounds of dramatic music please...)",
        "You see, the Greeks' evil mission was to make the Jewish People forget about ה' and His holy תורה. The Greeks knew that as long as our young children were being educated, their mission would fail. Therefore, they were extra harsh in their decrees toward the children. It was absolutely forbidden for children to learn תורה, and if they were found studying תורה, it was punishable by death.",
        "The Jewish children however, knew very well that ה' makes the rules - not the Greeks. They also knew that the Jewish Nation needed them to learn תורה, in order to survive. The children devised a plan. All of a sudden, a brand new game hit the country. Everyone was spinning these little tops! It spread across the land like wildfire...!",
        "Now, the “inside story” was a bit different. What the Greeks did not know, was that this new game of Dreidel was just a big cover-up... You see, the kids knew that they would never stop learning תורה - no matter what! But they did have a challenge: How do you learn תורה without getting killed...?",
        "Their plan was simple. Bring along a Dreidel, wherever you go. Whenever and wherever they met to study תורה, at home or in the fields and caves, they brought along their trusty Dreidels. When the hard, cold footsteps of the Greek soldiers were heard marching toward them - coming to check up on the kids - suddenly the books and manuscripts from which they studied disappeared, and the soldiers were invited to join a lively game of Dreidel! Since then, the game of Dreidel has become one of חנוכה's most fun and famous customs.",
        "THE NAME AND THE GAME: The word “Dreidel” means “top” or “spinning thing” in the Yiddish language. There are four letters on the Dreidel. נ ג ה ש. These four letters stand for נס גדול היה שם - a great miracle happened there. In ארץ ישראל, the Dreidels say נ ג ה פ - נס גדול היה פה - a great miracle happened here.",
        "One of the differences between חנוכה and פורים is expressed in the way we handle the toys of the day. We spin the חנוכה Dreidel from the top, and twirl the פורים Gragger from the bottom. One explanation for this difference is because the miracle of חנוכה was clearly from Above (the top), in a manner that was higher than nature, while the Miracle of פורים was not so clearly from above. It was a miracle that was “clothed” in nature - “below”.",
        "Remember that הלכה does not allow gambling, so be sure you are only playing for fun - not for keeps!"
      ],
      extra: [
        "[6-a] The common reason given for playing the game of dreidel on Chanukah is that the simple little top was used during the Chanukah era to preserve Judaism. When the Syrian-Greeks ruled over the Holy Land, they outlawed many Jewish practices, such as circumcision, Shabbat observance and Torah learning. With great self-sacrifice, the Jewish children would hide in caves to learn Torah. When they would see a Greek patrol approaching, they would quickly hide their scrolls and take out spinning tops, pretending to have simply been playing a game.",
        "Source: Why Do We Play With a Dreidel (Top) on Chanukah? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/255909/jewish/Why-Do-We-Play-With-a-Dreidel-Top-on-Chanukah.htm",
        "Article's sources: Otzar Kol Minhagei Yeshurun (the article's footnote for this reason).",
        "[6-b] On the four sides of the dreidel appear four embossed or printed letters from the Hebrew alphabet—nun (נ), gimmel (ג), hey (ה), and shin (ש). These four letters are an acronym for \"nes gadol hayah sham\"—\"a great miracle happened there,\" a reference to the Hanukkah miracle. In Israel, the actual setting of the Hanukkah miracle, the last letter, shin, is substituted with a pey (פ), which stands for \"po\"—\"here.\"",
        "Source: How to Play Dreidel - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/597253/jewish/How-to-Play-Dreidel.htm",
        "Article's sources: A practical how-to guide; the article does not cite primary sources."
      ],

      ideas: [
        { short: "Question dreidel", how: "Each letter means a different kind of question. Spin and answer. Play for fun, not for keeps (p. 29)." },
        { short: "Secret learners", how: "Act out how kids hid their Torah learning when soldiers came (pp. 27–28)." },
        { short: "נגהש = משיח", how: "A gematria challenge: visitors add up the letters (p. 25)." },
        { short: "Make a dreidel", how: "Visitors fold a paper dreidel with the four letters." },
        { short: "Top vs. bottom", how: "Show why a dreidel spins from the top and a gragger from the bottom (p. 23)." }
      ],
      quiz: [
        { q: "What do the letters נ ג ה ש stand for?", a: "נס גדול היה שם, a great miracle happened there", w: ["נצחון גדול היה שם, a great victory happened there", "נר גדול הדליקו שם, they lit a great light there", "Only the rules of the game"], p: "p. 28" },
        { q: "In Eretz Yisrael, which letter replaces the ש?", a: "פ, for פה, here", w: ["ת", "מ", "ב"], p: "p. 28" },
        { q: "Why did Jewish children play dreidel in the time of the Greeks?", a: "To hide that they were learning Torah", w: ["To win money", "To pass the time in the caves", "To scare the soldiers"], p: "pp. 27–28" },
        { q: "The letters נגהש add up to the same number as which word?", a: "משיח", w: ["חנוכה", "מנורה", "שמן"], p: "p. 25" },
        { q: "In the game, what happens when you land on ג?", a: "You take the whole pot", w: ["You take half", "You put one in", "Nothing happens"], p: "p. 29" }
      ]
    },
    {
      n: 7, name: "The number 8",
      about: "Why eight nights.",
      focus: "Why eight, and what eight stands for. (The Oil group covers the jar itself.)",
      today: "When have you done something beyond what’s normal for you?",
      pages: ["pp. 24–25", "pp. 33–34"],
            overview: "Why is Chanukah eight days long, and not seven? The number eight is one step above the seven days of nature - it stands for miracles that are higher than nature.",
      reading: [
        "Why did the Miracle of the מנורה last for eight days - rather than any other number of days? The most common answer is because it took eight days to prepare more olive oil for the מנורה.",
        "Why did it take 8 days to prepare the new oil? 1. It was a four day journey to the place where new pure oil could be made. To travel there and back with the new oil took eight days. 2. Since the Jewish People were טמא (impure) from the war, they waited seven days to become טהור (pure). On the eighth day they pressed new olive oil.",
        "There is also a deeper explanation. The number eight is very special. Number seven symbolizes nature. Hashem created our world in seven days (six days and Shabbat), our week has seven days. Every object has seven areas of property: 1 top, 2 bottom, 3 right, 4 left, 5 front, 6 back, 7 center.",
        "The usual way Hashem relates to this world is through Nature. The נסים of חנוכה however, were obvious, revealed miracles, both at war and with the מנורה. The number eight symbolizes “higher than nature”. Our ברית at 8 days old symbolizes that our connection with ה' is above Nature. The oil lasted in the מנורה for Eight days. The כהן גדול wears eight garments.",
        "NOT ALL EIGHTS ARE OUT OF THIS WORLD: The name of the חשמונאים hints to that special number eight. In Hebrew “חש - Chash” means “feels” and שמונה is eight. The Chash-Shmona'im “felt the eight” - they felt and were connected to a level that is higher than nature. In a different way, we see the number eight twice in their name: ח' (8) שמון (8) ים (8).",
        "“The Nature” in Hebrew - הטבע has the same גמטריא as אלקים. What people call “Nature” is really ה' in disguise. Now this level of ה' runs the world through “the program” we call “Nature”. There are higher levels to ה' - than just the Nature level. When ה' performs a נס - it is above Nature. Through our תפילות and מעשים טובים we are able to rise above the laws of nature and cause nature to change - and miracles to happen - as it says, “אין מזל לישראל” meaning that we can rise above the “מזל” that rules nature."
      ],
      extra: [
        "[7-a] While seven represents the natural order of the world (seven days of the week, cycle of seven years for Shemitah, etc.), the number eight represents the connection between G-d and the Jewish people that is higher than the natural order. It is for this reason that Chanukah, which represents this suprarational connection, was established for eight days. Likewise, we find in Midrashic sources that the era of the final redemption is represented by the number eight, which reflects a relationship with G-d that is higher than nature.",
        "Source: Why Is Chanukah 8 (Not 7) Days Long? (answer #13) - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/459286/jewish/Why-Is-Chanukah-8-Not-7-Days-Long.htm",
        "Article's sources: Maharal, Ner Mitzvah; Kli Yakar, Leviticus 9:1 (footnote 23, attached to this explanation)."
      ],

      ideas: [
        { short: "Find the 8s", how: "A scavenger hunt for eights: bris, the Kohen Gadol’s garments, the Chashmonaim (pp. 33–34)." },
        { short: "7 vs. 8", how: "A poster: seven stands for nature, eight stands for above nature." },
        { short: "Count the lights", how: "Visitors figure out how many lights we light over all of Chanukah (p. 25)." },
        { short: "Why 8 days?", how: "Flip cards with the answers on pp. 24–25." },
        { short: "Chash-shmona’im", how: "Show how the name חשמונאים hints to eight (p. 34)." }
      ],
      quiz: [
        { q: "What does the number seven stand for?", a: "Nature, the way the world normally runs", w: ["Miracles", "The Beis Hamikdash", "Victory"], p: "p. 33" },
        { q: "What does the number eight stand for?", a: "Above nature", w: ["The end of the week", "Eight brothers", "Eight battles"], p: "p. 33" },
        { q: "How many garments does the Kohen Gadol wear?", a: "Eight", w: ["Seven", "Four", "Ten"], p: "p. 33" },
        { q: "How many lights do we light over all of Chanukah, not counting the shamash?", a: "36", w: ["44", "8", "28"], p: "p. 25" },
        { q: "What is the most common answer for why the miracle lasted eight days?", a: "It took eight days to get new pure oil", w: ["The war lasted eight days", "There were eight Kohanim", "The Menorah had eight branches"], p: "p. 25" }
      ]
    },
    {
      n: 8, name: "What were the יוונים after?",
      about: "Their decrees and what they wanted.",
      focus: "What the Greeks wanted, the three decrees, and the מתיונים.",
      today: "What tries to pull Jews away from Torah today, and how do we stay strong?",
      pages: ["p. 4", "pp. 8–9", "p. 21", "pp. 30–32"],
            overview: "The Greeks did not only want to hurt the Jews - they wanted to uproot Torah and the Jewish way of life. When we know what the Yevanim were after, we understand what we are still standing up for today.",
      reading: [
        "More than 2000 years ago, the Syrian-Greeks ruled over ארץ ישראל. They were not happy with just ruling our bodies, they wanted to also ruin our souls. They wanted us to give up our holy way of life, to think and live as they did. Unfortunately, many Jews followed the Greek lifestyle and turned away from ה'.",
        "The Syrian-Greeks worshiped the human body. They put all their efforts into strengthening and beautifying the body. They held sport competitions and invented the Olympics. They left the spirit and soul matters far behind. Truth, morals, values, purity and traditions - all the things that עם ישראל stand for - were not important to them, rather, it was all about physical beauty and pleasures of the body.",
        "“Greece” in Hebrew is יון. The “Greeks” are called יוונים. The Jews who tried to be like the Greeks were called מתיונים - the “יוון Wanna Be”s, otherwise known as “Hellenists.” The Jews who remained faithful to ה' were named “חסידים.”",
        "יוונים ILLUMINATED: DEEP IDEAS. The יוונים were very “advanced” people. They learned a lot and appreciated philosophy and logic. Their problem was that for them, everything had to “make sense.” They could not accept that there is something higher than our understanding.",
        "They didn't tell us not to learn תורה or do מצוות. They could not accept our אמונה in ה', that we believe in an invisible, infinite G-d, Who created the world and continues to run it. They could not accept that we do things even though we don't understand them, like the מצוות which have no explanation - the חוקים. All the rules of טומאה and טהרה, שעטנז, ערלה etc. are חוקים that ה' gave us - without giving any reason for them. We do them only because ה' said so to, there IS no other reason. This is what the יוונים could not handle.",
        "They didn't mind us learning תורה. As long we read or study it as just a nice interesting “book”. They also saw the תורה as a very wise book that teaches us wonderful things and makes us smart - that part was fine. What they didn't like is that we keep the תורה holy, and learn it because it comes from ה', and ה' told us to learn it!",
        "We see this idea in the תפילה of על הנסים which we say during חנוכה. As it describes the חנוכה story, it says that the יוונים tried “להעבירם מחקי רצונך” - to remove them from the statutes (laws) of Your will. These words of the תפילה were written carefully and accurately. It does not say that they tried to make us forget “The תורה” - rather, it says - “Your תורה” - Hashem's holy תורה.",
        "PINTELE YID CANNOT BE RUINED: In our נשמה there are 5 levels. נפש, רוח, נשמה, חיה and יחידה. The level of יחידה - which means “unity” or “alone” - is the level of our נשמה that is an actual part of ה'. It is always holy and nothing we can do can negatively affect it. It is from this level of the נשמה that we have the ability and desire for מסירת נפש - to sacrifice our lives rather than turn away from ה'."
      ],
      extra: [
        "[8-a] In the second century BCE, the Holy Land was ruled by the Seleucids (Syrian-Greeks), who tried to force the people of Israel to accept Greek culture and beliefs instead of mitzvah observance and belief in G-d.",
        "Source: What Is Hanukkah? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/102911/jewish/What-Is-Hanukkah.htm",
        "Article's sources: An overview article; this paragraph has no primary source cited.",
        "[8-b] Chanukah is the triumph of the Jewish soul. The Greeks had no designs on the Jew's body; it was the soul of Israel they coveted, seeking to indoctrinate her mind with their philosophy and tint her spirit with their culture. The Jew fought not for the freedom of his material self but to liberate his spiritual identity from Hellenist domination.",
        "Source: Oil and Wine - Chabad.org - https://www.chabad.org/holidays/purim/article_cdo/aid/2815/jewish/Oil-and-Wine.htm",
        "Article's sources: Shulchan Aruch, Yoreh De'ah 105:5; Talmud, Eruvin 65a (the article's two epigraphs)."
      ],

      ideas: [
        { short: "Three decrees", how: "Three flip panels: Shabbos, Rosh Chodesh, and bris milah, and what each one shows about our אמונה (p. 9)." },
        { short: "Just a book?", how: "Show how the Greeks were fine with Torah as wisdom, but not as Hashem’s Torah (p. 30)." },
        { short: "Two kinds of Jews", how: "Compare the חסידים and the מתיונים (p. 8)." },
        { short: "After our souls", how: "A poster on why the Greeks wanted our neshamos, not our bodies (pp. 4, 21)." },
        { short: "Still today", how: "Visitors write what pulls Jews away from Torah today, and how to stay strong." }
      ],
      quiz: [
        { q: "Which three mitzvos did Antiochus especially forbid?", a: "Shabbos, Rosh Chodesh, and bris milah", w: ["Tefillin, tzitzis, and mezuzah", "Shabbos, Pesach, and Sukkos", "Kashrus, tefillah, and tzedakah"], p: "p. 9" },
        { q: "What were the Jews who copied the Greeks called?", a: "מתיונים", w: ["חסידים", "חשמונאים", "כהנים"], p: "p. 8" },
        { q: "Al HaNissim says the Greeks wanted to make us forget…", a: "Your Torah, Hashem’s Torah", w: ["Our land", "Our language", "The Beis Hamikdash"], p: "p. 30" },
        { q: "What did the Greeks really want?", a: "For us to stop serving Hashem", w: ["Our gold and silver", "To build a new Beis Hamikdash", "To move us out of Eretz Yisrael"], p: "p. 21" },
        { q: "Mitzvos that Hashem gave without telling us the reason are called…", a: "חוקים", w: ["משפטים", "מנהגים", "ברכות"], p: "p. 30" }
      ]
    },
    {
      n: 9, name: "מהדרין / מן המהדרין",
      about: "The three levels of lighting.",
      focus: "The three levels, why everyone lights the best way, and doing mitzvos beautifully.",
      today: "Which mitzvah can you do in a more beautiful way?",
      pages: ["p. 22", "p. 31", "pp. 34–35", "Kitzur p. 3"],
            overview: "There is a basic way to do a mitzvah, and then there is the most beautiful way - mehadrin min hamehadrin. Chanukah teaches us to always do mitzvos in the best way we can.",
      reading: [
        "Generally, there are 2 ways מצוות are performed: 1. According to הלכה - the “regular” way. 2. הידור or מהדרין. The “beautiful” way, meaning, doing more than the דין requires, beyond the letter of the law.",
        "Usually, most people do מצוות, like אתרוג, תפילין, מזוזה, שבת etc. the “regular way,” and some perform it beyond the letter of the law - the more beautiful, the מהדרין way.",
        "How is this? The basic מצוה of חנוכה is to light just one candle each night, in each house. מהדרין is to have one candle for each person in the house. מהדרין מן המהדרין is for each person to light an additional candle, each night - meaning, each person lights their own מנורה - and that is the way we do it. So we see that on חנוכה, everybody does the מצוה in the best of the best way!",
        "In doing the מצוות the best possible way, each person lights their own מנורה. (Kitzur Shulchan Aruch)",
        "Why do we all light the מנורה the מהדרין מן המהדרין way? When our ancestors searched for pure oil, although they were able to use the impure oil - they didn't. They searched and searched - until they found one pure jug of oil. They acted לפנים משורת הדין - beyond the letter of the law. ה' responded with the miracle of the שמן, which was “לפנים משורת הדין” of nature.",
        "Every חנוכה, we connect to the same high level. Our נשמה feels that high level, and inspires us - every one of us - unconsciously - to do the מצוה in the best possible way, מהדרין מן המהדרין.",
        "The מנורה should (best) be made of a metal. If you can afford it, a silver מנורה is best. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[9-a] The Talmud tells us there are three ways to light a Chanukah menorah: A good way, a beautiful way, and the most beautiful of the beautiful way. The good way is for each household to light a single lamp or a candle each night of Chanukah. The beautiful way is for every member of each household to light a single lamp or a candle each night of Chanukah. The most beautiful of the beautiful way is for every member of each household to light one more candle each night, until there are eight candles for every one of them.",
        "Source: The Most Beautiful Way To Light a Menorah - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4960149/jewish/The-Most-Beautiful-Way-To-Light-a-Menorah.htm",
        "Article's sources: Rema, Shulchan Aruch, Orach Chaim 671:2; Kitzur Shulchan Aruch 139:6. The article also names the Talmud without giving a page reference.",
        "[9-b] As you may have realized, the Jewish people decided unanimously that they want to do this mitzvah in the most beautiful of the beautiful way. It doesn't matter that they don't all necessarily do every other mitzvah in the best way possible. The light of Chanukah gets special treatment. Because the light of Chanukah is lit in the dark of winter when darkness is strongest.",
        "Source: The Most Beautiful Way To Light a Menorah - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4960149/jewish/The-Most-Beautiful-Way-To-Light-a-Menorah.htm",
        "Article's sources: This explanation has no separate source citation. The preceding description of the lighting practices cites Rema, Orach Chaim 671:2, and Kitzur Shulchan Aruch 139:6."
      ],

      ideas: [
        { short: "Three steps", how: "A staircase display: one light per house, one per person, then adding each night." },
        { short: "Upgrade a mitzvah", how: "Visitors pick a mitzvah card and say how to do it the beautiful way." },
        { short: "Family math", how: "How many lights does a family of five light on night 3, each person with his own menorah?" },
        { short: "Search for pure oil", how: "Show how the Chashmonaim did more than they had to (pp. 34–35)." },
        { short: "Pledge board", how: "Visitors write one mitzvah they’ll do in a more beautiful way." }
      ],
      quiz: [
        { q: "What is the basic mitzvah of Chanukah lights?", a: "One light each night for the whole house", w: ["Eight lights every night", "One light for each person", "A light only on the first night"], p: "p. 31" },
        { q: "What does מהדרין mean here?", a: "One light for each person in the house", w: ["Lighting in shul", "Lighting with olive oil", "Adding a light each night for the whole house"], p: "p. 31" },
        { q: "How do we all light today?", a: "Each person lights his own menorah and adds a light each night", w: ["Only the basic way", "Only the father lights", "One menorah for the whole family"], p: "p. 31" },
        { q: "Why did the Chashmonaim search for pure oil when they didn’t have to?", a: "They wanted to do the mitzvah the best way possible", w: ["The impure oil wouldn’t burn", "The Greeks were watching", "The Menorah was broken"], p: "p. 34" }
      ]
    },
    {
      n: 10, name: "Stories",
      about: "Yehudis, and Chana and her seven sons.",
      focus: "What happened in each story, and what gave these heroes their courage.",
      today: "What gave them courage, and where can you use that courage?",
      pages: ["pp. 27–28", "pp. 47–56"],
            overview: "Chanukah has some of the greatest stories in Jewish history: brave Yehudis, the Chashmonaim, and children who outsmarted the Greeks. Every story has a lesson for us today.",
      reading: [
        "THE DREIDEL (see the Dreidel reading page for the full story): What the Greeks did not know, was that this new game of Dreidel was just a big cover-up... When the hard, cold footsteps of the Greek soldiers were heard marching toward them, suddenly the books and manuscripts from which they studied disappeared, and the soldiers were invited to join a lively game of Dreidel!",
        "YEHUDIS: Yehudis dressed in her finest gowns, anointed herself with oils and perfume and went towards the city gates. She was accompanied only by her faithful maid, who carried a basket filled with crusty rolls, salty cheese, and several bottles of old wine. Fervently praying as they prepared to enter the enemy's lair, Yehudis and her maid arrived at the Greek army's camp.",
        "“We have an important message for your commander, the brave Holofernes,” Yehudis said to the guards. “Take us to him at once.” ... Yehudis then told Holofernes that life in the town had become unbearable for her, and she bribed the watchmen to let her and her maid out. She told Holofernes that she admired his bravery and mighty deeds in battle, and wished to befriend him, and help him capture the town from within.",
        "That evening, when Yehudis entered Holofernes' tent, the table was laden with delicacies (all kinds of good nosh). The general invited her to join the feast. But Yehudis told him she had prepared her own food and wine special for him, and wanted him to taste it. “My goat cheese is famous in all of Besulia,” Yehudis said, “I'm sure you'll like it, general.”",
        "Holofernes loved the cheese. But it was so salty! “Please pour me a drink! Your delicious cheese makes me so thirsty” said Holofernes. “Ahhh - you will just love my wine!” smiled Yehudis. She fed him the salty cheese, chunk after chunk, and he washed it down with more and more of the strong wine. Before long, Holofernes was sprawled on the ground, dead drunk.",
        "Yehudis uttered a silent prayer. “Answer me, Hashem, as You answered Yael, when you delivered the wicked general Sissera into her hands. Strengthen me this once that I may bring Your deliverance to my people whom this cruel man vowed to destroy, and let the nations know that You have not forsaken us...”",
        "Yehudis carefully unsheathed Holofernes' heavy sword, and taking aim at his neck, she quickly brought the sword down on it with all her might. Yehudis then wrapped up the general's head in rags, hid it under her shawl, and calmly walked out into the night, making her way back to her town.",
        "“There is no time to lose,” she told the commander. “Prepare your men for a surprise attack at dawn. The enemy's camp is not prepared for it. When they see their commander's head hanging on our city's gate, they will flee for their lives!” This is precisely what happened. The enemy fled in confusion and terror.",
        "It was a wonderful victory, and it was the G-d fearing and brave daughter of Yochanan the High Priest, the father of the Chashmonai family, who saved all the Jews of Besulia. Our heroine Yehudis, continues to inspire faith and courage in our hearts to this day.",
        "CHANA & HER SEVEN SONS: As Chana and her sons were dragged before the king's throne, the king viewed his victims. They ranged in age from seven to a young man in his twenties. The children were all handsome, and stood straight and tall beside their mother. No fear could be seen on their noble faces...",
        "The king offered the youngest boy a high position in his court, along with much gold and silver, if he would just follow his directions. The seven year old boy displayed the same courage as his brothers and replied, “You are promising me something that you will do in the future. How do you know what tomorrow will bring? You cannot be sure of anything... You cannot promise me anything. Only Hashem knows what will be.”",
        "“Here, my lad, I will throw my ring on the floor. You just pick it up, and everyone here will think you bowed to me! I will reward you tremendously. Do you agree, my child?” Antiochus whispered to the boy. The boy refused. As they removed him to kill him, Chanah ran to kiss him one last time. She embraced him, and then looking at the bodies of her other children she said to him, “When you reach the heavens, tell our ancestor Avraham: You offered only one son upon the altar, but I actually gave Hashem seven.”",
        "Chana turned her eyes heavenward, and standing among the bodies of her slain children, she cried out to Hashem in prayer... And Chana's soul left her body as she joined her children in eternal life with Hashem."
      ],
      extra: [
        "[10-a] It is not clearly known when the story which we are about to tell actually took place... According to one version, it happened during the time of the Maccabean revolt against Syrian oppression, and Yehudit was a daughter of Yochanan the high priest, father of the Hasmonean family. At any rate, the heroic deed of Yehudit has inspired faith and courage in the hearts of Jews throughout the ages.",
        "Source: The Story of Yehudit - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103019/jewish/The-Story-of-Yehudit.htm",
        "Article's sources: The ancient Book of Yehudit (Judith), which survives in a Greek translation; the article notes the story exists in different versions.",
        "[10-b] The town of Bethulia, in the land of Judea, came under siege by Holofernes, a mighty Syrian-Greek general, at the head of a huge army... Seeing that he couldn't take the fortified town by force, Holofernes decided to starve the inhabitants into submission. He cut off the food and water supply, and before long the town was indeed brought to the verge of surrender.",
        "Source: The Story of Yehudit - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103019/jewish/The-Story-of-Yehudit.htm",
        "Article's sources: The ancient Book of Yehudit (Judith), which survives in a Greek translation; the article notes the story exists in different versions."
      ],

      ideas: [
        { short: "Put it in order", how: "Scene boards from each story. Visitors put them in order." },
        { short: "Story corner", how: "Tell one story in under two minutes, then ask visitors one question." },
        { short: "Comic strip", how: "A large six-frame comic of one story." },
        { short: "Their courage", how: "A board where visitors add what helped these heroes stay strong." },
        { short: "Who am I?", how: "Clue cards. Visitors guess which hero from the booklet it is." }
      ],
      quiz: [
        { q: "What did Yehudis bring to the Greek general?", a: "Cheese and wine", w: ["Gold and silver", "Bread and water", "Oil and wicks"], p: "pp. 47–50" },
        { q: "How many sons did Chana have?", a: "Seven", w: ["Five", "Eight", "Three"], p: "p. 51" },
        { q: "What trick did the king try with Chana’s youngest son?", a: "He threw his ring down so it would look like the boy bowed", w: ["He offered him a horse", "He told him his brothers had bowed", "He hid an idol in a box"], p: "p. 56" },
        { q: "What did the children who played dreidel keep doing, even when it was dangerous?", a: "Learning Torah", w: ["Lighting the Menorah", "Fighting the soldiers", "Hiding food"], p: "p. 27" }
      ]
    },
    {
      n: 11, name: "חנוכה vs. פורים",
      about: "Comparing the two Yamim Tovim.",
      focus: "How the two stories and the two celebrations are alike and different.",
      today: "Which miracles in your life are open, and which are hidden?",
      pages: ["p. 21", "p. 23"],
            overview: "Chanukah and Purim are both happy days, but we celebrate them in totally different ways. Comparing them shows us the difference between a hidden miracle and an open one.",
      reading: [
        "On חנוכה and פורים we celebrate and thank ה' for the wonderful miracles He made for us. Both חנוכה and פורים are happy times of celebration. However, the way we celebrate on these two ימים טובים are very different.",
        "Manner of celebration: On חנוכה, the main celebration is הלל and הודאה - praise and thanksgiving to ה'. We celebrate in a רוחני - spiritual way. פורים days are ימי משתה ושמחה - days of feasting and joy. We rejoice with a festive meal.",
        "Reason: Because on חנוכה the גזירה (decree) was against our נשמות. The Greeks didn't really want to kill our bodies, they mainly wanted us to stop serving ה' the way we do with such great אמונה. Our celebration too, is a spiritual one, of thanks and praise in our תפילות. Because on פורים they wanted to kill us physically. They wanted our bodies. That is why we celebrate our victory with our bodies - with joyous feasts.",
        "Which came first? חנוכה happened after פורים. פורים happened before חנוכה. חנוכה happened in ארץ ישראל. פורים happened in Persia.",
        "Miracle: חנוכה - Revealed, clearly above the laws of nature. פורים - Hidden, not so obviously above the laws of nature. Our Heroes: חנוכה - The Maccabees - חשמונאים. פורים - מרדכי & אסתר. Game/Toy: חנוכה - Dreidel. פורים - Gragger. Food: חנוכה - Oily latkes and donuts, and dairy. פורים - Hamantashen.",
        "TOP OR BOTTOM? ABOVE OR BELOW? - “HANDLE” WITH CARE... One of the differences between חנוכה and פורים is expressed in the way we handle the toys of the day. We spin the חנוכה Dreidel from the top, and twirl the פורים Gragger from the bottom.",
        "One explanation for this difference is because the miracle of חנוכה was clearly from Above (the top), in a manner that was higher than nature, while the Miracle of פורים was not so clearly from above. It was a miracle that was “clothed” in nature - “below”. The miracle of פורים did not all happen at once in a clearly miraculous manner, rather, it happened over a few years and included many steps. Looking back at all that happened, we realize that it was all a slowly unfolding miracle, but it takes thought to understand it. חנוכה's miracles were quick and obvious. The Maccabees won an impossible war, and the one-day measure of oil lasted for eight.",
        "Another explanation: On פורים, the Jewish people fasted and Davened, asking for ה''s help. They “worked hard” to annul Haman's decree, and they “earned” the miracle. That's why the Gragger's handle is on the bottom. The miracle of חנוכה came even though the Jewish People did not earn it (as much as they did on פורים). We were saved mainly because of ה''s mercy. This is why the Dreidel's “handle” is on the top."
      ],
      extra: [
        "[11-a] Chanukah is oil, Purim is wine. Chanukah is the triumph of the Jewish soul. The Greeks had no designs on the Jew's body; it was the soul of Israel they coveted... Haman and company did not bother with such subtleties. They had one simple goal: the physical destruction of every Jew on the face of the earth. Purim remembers the salvation of the Jew's bodily existence.",
        "Source: Oil and Wine - Chabad.org - https://www.chabad.org/holidays/purim/article_cdo/aid/2815/jewish/Oil-and-Wine.htm",
        "Article's sources: Shulchan Aruch, Yoreh De'ah 105:5; Talmud, Eruvin 65a (the article's two epigraphs).",
        "[11-b] Chanukah is commemorated with oil. Chanukah celebrates the innerness of the Jewish soul... On Purim we pour out the wine. Purim is a noisy party, a showy parade, a costumed extravaganza. Purim celebrates the fact that the Jew is more than a soul—he is a body as well.",
        "Source: Oil and Wine - Chabad.org - https://www.chabad.org/holidays/purim/article_cdo/aid/2815/jewish/Oil-and-Wine.htm",
        "Article's sources: Shulchan Aruch, Yoreh De'ah 105:5; Talmud, Eruvin 65a (the article's two epigraphs)."
      ],

      ideas: [
        { short: "Sort it", how: "Fact cards. Visitors sort them into Chanukah, Purim, or both." },
        { short: "Dreidel vs. gragger", how: "Spin both and explain top versus bottom (p. 23)." },
        { short: "Body or soul?", how: "Purim’s enemy wanted our bodies, Chanukah’s wanted our neshamos (p. 21)." },
        { short: "Which came first?", how: "A mini timeline with both stories on it." },
        { short: "Quiz show", how: "Quick buzzer questions comparing the two." }
      ],
      quiz: [
        { q: "Which happened first?", a: "Purim", w: ["Chanukah", "They happened at the same time", "Nobody knows"], p: "p. 21" },
        { q: "Where did the Chanukah story happen?", a: "Eretz Yisrael", w: ["Persia", "Egypt", "Greece"], p: "p. 21" },
        { q: "Why do we celebrate Purim with a feast and Chanukah with praise and thanks?", a: "On Purim they wanted our bodies; on Chanukah they wanted our neshamos", w: ["Purim is longer", "Chanukah is in the winter", "The Greeks liked feasts"], p: "p. 21" },
        { q: "Why do we spin a dreidel from the top and a gragger from the bottom?", a: "Chanukah’s miracle was clearly from above; Purim’s was hidden in nature", w: ["Dreidels are smaller", "It’s easier that way", "The Greeks made the dreidel"], p: "p. 23" },
        { q: "Who were the heroes of Purim?", a: "Esther and Mordechai", w: ["Yehuda and Shimon", "Chana and Yehudis", "Moshe and Aharon"], p: "p. 21" }
      ]
    },
    {
      n: 12, name: "תפילות",
      about: "Hallel, Al HaNissim, Haneiros Halalu, Maoz Tzur.",
      focus: "What each tefillah means, who wrote it, and when we say it.",
      today: "How can you say thank you to Hashem today?",
      pages: ["pp. 13–14", "Brachos and songs section (after p. 36)", "Reading section (after p. 41)", "Kitzur pp. 7, 11"],
            overview: "On Chanukah we add special tefillos of thanks, like Al Hanissim and Hallel, and we say brachos when we light the menorah. These tefillos retell the whole Chanukah story.",
      reading: [
        "The story of חנוכה is summed up very well in the תפילה of praise and thanks we say daily during חנוכה - “על הנסים”.",
        "[We thank You ה'] על הנסים, ועל הפורקן, ועל הגבורות, ועל התשועות, ועל המלחמות (ועל הנפלאות) שעשית לאבותינו בימים ההם בזמן הזה. [Thank You!] - For the Miracles, the Redemption, the Mighty Acts, the Saving Acts and for the Wars (Wonders) that You have done for our fathers, in those days at this time.",
        "בימי מתתיהו בן יוחנן כהן גדול חשמונאי ובניו - In the days of מתתיהו the son of יוחנן the כהן גדול (from the) חשמונאי (family) and his sons... וזרדים ביד טהורים, ורשעים ביד צדיקים - You delivered the mighty into the hands of the weak, the many into the hands of the few, the impure into the hands of the pure, the wicked into the hands of the righteous... ואחר כך באו בנך לדביר ביתך, ופנו את היכלך, וטהרו את מקדשך - Then Your children entered the holy place of your house, cleansed your היכל, purified your בית המקדש, kindled the lights of your holy courtyards and instituted these eight days of חנוכה, to give thanks and praise to your great Name.",
        "Blessing #1 - before lighting the Menorah: ברוך אתה ה' אלוקינו מלך העולם, אשר קדשנו במצותיו וצונו להדליק נר חנוכה. Blessed are You Hashem our G-d, King of the Universe, Who made us holy with His commandments and commanded us to kindle the light(s) of Chanukah.",
        "Blessing #2 - before lighting the Menorah: ברוך אתה ה' אלוקינו מלך העולם, שעשה נסים לאבותינו בימים ההם בזמן הזה. Blessed are You Hashem our G-d, King of the Universe, Who made miracles for our fathers, in those days, at this time.",
        "Blessing #3 - Say only the first time you light this year: ברוך אתה ה' אלוקינו מלך העולם, שהחיינו וקיימנו והגיענו לזמן הזה. Blessed are You Hashem our G-d, King of the Universe, Who kept us alive, sustained us, and allowed us to reach this occasion.",
        "Before lighting the מנורה, we make three ברכות on the first night, and two ברכות on the rest of the nights... On the rest of the nights we skip the ברכה of שהחיינו. After the ברכות are said, light the first candle. (Kitzur Shulchan Aruch)",
        "All eight days of חנוכה we say “על הנסים” in the שמונה עשרה. If you forgot to say “על הנסים”: if you remembered before you said ה''s name of the next ברכה, say it right then. If you remembered after you said ה''s name - continue Davening. (Kitzur Shulchan Aruch)",
        "We also say the “על הנסים” during ברכת המזון - Bentching. (Kitzur Shulchan Aruch)",
        "We complete the הלל all eight days of חנוכה. During חנוכה, we do not say תחנון. The תורה is read every day of חנוכה. Each day, we read about the קרבנות הנשיאים - the presents the leaders of the שבטים brought at the original חנוכת המשכן, when they completed building the משכן in the desert. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[12-a] On all eight days of Chanukah, full Hallel is recited after Shacharit morning prayers. Additionally, the Al haNissim blessing is inserted into the Amidah prayers and the Grace after Meals.",
        "Source: Additional Prayers - Chabad.org (Rabbi Eliyahu Kitov) - https://www.chabad.org/holidays/chanukah/article_cdo/aid/105099/jewish/Additional-Prayers.htm",
        "Article's sources: Excerpted from Eliyahu Kitov's The Book of Our Heritage (Feldheim). The article gives no separate primary-source citation for this prayer practice.",
        "[12-b] In the synagogue, the portion of the nesi'im (Bamidbar 7), which recounts the offerings brought by the nasi [prince] of each of the twelve tribes when the Mishkan, the Tabernacle, was dedicated, is read from the Torah.",
        "Source: Additional Prayers - Chabad.org (Rabbi Eliyahu Kitov) - https://www.chabad.org/holidays/chanukah/article_cdo/aid/105099/jewish/Additional-Prayers.htm",
        "Article's sources: Excerpted from Eliyahu Kitov's The Book of Our Heritage (Feldheim). This paragraph refers to Bamidbar (Numbers) 7; later discussion cites Bamidbar 8:4."
      ],

      ideas: [
        { short: "When do we say it?", how: "Visitors match each tefillah to when we say it: lighting, Shemoneh Esrei, bentching, or Shacharis." },
        { short: "Find the name", how: "Show how the first letters of Maoz Tzur’s verses spell the author’s name." },
        { short: "Read with us", how: "Visitors read a line of Haneiros Halalu with you." },
        { short: "The brachos", how: "A display of the three brachos, and which one is only for the first night." },
        { short: "Fill it in", how: "Visitors fill in the missing pairs in Al HaNissim: mighty and weak, many and few." }
      ],
      quiz: [
        { q: "How many brachos do we say before lighting on the first night?", a: "Three", w: ["Two", "One", "Four"], p: "Kitzur p. 7" },
        { q: "Which bracha do we say only the first time we light?", a: "שהחיינו", w: ["להדליק נר חנוכה", "שעשה נסים", "המוציא"], p: "Kitzur p. 7" },
        { q: "Where do we add Al HaNissim?", a: "In Shemoneh Esrei and in bentching", w: ["Only at the lighting", "Only on Shabbos", "In Kiddush"], p: "p. 14" },
        { q: "How much Hallel do we say on Chanukah?", a: "The whole Hallel, all eight days", w: ["Half Hallel", "Only on the first day", "No Hallel"], p: "Kitzur p. 11" },
        { q: "Haneiros Halalu says we may not use the lights. What may we do?", a: "Only look at them", w: ["Read by them", "Cook with them", "Light other candles from them"], p: "Reading section" }
      ]
    },
    {
      n: 13, name: "Maccabees in modern times",
      about: "Jews in our times who kept the light going.",
      focus: "Jews in our times who kept Torah and mitzvos when it was hard, and how we can do the same.",
      today: "Who are the Maccabees of our time, and how can you be one?",
      pages: ["p. 3", "p. 10", "p. 32"],
            overview: "The Maccabees fought with courage thousands of years ago, but their job is not finished. Every Jew who adds light to the world today is a modern-day Maccabee.",
      reading: [
        "WE ARE ALL LAMPLIGHTERS. How can little me... illuminate the world - you ask? Am I the President...? I'm just a kid! I don't even have a good flashlight! Ahhh... the trick is that when a lot of little “regular” people create light in their own personal space - when each person brightens up his/her environment - all the lights then join together and connect into one big flame... and the world is a perfect place - once again.",
        "Before there were lights in the streets, there were street lamps. The lamps had oil and wicks, like candles. Each evening, as it would begin to get dark, the lamplighter would go from lamp to lamp, lighting each one with the flame at the end of his long torch. The lamps would shed a sweet light, far and wide.",
        "The people of the world are like those old fashioned street lamps. We are the lamplighters. Our job is to go around lighting the lamps, with the light of תורה and מצוות - creating light wherever we are. At home, in school, on the playground, in the park, on the bus - anywhere and everywhere - we bring joy, warmth and holy light to the people and the place.",
        "The חנוכה message is that we can illuminate our world, one lamp at a time, one person at a time, one place at a time, starting with ourselves and our homes.",
        "מתתיהו's message: “מי לה' אלי” (whoever is for ה' follow me!) spread like wildfire and his small band grew day by day. The Jewish warriors waged guerrilla warfare against the mighty armies of אנטיכוס IV. When the King's armies would march toward the hills - the Jews would ambush them from caves, behind trees, and it seemed like from everywhere. The Syrian-Greek armies were terrified to fight the Jews and were beaten every time.",
        "יהודה gathered his men together and reminded them that it is not the military power or sophisticated weapons that win a war - it is ה''s help! “Few can win against many and the weak can win against the strong, as we've seen so many times before - if only ה' wants! ה' will surely fight for us in this final battle.”",
        "Today, ה' ירחם we do not have the same challenges as our ancestors did years ago. We do not need to die, to live Jewish. We can live like Jews wherever we wish. This however, has become our challenge today - to actually live like a Jew, amongst the rest of the world who looks and thinks differently from us. Our challenge is to remain pure and holy in this world where it is so easy to get lost in the false, fleeting pleasures of the secular ideas, fashions and trends. In some ways, our challenge to live like a Jew is a greater one than to die as a Jew.",
        "We need to dig deep into ourselves and reach the deeper levels of our נשמה where the truth is clear and obvious, and allow our נשמה to shine away our own darkness. Then we can fulfill our mission, to brighten up our surroundings with the light of our נשמה - the light of ה'."
      ],
      extra: [
        "[13-a] The Chanukah battle and miracles transpired millenniums ago. But their lessons are as pertinent today as they were when the Greeks occupied the Holy Land...",
        "Source: Chanukah Today - Modern Day Maccabees - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/102910/jewish/Chanukah-Today.htm",
        "Article's sources: A feature page linking to news stories; it does not cite primary sources."
      ],

      ideas: [
        { short: "Modern Maccabees", how: "A wall of true stories about Jews in our times who kept mitzvos when it was hard." },
        { short: "Lamplighters", how: "A display of the lamplighter idea from p. 3." },
        { short: "Be a Maccabee", how: "Visitors write one way they’ll stand up for Torah on a paper flame." },
        { short: "Then and now", how: "Compare the Maccabees’ challenge with ours today (p. 32)." },
        { short: "Ask a hero", how: "Record a short interview with a parent or teacher about keeping a mitzvah when it was hard." }
      ],
      quiz: [
        { q: "The booklet compares the people of the world to…", a: "Old-fashioned street lamps, and we are the lamplighters", w: ["Stars in the sky", "Candles in a box", "Soldiers in an army"], p: "p. 3" },
        { q: "What did Matisyahu call out to start the revolt?", a: "מי לה׳ אלי, whoever is for Hashem, come to me", w: ["נס גדול היה שם", "שמע ישראל", "מי כמוכה"], p: "p. 10" },
        { q: "According to the booklet, what is our challenge today?", a: "To live like a Jew in a world that thinks differently", w: ["To fight the Greeks", "To find pure oil", "To build a new Menorah"], p: "p. 32" },
        { q: "When each person lights up his own space, what happens?", a: "All the lights join into one big light", w: ["The lights go out faster", "Only one house is bright", "Nothing changes"], p: "p. 3" }
      ]
    },
    {
      n: 14, name: "Light vs. darkness",
      about: "A little light pushes away a lot of darkness.",
      focus: "The message of the lights. (The Miracle, Oil, and Number 8 groups cover the story.)",
      today: "How can you bring light to someone this week?",
      pages: ["pp. 1–3", "p. 19", "p. 26", "p. 35", "Songs section p. 4"],
            overview: "A little bit of light pushes away a lot of darkness. Chanukah teaches us to fight the darkness in the world by adding more and more light.",
      reading: [
        "THE CHANUKAH MESSAGE: LIGHT OVER DARKNESS. Imagine walking into a completely dark room? So dark you can almost feel the darkness. There may be things in the room - there may not - there may be others in the room - there may not. You don't know because you cannot see, it's too dark. And maybe a little scary. Then, you light a candle. Ahhh. The light of just one candle illuminates the whole room. Suddenly, you are not afraid - you are able to see. (Hey, there really aren't any monsters!)",
        "Our lives are full of battles. Most of them are within ourselves. We are in constant combat with the “enemy” inside us. The enemy is also known as the “יצר הרע”. The internal enemy tries to convince us not to do what we should. Sometimes it tries to convince us to do something wrong. The יצר הרע is compared to darkness. ה', our נשמה and the יצר טוב - are compared to Light.",
        "In regular warfare, it's only natural that the bigger and stronger army wins. The more soldiers you have, the stronger your army is - the better your chances of winning. In צבא ה' - ה''s army, the rules are different. ה' is compared to Light. A little light chases away a lot of darkness. When we are fighting for ה', whether in a battle with other nations, or right within ourselves - the regular rules of nature do not apply.",
        "In our battlefield, inside or out, Right wins against Might. Few win against Many, and Weak wins against Strong. חנוכה is our reminder that we (the good guys) will always win. For, in the end, Light will always win over darkness. Following ה''s path, we are certain to succeed. The Greatest Warrior is on our side.",
        "Light is powerful. It brightens up our life. Good is often compared to light. When someone makes you feel good you say s/he “brightened up my day”. Goodness, kindness, happiness and similar - are compared to light. Light brings actual life to plants. One of the most wonderful things about light is that: A LITTLE LIGHT DISPELS A LOT OF DARKNESS.",
        "תורה and מצוות are the purest and brightest lights. One little מצוה can brighten up your life. One little מצוה you do can brighten up another's life. A little תורה can brighten up your whole attitude, forever. חנוכה is all about Light (- not so much about the fight.) ה' created this world and put us here with a mission: “BRIGHTEN UP YOUR WORLD!”",
        "We light the מנורה at nightfall to brighten up the darkness of the night - the places that are spiritually “dark” and people whose lives are not yet “brightened” by the תורה and מצוות.",
        "Banu Choshech Legaresh - We've come to chase away the darkness! Though the night is cold and dark, in our soul, there lies a spark. Each of us, is one small light. All together, we shine bright. Do a Mitzvah - light your spark. Let your glow shine through the dark. (from the songs section)",
        "The חנוכה lights that shone then - and now - also come from the holy light that ה' hid at the beginning of Creation. This light is hidden in the תורה, and is available to צדיקים today, and will also shine for us all when משיח comes."
      ],
      extra: [
        "[14-a] Although Chanukah celebrates two profound miracles—the victory of the small Hasmonean rebellion against the mighty Assyrian army, and a small jug of oil lasting eight days—it's the latter miracle that gets most of the attention. Why? Because the miracle of oil provides an eternal message for all generations: We fight darkness with light.",
        "Source: 5 Ways to Fight Darkness With Light - Chabad.org - https://www.chabad.org/library/article_cdo/aid/6690837/jewish/5-Ways-to-Fight-Darkness-With-Light.htm",
        "Article's sources: Likkutei Sichot, vol. 25 (the article's footnote for this paragraph).",
        "[14-b] According to the accepted Jewish custom, we begin the first night of Chanukah by lighting just one candle, and each night we add another, until all eight are lit on the final night. Because though a little light might push away much darkness, the world often shows us that a little light isn't enough. So we shine more. And we shine more. And we don't stop until the night itself has been entirely lit up.",
        "Source: 5 Ways to Fight Darkness With Light - Chabad.org - https://www.chabad.org/library/article_cdo/aid/6690837/jewish/5-Ways-to-Fight-Darkness-With-Light.htm",
        "Article's sources: Sefer Hamaamarim Melukat, vol. 2 (the maamar \"Tanu Rabbanan, Mitzvat Ner Chanukah\") - the article's footnote for this paragraph."
      ],

      ideas: [
        { short: "Dark tent", how: "Visitors step into a dark space and turn on one battery candle." },
        { short: "One small light", how: "A flashlight in a dark box: see how far one light reaches." },
        { short: "Brighten a day", how: "Visitors write one way they’ll bring light to someone." },
        { short: "The 25th word", how: "Show that the 25th word in the Torah is אור (p. 26)." },
        { short: "Lamplighter street", how: "A model street where each lit lamp lights the next one (p. 3)." }
      ],
      quiz: [
        { q: "What does the booklet compare the יצר הרע to?", a: "Darkness", w: ["Light", "Fire", "Oil"], p: "p. 1" },
        { q: "A little light pushes away…", a: "A lot of darkness", w: ["A little darkness", "All the cold", "The Greeks"], p: "p. 2" },
        { q: "Why do we light when it gets dark?", a: "To light up places and people not yet lit up by Torah and mitzvos", w: ["Candles are cheaper at night", "The Beis Hamikdash was dark", "So the Greeks won’t see"], p: "p. 19" },
        { q: "The 25th word in the Torah is…", a: "אור, light", w: ["חושך, darkness", "שמים, heaven", "ארץ, earth"], p: "p. 26" },
        { q: "What is the deeper reason the shamash is higher?", a: "Someone who lights up others goes higher", w: ["It burns longer", "It’s the biggest candle", "So it won’t go out"], p: "p. 35" }
      ]
    },
    {
      n: 15, name: "The name חנוכה",
      about: "What the name means.",
      focus: "The four meanings of the name and what each one teaches.",
      today: "Chanukah is connected to chinuch. What do you want to learn this Chanukah?",
      pages: ["pp. 17–18", "Kitzur p. 2"],
            overview: "The word Chanukah has a few meanings: dedication, education, and \"they rested on the 25th.\" Every meaning teaches us something else about the Yom Tov.",
      reading: [
        "The name “חנוכה” is a combination of two words “חנו-כה” which means “they rested on the 25th.” The name was given, because on this day we rested from the battles against our enemies. In Hebrew, the word חנו means “they rested” and כה is the number 25. Put them together and you get חנוכה - “They rested on the 25th”.",
        "“חנוכה” means “dedication” (or “renewal”). After settling into a newly purchased home, it is customary to celebrate and thank ה' by making a חנוכת הבית. The בית המקדש was desecrated and made טמא. On חנוכה we removed the impure objects from the בית המקדש and built a new מזבח. We rejoiced and made a חנוכת המזבח - a Dedication.",
        "The משכן in the desert - was completed many years earlier on the same day, the 25th of כסלו! Following ה''s instructions, the חנוכת המשכן - Dedication for the משכן in the desert was a few months later, on ראש חודש ניסן. Now, during the story of חנוכה, ה' “paid back” this special date with a חנוכת המזבח of the חשמונאים.",
        "חנוכה is also an acronym for the words “ח' נרות והלכה כבית הלל” which means that we follow the הלכה of בית הלל in the way we light the מנורה.",
        "חנוכה comes from the word חינוך which means education. חנוכה is a special time to educate ourselves and the world, to connect to ה' on a deeper level.",
        "חינוך translates as “Education”. Rashi explains חנך to mean that חינוך “helps someone get to the place where he is supposed to be” (educationally / spiritually, in a manner that he will stay and continue to grow from there).",
        "These days are called חנוכה, meaning, חנו כה - “They rested on the 25th (day)”, for that is when they defeated their enemies. It is also called חנוכה because they made a חנוכה - celebrated the re-dedication for the בית המקדש, that was defiled (made impure) by the enemies. For this reason some say we should have a festive meal on חנוכה. Another reason for the name חנוכה - is that the משכן was completed on this same day, many years earlier in the desert. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[15-a] On a basic level, the word chanukah means \"inauguration.\" Indeed, Chanukah celebrates the inauguration of a newly built altar in the Temple in Jerusalem. After the Maccabees defeated the Greek interlopers and drove them from Judea, they found that much of the Temple, including the altar, had been defiled and used for idolatry. The Maccabees buried the stones of the altar and built a new one. Thus, Chanukah celebrates the rededication of the Holy Temple and the altar.",
        "Source: What Does Chanukah Actually Mean? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4203685/jewish/What-Does-Chanukah-Actually-Mean.htm",
        "Article's sources: Numbers 7:84 (chanukat hamizbeach); Machzor Vitri 239; Shibolei Haleket 174; see also Maharsha on Talmud, Shabbat 21a.",
        "[15-b] Another explanation is that the word Chanukah is a conjugation of chanu-kah (חנו-כ\"ה), \"they rested on 25 Kislev.\" Chanukah alludes to the day the Maccabees rested from their war with the Greeks once they entered Jerusalem and the Temple: the 25th of Kislev.",
        "Source: What Does Chanukah Actually Mean? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4203685/jewish/What-Does-Chanukah-Actually-Mean.htm",
        "Article's sources: Rabbeinu Nissim (Ran) on Talmud, Shabbat 21a; Abudraham, Hilchot Chanukah."
      ],

      ideas: [
        { short: "Decode the name", how: "Flip cards for each meaning: חנו כ״ה, dedication, ח׳ נרות והלכה כבית הלל, and חינוך." },
        { short: "Letter puzzle", how: "Visitors build חנוכה from letter tiles and split it into חנו and כ״ה." },
        { short: "Dedication", how: "The Mishkan and the Beis Hamikdash, both connected to the 25th of Kislev (p. 17)." },
        { short: "Chinuch corner", how: "Visitors write one thing they want to learn this Chanukah." },
        { short: "Name quiz", how: "A quick quiz on the four meanings." }
      ],
      quiz: [
        { q: "What does חנו כ״ה mean?", a: "They rested on the 25th", w: ["They lit on the 25th", "Eight lights", "The Greeks left"], p: "p. 17" },
        { q: "The word חנוכה also means…", a: "Dedication", w: ["Light", "Oil", "Victory"], p: "p. 17" },
        { q: "What was finished in the desert on the 25th of Kislev?", a: "The Mishkan", w: ["The Luchos", "The first Beis Hamikdash", "The walls of Yerushalayim"], p: "p. 17" },
        { q: "חנוכה is connected to which word that means education?", a: "חינוך", w: ["חכמה", "חן", "חנות"], p: "p. 18" }
      ]
    },
    {
      n: 16, name: "Chanukah gelt",
      about: "Why we give it.",
      focus: "Why we give gelt, and giving part of it to tzedakah.",
      today: "How can you use what you have for good?",
      pages: ["p. 4", "p. 15"],
            overview: "Where did the custom of giving Chanukah gelt come from, and why do many give it on the fifth night? Gelt teaches children to learn Torah and to give tzedakah.",
      reading: [
        "חנוכה געלט (-money in Yiddish): Kids get money from their parents and anyone else... Especially the fifth night of חנוכה. All other nights are fine too!",
        "Many years ago, in celebration of חנוכה, kids would stay home from school. Their parents would have more time to learn with them and hear what they'd learned in school. The kids were rewarded for their fine learning with חנוכה געלט.",
        "Today too, the חנוכה געלט is meant to encourage kids to learn תורה, and to give 10% of the money to צדקה.",
        "Recently, chocolate coins wrapped in gold or silver foil have become very popular, and kids call them - חנוכה געלט. Chocolate Gelt is often used in place of money in Dreidel games.",
        "One should increase in צדקה during חנוכה, especially for the poor people who learn תורה. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[16-a] During Hanukkah it is customary to give gelt (money) to children, so that we can teach them to give some of it to charity—and just to keep things festive and happy... On Hanukkah, it is also customary to increase one's daily disbursement to charity.",
        "Source: What Is Gelt? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103084/jewish/What-Is-Gelt.htm",
        "Article's sources: These two lines have no footnote of their own; related citations in the same article: Talmud, Shabbat 22a-23a; Magen Avraham, preface to Orach Chaim 670.",
        "[16-b] The Hebrew word Chanukah shares the same root as chinuch, \"education.\" ... After the Greeks were defeated, it was necessary to re-educate the Jews—to reintroduce a large part of the population to Torah values. Appropriately, during Hanukkah it is customary to give gelt to children as a reward for Torah study.",
        "Source: What Is Gelt? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/103084/jewish/What-Is-Gelt.htm",
        "Article's sources: Maimonides, Mishneh Torah, Hilchot Teshuvah 10:5; Likutei Levi Yitzchak, Igrot, p. 358."
      ],

      ideas: [
        { short: "Earn your gelt", how: "Visitors answer a question to earn a chocolate coin with a hechsher." },
        { short: "10% for tzedakah", how: "A tzedakah box at the booth. Visitors figure out 10% of their gelt." },
        { short: "Gelt history", how: "A poster: kids got gelt as a reward for learning (p. 15)." },
        { short: "Design a coin", how: "Visitors design their own gelt coin with a Chanukah message." },
        { short: "Why money?", how: "A board on the good things we can do with money." }
      ],
      quiz: [
        { q: "What does gelt mean?", a: "Money, in Yiddish", w: ["Chocolate", "A present", "Light"], p: "p. 15" },
        { q: "Why did kids get gelt long ago?", a: "As a reward for their learning", w: ["To buy dreidels", "To pay the Greeks", "For lighting the menorah"], p: "p. 15" },
        { q: "How much of your gelt should go to tzedakah?", a: "10%", w: ["Half", "All of it", "None"], p: "p. 15" },
        { q: "Which night is especially for gelt, according to the booklet?", a: "The fifth night", w: ["The first night", "The eighth night", "Motzei Shabbos"], p: "p. 15" }
      ]
    },
    {
      n: 17, name: "פרסומי ניסא",
      about: "Publicizing the miracle.",
      focus: "Why we show the lights to everyone, where the menorah goes, and how Jews publicize the miracle today.",
      today: "How can you show you’re proud to be a Jew?",
      pages: ["p. 19", "Kitzur pp. 1, 4–5, 9, 12"],
            overview: "Pirsumei nisa means publicizing the miracle, and that is the whole point of the Chanukah lights. Where, when and how we light the menorah is all about letting the world see the light.",
      reading: [
        "Each year we celebrate חנוכה to commemorate and publicize these miracles.",
        "We kindle lights each night at the entrance of the house, to publicize the miracle. (Kitzur Shulchan Aruch)",
        "The מנורה should be lit at the entrance (front door) of your home, facing the outside (the street) where most people can see it, to publicize the miracle. You may also light the מנורה inside your home at a window that faces the street or near your front door. (Kitzur Shulchan Aruch)",
        "Lighting the מנורה facing the outside teaches us that we should not be satisfied if everything is good and warm in our own homes. Rather, it is our job to help illuminate and brighten others' lives with the light of the מנורה. The “outside” can also refer to people who have not yet had the opportunity to learn as much as we did about ה', His תורה and מצוות.",
        "If you are lighting at the door, the מנורה should be placed inside the doorway, within one Tefach of the left doorpost. This way, with your Mezuzah on the right and the מנורה on the left, you are surrounded by מצוות! (Kitzur Shulchan Aruch)",
        "The מנורה should be placed between three and ten Tefochim above the ground. (A Tefach is about 4 inches.) If the מנורה was placed higher than ten Tefochim, you are still Yotze (you've fulfilled your מצוה). If a מנורה is placed higher than 20 Amos, you are not Yotze - and you need to light again. (An Amah is about 18 inches.) If you live in a tall building, you may light the מנורה in your window - as long as it is below 20 Amos. (Kitzur Shulchan Aruch)",
        "The מנורה is lit in the Shul, with a ברכה, for Pirsumei Nisa - to publicize the miracle... No-one is Yotze from the Shul מנורה lighting. Each person needs to light his own מנורה at home. (Kitzur Shulchan Aruch)",
        "When ראש חודש טבת (which is also חנוכה) falls on שבת, we read from three ספרי תורה... Although we usually do the more common מצוה first, in this case we read the מפטיר of חנוכה instead of ראש חודש, for Pirsumei Nissa - to publicize the miracle. (Kitzur Shulchan Aruch)"
      ],
      extra: [
        "[17-a] The ideal place for the menorah—where it was placed it in Talmudic times—is at the front door of the home facing the street. However, the harsh realities of the Diaspora, both sociopolitical and meteorological, forced the menorah indoors, and the custom developed in some communities to put it on the windowsill instead.",
        "Source: Why Is Your Menorah not in the Window? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/1370967/jewish/Why-Is-Your-Menorah-not-in-the-Window.htm",
        "Article's sources: The article refers to the Talmud's description of the mezuzah on the right and the menorah on the left, and cites Likkutei Sichot, vol. 5, p. 456.",
        "[17-b] One factor may be that the Talmud describes the mezuzah on the right side and the menorah on the left side, surrounding us with mitzvahs... In order for the menorah's light to be visible to those on the outside, it must be less than 20 cubits (under 32 feet) from the ground.",
        "Source: Why Is Your Menorah not in the Window? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/1370967/jewish/Why-Is-Your-Menorah-not-in-the-Window.htm",
        "Article's sources: The article refers to the Talmud's description of the mezuzah on the right and the menorah on the left, and cites Likkutei Sichot, vol. 5, p. 456."
      ],

      ideas: [
        { short: "Where does it go?", how: "A model doorway. Visitors place the menorah on the left, opposite the mezuzah." },
        { short: "Height check", how: "A measuring tape on the wall: 3 to 10 tefachim, and never above 20 amos (Kitzur pp. 4–5)." },
        { short: "Window display", how: "A cardboard window with a menorah facing the street." },
        { short: "Spread the light", how: "A display of how Jews publicize the miracle today." },
        { short: "Surrounded", how: "Visitors stand in a doorway frame between a mezuzah and a menorah." }
      ],
      quiz: [
        { q: "What does פרסומי ניסא mean?", a: "Publicizing the miracle", w: ["Lighting the menorah", "Thanking Hashem quietly", "Telling a story at home"], p: "Kitzur p. 1" },
        { q: "Where is the best place for the menorah?", a: "At the doorway, facing the street", w: ["In the kitchen", "On the roof", "In the bedroom"], p: "Kitzur p. 4" },
        { q: "If you light at the doorway, which side does the menorah go on?", a: "The left side, opposite the mezuzah", w: ["The right side, next to the mezuzah", "In the middle", "Outside on the steps"], p: "Kitzur p. 4" },
        { q: "A menorah higher than what doesn’t count?", a: "20 amos", w: ["10 tefachim", "3 amos", "1 amah"], p: "Kitzur p. 5" },
        { q: "Does lighting in shul count for your home?", a: "No, you still light at home", w: ["Yes, if you said the brachos", "Only on Shabbos", "Only for kids"], p: "Kitzur p. 9" }
      ]
    },
    {
      n: 18, name: "The Chashmonaim",
      about: "Matisyahu and his sons.",
      focus: "Who Matisyahu and his sons were, and what each one did.",
      today: "When is it hard to stand up for what’s right?",
      pages: ["pp. 10–13", "pp. 33–34"],
            overview: "Who were the Chashmonaim, the small family of Kohanim that stood up to the mighty Greek empire? The story of Matisyahu, Yehudah and their brothers is the story of Chanukah itself.",
      reading: [
        "מתתיהו'S REVOLT: A frail old man, yet a giant in spirit, finally began the official rebellion against the יוונים and מתיונים. His name was מתתיהו. He was the son of יוחנן the כהן גדול, and lived with his five sons in the small town of מודיעין. He was from the distinguished חשמונאי family.",
        "מתתיהו realized that if he didn't act fast, many of the Jews would be lost to the יוונים. With a mighty cry of “מי לה' אלי” (whoever is for ה' follow me!) - מתתיהו swiftly unsheathed the מתיון's sword and killed him. A fierce battle ensued in which מתתיהו's sons and friends finished off the other officers and soldiers who had not escaped. Fully aware of the danger he and his family were in, מתתיהו, his five sons and a small group of Jews fled to the hills.",
        "מתתיהו's Sons: יוחנן שמעון יהודה אלעזר יונתן.",
        "מתתיהו was already old and felt that his time had come. He appointed his wise son שמעון as the spiritual advisor and his mighty warrior son יהודה, as the military leader. יהודה was known as יהודה המכבי. Some say that יהודה had the word מכבי engraved on his shield. The word מכבי is an acronym for “מי כמוכה באלים ה'” - Who is like you amongst the powerful ones - ה'? מכבי also comes from the Hebrew word מקבת - which is a hammer that was used in battles. יהודה's fist - and leadership - was powerful - as a hammer!",
        "יהודה led the Jews successfully in battle after battle. אנטיכוס sent bigger and stronger armies to capture יהודה and his men, but they all failed. Finally אנטיכוס sent his largest, most powerful army, with many thousands of foot soldiers, horsemen and armored chariots.",
        "יהודה gathered his men together and reminded them that it is not the military power or sophisticated weapons that win a war - it is ה''s help! “Few can win against many and the weak can win against the strong, as we've seen so many times before - if only ה' wants! ה' will surely fight for us in this final battle.” יהודה and his men flung themselves into the massive army - the most powerful army in the world at that time - sounding the שופר and calling out for ה''s help. ה' made a wondrous miracle - and caused יהודה to look like a heavenly angel. When the armies saw יהודה, they were terrified and began fighting each other. The victory was swift and complete.",
        "Where does the name: חשמונאים come from? The word חשמונאי means distinguished (great and famous). Some say that מתתיהו's family was given the title being that they were an extraordinary, honorable family. Others say that the family originally came from the town of חשמון. Some say that חשמון was the name of an ancient ancestor in their family.",
        "The name of the חשמונאים hints to that special number eight. In Hebrew “חש - Chash” means “feels” and שמונה is eight. The Chash-Shmona'im “felt the eight” - they felt and were connected to a level that is higher than nature.",
        "Unfortunately, the battles were not yet over. When אנטיכוס died, his son also sent massive armies to fight יהודה and his men. During these and many other future battles, one by one, יהודה and all but one of his brothers were killed. Each of the brothers led the Jewish People - until ה' took them back to Himself, in שמים. Shimon was the last remaining survivor, and with ה''s help he led the Jewish People to complete peace and freedom."
      ],
      extra: [
        "[18-a] The Maccabees were Jewish fighters who led the revolt against the Syrian Greek ruling class, who had suppressed Jewish religion in an effort to spread their Hellenistic customs and idolatrous beliefs. The Maccabee victory, and the subsequent miracle of the oil burning in the Temple menorah for eight days instead of one, is what we celebrate every year during the eight-day holiday of Chanukah.",
        "Source: Who Were the Maccabees? - 13 Facts About the Hanukkah Heroes - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4588772/jewish/Who-Were-the-Maccabees.htm",
        "Article's sources: This paragraph has no specific source citation. Elsewhere the article names the Talmud and Josephus without an exact passage reference.",
        "[18-b] The one time the story is briefly told, the leaders of the group (and their descendants) are referred to as the House of Chashmonai, the ancestral family of Matityahu, the pious and brave priest who led the group until his passing.",
        "Source: Who Were the Maccabees? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4588772/jewish/Who-Were-the-Maccabees.htm",
        "Article's sources: The article attributes this detail to the Talmud, but does not give the tractate or page here.",
        "[18-c] Matityahu began his revolt in the village of Modiin, where the Greeks tried to compel him to publically engage in idol worship. When he refused, violence broke out and a group of Jews ended up taking refuge in caves among the surrounding hills.",
        "Source: Who Were the Maccabees? - Chabad.org - https://www.chabad.org/holidays/chanukah/article_cdo/aid/4588772/jewish/Who-Were-the-Maccabees.htm",
        "Article's sources: This paragraph has no specific source citation. Elsewhere the article names Josephus and the Talmud without an exact passage reference."
      ],

      ideas: [
        { short: "Who am I?", how: "Clue cards for Matisyahu and each of his sons. Visitors guess who." },
        { short: "Family tree", how: "Matisyahu, his father Yochanan the Kohen Gadol, and the five sons." },
        { short: "Maccabee shield", how: "Visitors decorate a shield with מכבי and what it stands for." },
        { short: "The revolt in order", how: "A timeline from Modiin to the Beis Hamikdash." },
        { short: "מי לה׳ אלי", how: "A display about the call that started it all, and who answered it." }
      ],
      quiz: [
        { q: "Who started the revolt against the Greeks?", a: "Matisyahu", w: ["Yehuda", "Antiochus", "Shimon"], p: "p. 10" },
        { q: "Where did Matisyahu live?", a: "Modiin", w: ["Yerushalayim", "Chevron", "Teveria"], p: "p. 10" },
        { q: "What is מכבי short for?", a: "מי כמוכה באלים ה׳", w: ["מי לה׳ אלי", "נס גדול היה שם", "שמע ישראל"], p: "p. 11" },
        { q: "How many sons did Matisyahu have?", a: "Five", w: ["Seven", "Three", "Eight"], p: "p. 11" },
        { q: "Which son led the army?", a: "Yehuda", w: ["Shimon", "Yochanan", "Elazar"], p: "p. 11" }
      ]
    }
  ]
};
