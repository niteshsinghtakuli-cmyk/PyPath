const chapters = [
  {
    title: "Getting Started With Python",
    topics: ["Introduction to Python", "Features and uses", "First program", "Comments"],
    intro: "Python is a programming language. We use it to give instructions to a computer.",
    notes: [
      { title: "Introduction to Python", text: "Python is a high-level programming language, which means its instructions are designed to be easier for people to read. Python code is written as plain text and run by the Python interpreter. Students use it to learn problem-solving; professionals use it for websites, automation, data analysis and artificial intelligence." },
      { title: "Features and uses", text: "Python has a clear, readable syntax, so beginners can focus on logic instead of complicated symbols. It works on Windows, macOS and Linux, and many ready-made libraries add extra features. Common uses include school projects, web applications, repetitive-task automation and data analysis." },
      { title: "Your first program", text: `The print() function displays text, numbers or the result of an expression. Put text inside single or double quotation marks; put numbers without quotation marks. Python runs each line from top to bottom. In this example, print() displays the message Hello, world!.`, code: 'print("Hello, world!")', output: "Hello, world!" },
      { title: "Comments", text: `A comment is a note written for people who read the program. Start a single-line comment with #. Python ignores the comment when running the program, so it does not appear in the output. Use comments to explain why a step is needed or what a section does.`, code: '# This is a comment\nprint("Let us learn!")', output: "Let us learn!" }
    ],
    starter: 'print("Hello, Python!")\nprint("I am learning Python.")',
    question: "Which function displays output?",
    options: ["show()", "print()", "write()", "input()"], answer: 1
  },
  {
    title: "Python Fundamentals",
    topics: ["Variables", "Data types", "Input and output", "Operators"],
    intro: "Variables hold values, data types describe those values, and operators perform actions.",
    notes: [
      { title: "Variables", text: `A variable is a name used to store or refer to a value. Use = to assign a value, as in age = 16. Text values need quotation marks, while numbers do not. Variable names should be meaningful, cannot start with a digit, and are case-sensitive (age and Age are different names).`, code: 'name = "Aman"\nage = 16\nprint(name)\nprint(age)', output: "Aman\n16" },
      { title: "Basic data types", text: `Python uses data types to describe values. int stores whole numbers such as 10; float stores decimal numbers such as 2.5; str stores text such as Hello; and bool stores either True or False. Use type(value) to check a value’s type. These types affect which operations make sense.`, code: 'print(type(10))\nprint(type(2.5))\nprint(type("Hi"))', output: "<class 'int'>\n<class 'float'>\n<class 'str'>" },
      { title: "Input and output", text: `Use print() to show information and input() to ask the user to type a response. Important: input() always returns text (a string), even if the user types digits. Convert it with int() for whole-number calculations or float() for decimal calculations.`, code: 'name = input("Your name: ")\nprint("Hello", name)', output: "This example asks for a name." },
      { title: "Operators", text: `Operators perform calculations. + adds, - subtracts, * multiplies and / divides. // gives floor division, % gives the remainder after division, and ** means power. For example, 10 % 3 is 1 because 3 goes into 10 three times with 1 left over.`, code: 'print(10 + 5)\nprint(10 % 3)\nprint(2 ** 3)', output: "15\n1\n8" }
    ],
    starter: 'a = 10\nb = 3\nprint(a + b)\nprint(a % b)',
    question: "What is the data type of 2.5?",
    options: ["int", "str", "float", "bool"], answer: 2
  },
  {
    title: "Data Handling",
    topics: ["Values and data types", "Type conversion", "Formatted output", "Reading input"],
    intro: "Data handling means receiving, converting, storing and using values correctly.",
    notes: [
      { title: "Values and data types", text: `A value is a piece of data that a program uses. Examples include the integer 5, the decimal 2.5, the string five and the Boolean value True. The type matters: 5 + 2 calculates 7, while "5" + "2" joins text and produces fifty-two as text.`, code: 'print(5 + 2)\nprint("5" + "2")', output: "7\n52" },
      { title: "Type conversion", text: `Type conversion changes a value from one data type to another when possible. int("16") converts text into the integer 16, float converts decimal text into 2.5, and str(16) creates the text representation of 16. Conversion fails if the text is not a valid number, such as converting the word hello into an integer.`, code: 'age = int("16")\nprint(age + 1)', output: "17" },
      { title: "Formatted output", text: `An f-string makes it easy to combine text and variable values. Put the letter f before the opening quote, then place a variable or expression inside curly brackets {}. Python replaces the brackets with the value when the string is displayed.`, code: 'name = "Riya"\nprint(f"Hello, {name}!")', output: "Hello, Riya!" },
      { title: "Reading input", text: `input() pauses the program and waits for the user to type an answer. The answer is returned as a string. If you need to calculate with it, convert it first—for example, marks = int(input()) for a whole-number answer. This example expects the user to enter a whole number.`, code: 'marks = int(input("Marks: "))\nprint(marks + 5)', output: "Try entering a number when you run this program." }
    ],
    starter: 'price = 25\nquantity = 4\ntotal = price * quantity\nprint("Total:", total)',
    question: "What does int(25 as text) return?",
    options: ["Text", "Integer 25", "Decimal 25.0", "True"], answer: 1
  },
  {
    title: "Flow of Control",
    topics: ["if statement", "if-else and elif", "for loop", "while loop", "break and continue"],
    intro: "Flow of control determines which instructions run and how often they run.",
    notes: [
      { title: "if statement", text: `An if statement makes a decision. Python checks the condition after if; if the condition is True, it runs the indented lines below it. A colon : ends the condition line, and indentation shows which instructions belong to the block. Here, Pass appears only when marks are at least 50.`, code: 'marks = 75\nif marks >= 50:\n    print("Pass")', output: "Pass" },
      { title: "if-else and elif", text: `Use if for the first condition, elif for another condition, and else for the fallback when none of the earlier conditions is True. Only the first matching branch runs. This is useful for decisions such as pass/fail, grading or choosing a menu option.`, code: 'marks = 42\nif marks >= 50:\n    print("Pass")\nelse:\n    print("Try again")', output: "Try again" },
      { title: "for loop", text: `A for loop repeats a block once for each item in a sequence. range(1, 4) starts at 1 and stops before 4, so it produces 1, 2 and 3. The stop value is not included. Loops reduce repeated code when you need to perform the same action several times.`, code: 'for number in range(1, 4):\n    print(number)', output: "1\n2\n3" },
      { title: "while loop", text: `A while loop keeps running as long as its condition is True. In this example, count decreases by 1 after each print, so it eventually reaches 0 and the condition count > 0 becomes False. If you never update the condition correctly, the loop may run forever.`, code: 'count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1', output: "3\n2\n1" },
      { title: "break and continue", text: `break immediately ends the nearest loop. continue skips the remaining statements in the current pass and starts the next pass. In the example, continue skips printing 3, so the output is 1, 2 and 4.`, code: 'for n in range(1, 5):\n    if n == 3:\n        continue\n    print(n)', output: "1\n2\n4" }
    ],
    starter: 'for number in range(1, 6):\n    print(number)',
    question: "What values does range(1, 4) produce?",
    options: ["1, 2, 3, 4", "1, 2, 3", "0, 1, 2, 3", "1, 4"], answer: 1
  },
  {
    title: "String Manipulation",
    topics: ["Creating strings", "Indexing", "Slicing strings", "String methods", "String exercises"],
    intro: "A string is text made from characters and is written inside quotation marks.",
    notes: [
      { title: "Creating strings", text: `A string (str) is a sequence of characters, such as a word, sentence or number stored as text. Create one using matching single quotes or double quotes. For example, "Hello" and 'Hello' are both valid. Keep the opening and closing quotation marks the same.`, code: 'first = "Hello"\nsecond = \'Python\'\nprint(first, second)', output: "Hello Python" },
      { title: "Indexing", text: `Each character in a string has an index. Python starts counting at 0, so the item at index zero is the first character. Negative indexes count backwards from the end: word[-1] is the last character. An index outside the available positions causes an IndexError.`, code: 'word = "PYTHON"\nprint(word[0])\nprint(word[-1])', output: "P\nN" },
      { title: "Slicing strings", text: `Slicing selects a section of a string using text[start:stop]. The start position is included, but the stop position is excluded. Therefore, word[1:4] takes positions 1, 2 and 3. You can leave out start or stop to take from the beginning or through the end.`, code: 'word = "PYTHON"\nprint(word[1:4])', output: "YTH" },
      { title: "String methods", text: `String methods are built-in operations that work on text. upper() returns uppercase letters, lower() returns lowercase letters, capitalize() makes the first character uppercase, and strip() removes whitespace from the beginning and end. These methods return a new string; they do not change the original string in place.`, code: 'word = "python"\nprint(word.upper())\nprint(word.capitalize())', output: "PYTHON\nPython" },
      { title: "String exercises", text: `Use len(text) to count the characters in a string. You can combine len(), indexing and slicing to inspect text. For example, len("computer") is 8, while word[0:3] selects the first three characters. Predict the result first, then run the code to check your understanding.`, code: 'word = "computer"\nprint(len(word))\nprint(word[0:3])', output: "8\ncom" }
    ],
    starter: 'word = "PYTHON"\nprint(word[0])\nprint(word[1:4])\nprint(word.lower())',
    question: 'What is "PYTHON"[1:4]?',
    options: ["PYT", "YTH", "THO", "YTHO"], answer: 1
  },
  {
    title: "List Manipulation",
    topics: ["Creating lists", "Indexing and slicing", "Updating lists", "List methods", "List exercises"],
    intro: "A list stores several items in one variable. Lists use square brackets and can be changed.",
    notes: [
      { title: "Creating lists", text: `A list stores multiple values in a single variable. Write its items inside square brackets [], separating items with commas. A list can contain strings, numbers or mixed types, and it preserves item order. An empty list is written as [].`, code: 'fruits = ["apple", "mango", "grapes"]\nprint(fruits)', output: "['apple', 'mango', 'grapes']" },
      { title: "Indexing and slicing", text: `List indexing reads one item using its position, starting at 0. Slicing uses list[start:stop] to return a section; the start is included and stop is excluded. In the example, numbers[1:3] returns the items at indexes 1 and 2: [20, 30].`, code: 'numbers = [10, 20, 30, 40]\nprint(numbers[0])\nprint(numbers[1:3])', output: "10\n[20, 30]" },
      { title: "Updating lists", text: `Lists are mutable, meaning their contents can be changed after creation. Assign a new value to an existing position, such as numbers[0] = 99. The list length stays the same when you replace an item. Use a valid index, or Python raises an IndexError.`, code: 'numbers = [10, 20]\nnumbers[0] = 99\nprint(numbers)', output: "[99, 20]" },
      { title: "List methods", text: `List methods help you manage items. append(value) adds one item to the end; remove(value) removes the first matching value; sort() rearranges the existing list in ascending order by default. Remember that append() changes the original list rather than returning a new list.`, code: 'numbers = [3, 1, 2]\nnumbers.append(4)\nnumbers.sort()\nprint(numbers)', output: "[1, 2, 3, 4]" },
      { title: "List exercises", text: `A good way to practise lists is to perform several changes in sequence. In this example, append("green") adds a third colour. You can also replace an item using its index or remove an item with remove(). Print the list at the end to inspect the result.`, code: 'colours = ["red", "blue"]\ncolours.append("green")\nprint(colours)', output: "['red', 'blue', 'green']" }
    ],
    starter: 'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)',
    question: "Which method adds an item to the end of a list?",
    options: ["append()", "addEnd()", "push()", "insertEnd()"], answer: 0
  },
  {
    title: "Tuples",
    topics: ["Creating tuples", "Indexing and slicing", "Tuple methods", "Lists vs tuples"],
    intro: "A tuple is an ordered collection. Unlike a list, its items cannot be changed after creation.",
    notes: [
      { title: "Creating tuples", text: `A tuple is an ordered collection that cannot be changed after it is created. Tuples are commonly written with parentheses and commas, for example (4, 7). A one-item tuple needs a trailing comma: (5,). Without the comma, (5) is just the integer 5 inside parentheses.`, code: 'point = (4, 7)\nprint(point)', output: "(4, 7)" },
      { title: "Indexing and slicing", text: `Tuples support indexing and slicing much like lists. Index 0 refers to the first item, index 1 to the second, and negative indexes count from the end. Slicing returns a new tuple containing the selected items; the stop position is excluded.`, code: 'days = ("Mon", "Tue", "Wed")\nprint(days[1])\nprint(days[0:2])', output: "Tue\n('Mon', 'Tue')" },
      { title: "Tuple methods", text: `Tuples have a small set of useful methods. count(value) tells you how many times a value appears, while index(value) returns the position of its first occurrence. Since tuples are immutable, they do not support methods such as append() or remove().`, code: 'values = (2, 3, 2, 4)\nprint(values.count(2))\nprint(values.index(4))', output: "2\n3" },
      { title: "Lists vs tuples", text: `Both lists and tuples keep items in order and allow indexing. Lists use square brackets [] and are mutable, so items can be added, removed or replaced. Tuples commonly use parentheses () and are immutable. Choose a list when data needs to change, and a tuple for a fixed group of values.`, code: 'my_list = [1, 2]\nmy_tuple = (1, 2)\nprint(type(my_list))\nprint(type(my_tuple))', output: "<class 'list'>\n<class 'tuple'>" }
    ],
    starter: 'point = (4, 7)\nprint(point[0])\nprint(len(point))',
    question: "Which is a one-item tuple?",
    options: ["(5)", "[5]", "(5,)", "{5}"], answer: 2
  },
  {
    title: "Dictionaries",
    topics: ["Creating dictionaries", "Accessing values", "Adding and updating", "Dictionary methods", "Looping through dictionaries"],
    intro: "A dictionary stores information as key-value pairs.",
    notes: [
      { title: "Creating dictionaries", text: `A dictionary stores data as key-value pairs, written as {key: value}. Each key is used to look up its matching value, such as a student name or subject mark. Keys must be unique; values can be strings, numbers, lists or other supported objects.`, code: 'student = {"name": "Aman", "marks": 88}\nprint(student)', output: "{'name': 'Aman', 'marks': 88}" },
      { title: "Accessing values", text: `To read a dictionary value, place its key inside square brackets: student["name"]. The key must exist or Python raises a KeyError. If a key may be missing, use get(), for example, use get() with a default value such as Not given, to provide a default value safely.`, code: 'student = {"name": "Aman", "marks": 88}\nprint(student["name"])', output: "Aman" },
      { title: "Adding and updating", text: `Use dictionary[key] = value to add a new key-value pair or replace the value for an existing key. In the example, the key "age" is added. If you assign to "name" again, its current value is updated instead of creating a duplicate key.`, code: 'student = {"name": "Aman"}\nstudent["age"] = 16\nprint(student)', output: "{'name': 'Aman', 'age': 16}" },
      { title: "Dictionary methods", text: `Dictionary methods help you inspect stored data. keys() provides the keys, values() provides the values, and items() provides pairs of (key, value). These are useful when you want to display all subjects, all marks, or each subject together with its mark.`, code: 'marks = {"Maths": 90, "CS": 95}\nprint(list(marks.keys()))', output: "['Maths', 'CS']" },
      { title: "Looping through dictionaries", text: `A for loop can visit dictionary entries one at a time. Use dictionary.items() when you need both the key and its value; in this example, subject receives "Maths" or "CS", and score receives the matching mark. This pattern is useful for printing reports or calculating totals.`, code: 'marks = {"Maths": 90, "CS": 95}\nfor subject, score in marks.items():\n    print(subject, score)', output: "Maths 90\nCS 95" }
    ],
    starter: 'student = {"name": "Aman", "marks": 88}\nprint(student["name"])\nprint(student["marks"])',
    question: 'How do you access the value for the key "name"?',
    options: ['student(name)', 'student["name"]', "student.name()", "student->name"], answer: 1
  },
  {
    title: "Understanding Sorting",
    topics: ["Using sorted()", "Using list.sort()", "Ascending order", "Descending order"],
    intro: "Sorting arranges items in a chosen order, such as smallest to largest or A to Z.",
    notes: [
      { title: "Using sorted()", text: `The built-in sorted() function takes an iterable and returns a new list with its items arranged in order. It does not change the original list, so you can keep the original order and use the sorted result separately. By default, numbers are sorted from smallest to largest.`, code: 'numbers = [8, 3, 6, 1]\nprint(sorted(numbers))\nprint(numbers)', output: "[1, 3, 6, 8]\n[8, 3, 6, 1]" },
      { title: "Using list.sort()", text: `The list method sort() rearranges the list itself and returns None, rather than returning a new sorted list. Use it when you want the original list to be reordered. Do not write numbers = numbers.sort(), because that would replace numbers with None.`, code: 'numbers = [8, 3, 6, 1]\nnumbers.sort()\nprint(numbers)', output: "[1, 3, 6, 8]" },
      { title: "Ascending order", text: `Ascending order means arranging values from smallest to largest, or words from A to Z. Both sorted() and list.sort() use ascending order by default. For numbers, [1, 2, 4, 5] is ascending, while [5, 4, 2, 1] is descending.`, code: 'print(sorted([5, 1, 4, 2]))', output: "[1, 2, 4, 5]" },
      { title: "Descending order", text: `To sort in descending order, pass reverse=True to sorted() or to list.sort(). This places larger numbers before smaller ones and reverses the usual alphabetical order for strings. Example: sorted([3, 9, 1], reverse=True) returns [9, 3, 1].`, code: 'numbers = [3, 9, 1]\nprint(sorted(numbers, reverse=True))', output: "[9, 3, 1]" }
    ],
    starter: 'numbers = [8, 3, 6, 1]\nprint(sorted(numbers))\nprint(sorted(numbers, reverse=True))',
    question: "Which command changes the original list?",
    options: ["sorted(numbers)", "numbers.sort()", "order(numbers)", "sort.new(numbers)"], answer: 1
  }
];

