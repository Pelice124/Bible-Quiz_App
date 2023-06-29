const questions = [
    // Add your 500 questions here
    {
        question: "Who built the ark according to the Bible?",
        answers: [
          { text: "Moses", correct: false },
          { text: "Noah", correct: true },
          { text: "Abraham", correct: false },
          { text: "Joseph", correct: false }
        ]
      },
      {
        question: "How many books are in the New Testament?",
        answers: [
          { text: "27", correct: true },
          { text: "39", correct: false },
          { text: "66", correct: false },
          { text: "12", correct: false }
        ]
      },
      {
        question: "Who was swallowed by a great fish or whale?",
        answers: [
          { text: "Paul", correct: false },
          { text: "Jonah", correct: true },
          { text: "Daniel", correct: false },
          { text: "David", correct: false }
        ]
      },
      {
        question: "Who betrayed Jesus to the authorities?",
        answers: [
          { text: "Judas Iscariot", correct: true },
          { text: "Peter", correct: false },
          { text: "John", correct: false },
          { text: "Thomas", correct: false }
        ]
      },
      {
        question: "How many commandments did God give to Moses?",
        answers: [
          { text: "10", correct: true },
          { text: "5", correct: false },
          { text: "7", correct: false },
          { text: "12", correct: false }
        ]
      },
      {
        question: "Who was the first king of Israel?",
        answers: [
          { text: "David", correct: false },
          { text: "Solomon", correct: false },
          { text: "Saul", correct: true },
          { text: "Samuel", correct: false }
        ]
      },
      {
        question: "Who wrote most of the New Testament letters?",
        answers: [
          { text: "Peter", correct: false },
          { text: "Paul", correct: true },
          { text: "John", correct: false },
          { text: "Matthew", correct: false }
        ]
      },
      {
        question: "Which prophet saw a valley of dry bones come to life?",
        answers: [
          { text: "Ezekiel", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Daniel", correct: false }
        ]
      },
      {
        question: "Who was sold into slavery by his brothers?",
        answers: [
          { text: "Joseph", correct: true },
          { text: "Moses", correct: false },
          { text: "Jacob", correct: false },
          { text: "Abraham", correct: false }
        ]
      },
      {
        question: "Which disciple denied Jesus three times?",
        answers: [
          { text: "James", correct: false },
          { text: "Andrew", correct: false },
          { text: "Peter", correct: true },
          { text: "John", correct: false }
        ]
      },
      {
        question: "Who is known as the father of faith?",
        answers: [
          { text: "Abraham", correct: true },
          { text: "Moses", correct: false },
          { text: "Noah", correct: false },
          { text: "David", correct: false }
        ]
      },
      {
        question: "Who was the first high priest of Israel?",
        answers: [
          { text: "Aaron", correct: true },
          { text: "Eli", correct: false },
          { text: "Samuel", correct: false },
          { text: "Phinehas", correct: false }
        ]
      },
      {
        question: "Who killed Goliath with a slingshot?",
        answers: [
          { text: "Saul", correct: false },
          { text: "David", correct: true },
          { text: "Jonathan", correct: false },
          { text: "Samuel", correct: false }
        ]
      },
      {
        question: "How many days did it take God to create the world?",
        answers: [
          { text: "3", correct: false },
          { text: "6", correct: true },
          { text: "7", correct: false },
          { text: "10", correct: false }
        ]
      },
      {
        question: "Who wrote the Book of Revelation?",
        answers: [
          { text: "John", correct: true },
          { text: "Paul", correct: false },
          { text: "Peter", correct: false },
          { text: "Matthew", correct: false }
        ]
      },
      {
        question: "What is the shortest verse in the Bible?",
        answers: [
          { text: "John 11:35", correct: false },
          { text: "Matthew 7:7", correct: false },
          { text: "Psalm 119:105", correct: false },
          { text: "John 11:25", correct: true }
        ]
      },
      {
        question: "Who was the mother of Jesus?",
        answers: [
          { text: "Mary", correct: true },
          { text: "Elizabeth", correct: false },
          { text: "Martha", correct: false },
          { text: "Rachel", correct: false }
        ]
      },
      {
        question: "Who wrote the Book of Acts?",
        answers: [
          { text: "Paul", correct: false },
          { text: "Peter", correct: false },
          { text: "Luke", correct: true },
          { text: "John", correct: false }
        ]
      },
      {
        question: "How many fruits of the Spirit are mentioned in the Bible?",
        answers: [
          { text: "5", correct: false },
          { text: "7", correct: false },
          { text: "9", correct: false },
          { text: "9", correct: true }
        ]
      },
      {
        question: "Who was the mother of Samuel?",
        answers: [
          { text: "Ruth", correct: false },
          { text: "Deborah", correct: false },
          { text: "Hannah", correct: true },
          { text: "Esther", correct: false }
        ]
      },
      {
        question: "Who wrote the Book of Psalms?",
        answers: [
          { text: "David", correct: true },
          { text: "Solomon", correct: false },
          { text: "Asaph", correct: false },
          { text: "Ezra", correct: false }
        ]
      },
      {
        question: "Who was the sister of Moses?",
        answers: [
          { text: "Miriam", correct: true },
          { text: "Leah", correct: false },
          { text: "Sarah", correct: false },
          { text: "Rebekah", correct: false }
        ]
      },
      {
        question: "Who was the prophet that challenged the prophets of Baal on Mount Carmel?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Which disciple was a tax collector before following Jesus?",
        answers: [
          { text: "Matthew", correct: true },
          { text: "Andrew", correct: false },
          { text: "James", correct: false },
          { text: "Bartholomew", correct: false }
        ]
      },
      {
        question: "What was the name of the garden where Adam and Eve were placed?",
        answers: [
          { text: "Garden of Eden", correct: true },
          { text: "Garden of Gethsemane", correct: false },
          { text: "Garden of Olives", correct: false },
          { text: "Garden of Babylon", correct: false }
        ]
      },
      {
        question: "Who was the wife of King Ahab and an influential figure in the story of Naboth's vineyard?",
        answers: [
          { text: "Jezebel", correct: true },
          { text: "Esther", correct: false },
          { text: "Ruth", correct: false },
          { text: "Bathsheba", correct: false }
        ]
      },
      {
        question: "Who was the prophet that foretold the birth of Jesus?",
        answers: [
          { text: "Isaiah", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Ezekiel", correct: false },
          { text: "Micah", correct: false }
        ]
      },
      {
        question: "What did God instruct Noah to bring aboard the ark?",
        answers: [
          { text: "Animals of every kind", correct: true },
          { text: "His entire family", correct: false },
          { text: "Food and provisions", correct: false },
          { text: "Precious artifacts", correct: false }
        ]
      },
      {
        question: "Who was the Roman governor responsible for ordering the crucifixion of Jesus?",
        answers: [
          { text: "Pontius Pilate", correct: true },
          { text: "Herod Antipas", correct: false },
          { text: "Tiberius Caesar", correct: false },
          { text: "Augustus Caesar", correct: false }
        ]
      },
      {
        question: "Which disciple walked on water with Jesus?",
        answers: [
          { text: "Peter", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false },
          { text: "Thomas", correct: false }
        ]
      },
      {
        question: "Who was the prophet that was taken up to heaven in a whirlwind?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Which book in the New Testament contains the Beatitudes?",
        answers: [
          { text: "Matthew", correct: true },
          { text: "Mark", correct: false },
          { text: "Luke", correct: false },
          { text: "John", correct: false }
        ]
      },
      {
        question: "Who was the disciple known as 'Doubting Thomas'?",
        answers: [
          { text: "Thomas", correct: true },
          { text: "Peter", correct: false },
          { text: "Andrew", correct: false },
          { text: "James", correct: false }
        ]
      },
      {
        question: "Who was the Roman centurion present at the crucifixion of Jesus, who proclaimed Him as the Son of God?",
        answers: [
          { text: "Centurionius", correct: false },
          { text: "Cornelius", correct: false },
          { text: "Pilate", correct: false },
          { text: "Longinus", correct: true }
        ]
      },
      {
        question: "Which disciple was a fisherman by profession?",
        answers: [
          { text: "Peter", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false },
          { text: "Philip", correct: false }
        ]
      },
      {
        question: "Who was the prophet that confronted King David about his sin with Bathsheba?",
        answers: [
          { text: "Nathan", correct: true },
          { text: "Samuel", correct: false },
          { text: "Elijah", correct: false },
          { text: "Elisha", correct: false }
        ]
      },
      {
        question: "What were the names of the two disciples on the road to Emmaus when they encountered the resurrected Jesus?",
        answers: [
          { text: "Cleopas and another disciple", correct: true },
          { text: "Andrew and Philip", correct: false },
          { text: "James and John", correct: false },
          { text: "Bartholomew and Thomas", correct: false }
        ]
      },
      {
        question: "Who was the Israelite judge and prophetess who defeated the Canaanite general Sisera?",
        answers: [
          { text: "Deborah", correct: true },
          { text: "Ruth", correct: false },
          { text: "Esther", correct: false },
          { text: "Huldah", correct: false }
        ]
      },
      {
        question: "Who was the disciple that Jesus loved and is often referred to as the author of the Gospel of John?",
        answers: [
          { text: "John", correct: true },
          { text: "Peter", correct: false },
          { text: "James", correct: false },
          { text: "Andrew", correct: false }
        ]
      },
      {
        question: "Which prophet saw a chariot of fire and was taken up to heaven in a whirlwind?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Who was the first martyr of the early Christian church?",
        answers: [
          { text: "Stephen", correct: true },
          { text: "James", correct: false },
          { text: "Philip", correct: false },
          { text: "Barnabas", correct: false }
        ]
      },
      {
        question: "Who was the prophet that challenged the prophets of Baal on Mount Carmel?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Which disciple was a tax collector before following Jesus?",
        answers: [
          { text: "Matthew", correct: true },
          { text: "Andrew", correct: false },
          { text: "James", correct: false },
          { text: "Bartholomew", correct: false }
        ]
      },
      {
        question: "What was the name of the garden where Adam and Eve were placed?",
        answers: [
          { text: "Garden of Eden", correct: true },
          { text: "Garden of Gethsemane", correct: false },
          { text: "Garden of Olives", correct: false },
          { text: "Garden of Babylon", correct: false }
        ]
      },
      {
        question: "Who was the wife of King Ahab and an influential figure in the story of Naboth's vineyard?",
        answers: [
          { text: "Jezebel", correct: true },
          { text: "Esther", correct: false },
          { text: "Ruth", correct: false },
          { text: "Bathsheba", correct: false }
        ]
      },
      {
        question: "Who was the prophet that foretold the birth of Jesus?",
        answers: [
          { text: "Isaiah", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Ezekiel", correct: false },
          { text: "Micah", correct: false }
        ]
      },
      {
        question: "What did God instruct Noah to bring aboard the ark?",
        answers: [
          { text: "Animals of every kind", correct: true },
          { text: "His entire family", correct: false },
          { text: "Food and provisions", correct: false },
          { text: "Precious artifacts", correct: false }
        ]
      },
      {
        question: "Who was the Roman governor responsible for ordering the crucifixion of Jesus?",
        answers: [
          { text: "Pontius Pilate", correct: true },
          { text: "Herod Antipas", correct: false },
          { text: "Tiberius Caesar", correct: false },
          { text: "Augustus Caesar", correct: false }
        ]
      },
      {
        question: "Which disciple walked on water with Jesus?",
        answers: [
          { text: "Peter", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false },
          { text: "Thomas", correct: false }
        ]
      },
      {
        question: "Who was the prophet that was taken up to heaven in a whirlwind?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "What was the name of the city where Jesus was born?",
        answers: [
          { text: "Bethlehem", correct: true },
          { text: "Nazareth", correct: false },
          { text: "Jerusalem", correct: false },
          { text: "Capernaum", correct: false }
        ]
      },
      {
        question: "Who was the king of Israel when Jesus was born?",
        answers: [
          { text: "Herod the Great", correct: true },
          { text: "Herod Antipas", correct: false },
          { text: "Pontius Pilate", correct: false },
          { text: "Caesar Augustus", correct: false }
        ]
      },
      {
        question: "What did Jesus say is the greatest commandment?",
        answers: [
          { text: "Love the Lord your God with all your heart, soul, and mind", correct: true },
          { text: "Honor your father and mother", correct: false },
          { text: "You shall not murder", correct: false },
          { text: "You shall not steal", correct: false }
        ]
      },
      {
        question: "Who was the father of John the Baptist?",
        answers: [
          { text: "Zechariah", correct: true },
          { text: "Joseph", correct: false },
          { text: "Simeon", correct: false },
          { text: "Zacharias", correct: false }
        ]
      },
      {
        question: "Who was the Roman centurion that recognized Jesus as the Son of God at His crucifixion?",
        answers: [
          { text: "Centurionius", correct: false },
          { text: "Cornelius", correct: false },
          { text: "Pilate", correct: false },
          { text: "Longinus", correct: true }
        ]
      },
      {
        question: "Which disciple was a fisherman by profession?",
        answers: [
          { text: "Peter", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false },
          { text: "Philip", correct: false }
        ]
      },
      {
        question: "Who was the prophet that confronted King David about his sin with Bathsheba?",
        answers: [
          { text: "Nathan", correct: true },
          { text: "Samuel", correct: false },
          { text: "Elijah", correct: false },
          { text: "Elisha", correct: false }
        ]
      },
      {
        question: "What were the names of the two disciples on the road to Emmaus when they encountered the resurrected Jesus?",
        answers: [
          { text: "Cleopas and another disciple", correct: true },
          { text: "Andrew and Philip", correct: false },
          { text: "James and John", correct: false },
          { text: "Bartholomew and Thomas", correct: false }
        ]
      },
      {
        question: "Who was the Israelite judge and prophetess who defeated the Canaanite general Sisera?",
        answers: [
          { text: "Deborah", correct: true },
          { text: "Ruth", correct: false },
          { text: "Esther", correct: false },
          { text: "Hannah", correct: false }
        ]
      },
      {
        question: "Which disciple doubted the resurrection of Jesus until he saw the wounds in His hands and side?",
        answers: [
          { text: "Thomas", correct: true },
          { text: "Peter", correct: false },
          { text: "James", correct: false },
          { text: "John", correct: false }
        ]
      },
      {
        question: "Who was the high priest that interrogated Jesus before His crucifixion?",
        answers: [
          { text: "Caiaphas", correct: true },
          { text: "Annas", correct: false },
          { text: "Gamaliel", correct: false },
          { text: "Nicodemus", correct: false }
        ]
      },
      {
        question: "Who wrote the Book of Genesis?",
        answers: [
          { text: "Moses", correct: true },
          { text: "David", correct: false },
          { text: "Solomon", correct: false },
          { text: "Adam", correct: false }
        ]
      },
      {
        question: "Who was the first martyr of the Christian church?",
        answers: [
          { text: "Stephen", correct: true },
          { text: "James", correct: false },
          { text: "Philip", correct: false },
          { text: "Barnabas", correct: false }
        ]
      },
      {
        question: "Who was the prophet that challenged the prophets of Baal on Mount Carmel?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Which disciple was a tax collector before following Jesus?",
        answers: [
          { text: "Matthew", correct: true },
          { text: "Andrew", correct: false },
          { text: "James", correct: false },
          { text: "Bartholomew", correct: false }
        ]
      },
      {
        question: "What was the name of the garden where Adam and Eve were placed?",
        answers: [
          { text: "Garden of Eden", correct: true },
          { text: "Garden of Gethsemane", correct: false },
          { text: "Garden of Olives", correct: false },
          { text: "Garden of Babylon", correct: false }
        ]
      },
      {
        question: "Who was the wife of King Ahab and an influential figure in the story of Naboth's vineyard?",
        answers: [
          { text: "Jezebel", correct: true },
          { text: "Esther", correct: false },
          { text: "Ruth", correct: false },
          { text: "Bathsheba", correct: false }
        ]
      },
      {
        question: "Who was the prophet that foretold the birth of Jesus?",
        answers: [
          { text: "Isaiah", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Ezekiel", correct: false },
          { text: "Micah", correct: false }
        ]
      },
      {
        question: "What did God instruct Noah to bring aboard the ark?",
        answers: [
          { text: "Animals of every kind", correct: true },
          { text: "His entire family", correct: false },
          { text: "Food and provisions", correct: false },
          { text: "Precious artifacts", correct: false }
        ]
      },
      {
        question: "Who was the Roman governor responsible for ordering the crucifixion of Jesus?",
        answers: [
          { text: "Pontius Pilate", correct: true },
          { text: "Herod Antipas", correct: false },
          { text: "Tiberius Caesar", correct: false },
          { text: "Augustus Caesar", correct: false }
        ]
      },
      {
        question: "Which disciple walked on water with Jesus?",
        answers: [
          { text: "Peter", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false },
          { text: "Thomas", correct: false }
        ]
      },
      {
        question: "Who was the prophet that was taken up to heaven in a whirlwind?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "What was the name of the city where Jesus was born?",
        answers: [
          { text: "Bethlehem", correct: true },
          { text: "Nazareth", correct: false },
          { text: "Jerusalem", correct: false },
          { text: "Capernaum", correct: false }
        ]
      },
      {
        question: "Who was the king of Israel when Jesus was born?",
        answers: [
          { text: "Herod the Great", correct: true },
          { text: "Herod Antipas", correct: false },
          { text: "Pontius Pilate", correct: false },
          { text: "Caesar Augustus", correct: false }
        ]
      },
      {
        question: "What did Jesus say is the greatest commandment?",
        answers: [
          { text: "Love the Lord your God with all your heart, soul, and mind", correct: true },
          { text: "Honor your father and mother", correct: false },
          { text: "You shall not murder", correct: false },
          { text: "You shall not steal", correct: false }
        ]
      },
      {
        question: "Who was the father of John the Baptist?",
        answers: [
          { text: "Zechariah", correct: true },
          { text: "Joseph", correct: false },
          { text: "Simeon", correct: false },
          { text: "Zacharias", correct: false }
        ]
      },
      {
        question: "Who was the prophet that saw a vision of a valley filled with dry bones coming to life?",
        answers: [
          { text: "Ezekiel", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Daniel", correct: false }
        ]
      },
      {
        question: "Which book in the Bible contains the story of Noah and the ark?",
        answers: [
          { text: "Genesis", correct: true },
          { text: "Exodus", correct: false },
          { text: "Leviticus", correct: false },
          { text: "Numbers", correct: false }
        ]
      },
      {
        question: "Who was the disciple that Jesus called to be a fisher of men?",
        answers: [
          { text: "Andrew", correct: true },
          { text: "Peter", correct: false },
          { text: "James", correct: false },
          { text: "John", correct: false }
        ]
      },
      {
        question: "Which prophet called down fire from heaven to consume a sacrifice?",
        answers: [
          { text: "Elijah", correct: true },
          { text: "Elisha", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Who wrote most of the New Testament letters?",
        answers: [
          { text: "Peter", correct: false },
          { text: "Paul", correct: true },
          { text: "John", correct: false },
          { text: "James", correct: false }
        ]
      },
      {
        question: "Who was the first king of Israel?",
        answers: [
          { text: "David", correct: false },
          { text: "Solomon", correct: false },
          { text: "Saul", correct: true },
          { text: "Samuel", correct: false }
        ]
      },
      {
        question: "Which prophet saw a vision of a valley filled with dry bones coming to life?",
        answers: [
          { text: "Ezekiel", correct: true },
          { text: "Jeremiah", correct: false },
          { text: "Isaiah", correct: false },
          { text: "Daniel", correct: false }
        ]
      },
      {
        question: "Who was the king that built a temple for the Lord in Jerusalem?",
        answers: [
          { text: "Solomon", correct: true },
          { text: "David", correct: false },
          { text: "Hezekiah", correct: false },
          { text: "Josiah", correct: false }
        ]
      },
      {
        question: "Who was the disciple that replaced Judas Iscariot among the twelve apostles?",
        answers: [
          { text: "Matthias", correct: true },
          { text: "Barnabas", correct: false },
          { text: "Silas", correct: false },
          { text: "Timothy", correct: false }
        ]
      },
      {
        question: "Which king of Israel married the evil queen Jezebel?",
        answers: [
          { text: "Ahab", correct: true },
          { text: "Jehoshaphat", correct: false },
          { text: "Jehu", correct: false },
          { text: "Joash", correct: false }
        ]
      },
      {
        question: "Who was the apostle that Jesus called while he was working as a tax collector?",
        answers: [
          { text: "Matthew", correct: true },
          { text: "Mark", correct: false },
          { text: "Luke", correct: false },
          { text: "John", correct: false }
        ]
      },
      {
        question: "Who was the first woman according to the Bible?",
        answers: [
          { text: "Eve", correct: true },
          { text: "Sarah", correct: false },
          { text: "Rebekah", correct: false },
          { text: "Ruth", correct: false }
        ]
      },
      {
        question: "Who was the prophet that challenged the prophets of Baal on Mount Carmel?",
        answers: [
        { text: "Elijah", correct: true },
        { text: "Elisha", correct: false },
        { text: "Isaiah", correct: false },
        { text: "Jeremiah", correct: false }
        ]
      },
      {
        question: "Who was the king of Babylon who captured Jerusalem and exiled the Israelites?",
        answers: [
        { text: "Nebuchadnezzar", correct: true },
        { text: "Cyrus", correct: false },
        { text: "Darius", correct: false },
        { text: "Belshazzar", correct: false }
        ]
      },                                           
      {
        question: "Which disciple of Jesus doubted His resurrection until he saw Him personally?",
        answers: [
        { text: "Thomas", correct: true },
        { text: "Andrew", correct: false },
        { text: "Peter", correct: false },
        { text: "John", correct: false }
        ]
      },
      
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  let answeredQuestions = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions();
    showQuestion();
  }
  
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
    answeredQuestions++;
  
    if (answeredQuestions === 20) {
      showScore();
      return;
    }
  
    if (currentQuestionIndex === questions.length - 1) {
      showScore();
    }
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${answeredQuestions}!`;
    nextButton.innerHTML = "Next Set";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    if (answeredQuestions === 20 || currentQuestionIndex === questions.length - 1) {
      currentQuestionIndex = 0;
      shuffleQuestions();
      answeredQuestions = 0;
    } else {
      currentQuestionIndex++;
    }
    showQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    handleNextButton();
  });
  
  startQuiz();
  
