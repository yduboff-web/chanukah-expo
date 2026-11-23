/* =========================================================
   CHANUKAH EXPO – SITE DATA
   Everything the site shows comes from this file.
   Edit groups, dates, reading sheets and extra readings here.
   ========================================================= */

window.EXPO = {

  /* Code that opens the teacher view (all groups and all topics). */
  teacherCode: "RD5787",

  /* ---------------------------------------------------------
     GROUPS – fill in after matching.
     code:    what the group types to log in (letters/numbers)
     grade:   5 or 6
     members: FIRST NAMES ONLY – this site is public
     topic:   topic number 1–18
     Delete the two DEMO groups before going live.
     --------------------------------------------------------- */
  groups: [
    { code: "DEMO5", grade: 5, members: ["Student A", "Student B"], topic: 2 },
    { code: "DEMO6", grade: 6, members: ["Student C", "Student D"], topic: 4 },
     { code: "PLAY1", grade: 6, members: ["Test Student A", "Test Student B"], topic: 1 },
  ],

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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
      reading: null, extra: null,
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