// PYTHON PATHWAY — simple website interactions
const $ = id => document.getElementById(id);
let currentChapter = 0, python = null;

// Create the chapter menu from the chapter list above.
function buildMenu() {
  $("chapterMenu").innerHTML = chapters.map((chapter, c) => `
    <div>
      <button class="chapter-button" onclick="toggleChapter(${c})"><span>${chapter.title}</span><span class="arrow">›</span></button>
      <div id="topics${c}" class="subtopic-list hidden">
        ${chapter.topics.map((topic, t) => `<button class="subtopic-button" onclick="openLesson(${c}, ${t})">${topic}</button>`).join("")}
      </div>
    </div>`).join("");
}

// Open or close a chapter in the sidebar.
function toggleChapter(number) {
  const list = $("topics" + number), wasClosed = list.classList.contains("hidden");
  document.querySelectorAll(".subtopic-list").forEach(item => item.classList.add("hidden"));
  document.querySelectorAll(".chapter-button").forEach(item => item.classList.remove("open", "active"));
  if (wasClosed) { list.classList.remove("hidden"); list.previousElementSibling.classList.add("open", "active"); }
}

// Show a topic, its example, the practice editor, and the quiz.
function openLesson(c, t) {
  currentChapter = c;
  const chapter = chapters[c], note = chapter.notes[t];
  $("homePage").classList.add("hidden"); $("lessonPage").classList.remove("hidden"); $("homeButton").classList.remove("active");
  $("lessonLabel").textContent = `CHAPTER ${c + 1} · ${chapter.topics[t].toUpperCase()}`;
  $("lessonTitle").textContent = chapter.title; $("lessonIntro").textContent = chapter.intro;
  $("lessonNotes").innerHTML = note ? `<article class="note-card"><h3>${note.title}</h3><p>${note.text}</p>${note.code ? '<p><strong>Example code</strong></p><pre class="code-example"></pre><p><strong>Expected output</strong></p><pre class="expected-output"></pre>' : ''}</article>` : "";
  if (note && note.code) { $("lessonNotes").querySelector(".code-example").textContent = note.code; $("lessonNotes").querySelector(".expected-output").textContent = note.output; }
  $("codeEditor").value = chapter.starter; $("codeOutput").textContent = "Your result will appear here.";
  $("quizQuestion").textContent = chapter.question; $("quizFeedback").textContent = "";
  $("quizChoices").innerHTML = chapter.options.map((option, i) => `<button class="quiz-choice" onclick="checkAnswer(${c}, ${i})">${String.fromCharCode(65 + i)}. ${option}</button>`).join("");
  document.querySelectorAll(".subtopic-button").forEach(button => button.classList.remove("active"));
  document.querySelectorAll(".subtopic-list")[c].children[t].classList.add("active");
  $("sidebar").classList.remove("mobile-open"); window.scrollTo(0, 0);
}

// Check the selected quiz answer.
function checkAnswer(c, choice) {
  const correct = choice === chapters[c].answer;
  $("quizFeedback").textContent = correct ? "Correct! Well done." : "Not quite. Try again.";
  $("quizFeedback").style.color = correct ? "green" : "crimson";
}

// Return to the learning home screen.
function showHome() {
  $("lessonPage").classList.add("hidden"); $("homePage").classList.remove("hidden"); $("homeButton").classList.add("active");
  document.querySelectorAll(".chapter-button").forEach(button => button.classList.remove("active"));
}

// Load Python in the browser when the Run button is clicked.
async function runCode() {
  $("codeOutput").textContent = "Loading Python and running code...";
  try {
    if (!python) python = await loadPyodide();
    python.runPython("import sys\nfrom io import StringIO\npathway_output = StringIO()\nsys.stdout = pathway_output\nsys.stderr = pathway_output");
    await python.runPythonAsync($("codeEditor").value);
    $("codeOutput").textContent = python.runPython("pathway_output.getvalue()") || "Code finished. No output was printed.";
  } catch (error) { $("codeOutput").textContent = "Error: " + error; }
}

// Connect the buttons to their actions.
$("homeButton").addEventListener("click", showHome);
$("backHomeButton").addEventListener("click", showHome);
$("menuButton").addEventListener("click", () => $("sidebar").classList.toggle("mobile-open"));
$("runButton").addEventListener("click", runCode);
$("resetButton").addEventListener("click", () => { $("codeEditor").value = chapters[currentChapter].starter; $("codeOutput").textContent = "Example reset. Click Run Python."; });
buildMenu();
