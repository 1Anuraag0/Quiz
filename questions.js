// Java Quiz Questions Database - Set 2 (Comprehensive Java Programming Assessment)
const quizQuestionsSet2 = [
    // ðŸŸ¦ Weeks 1â€“4 (Basics, I/O, Encapsulation â€“ 8 Qs)
    {
        question: "Q1. Java achieves platform independence through -",
        options: [
            "Bytecode and JVM",
            "Compiler optimization",
            "OS-level instructions",
            "Dynamic binding"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Java code is compiled into bytecode, which is then interpreted by the JVM (Java Virtual Machine), making it platform-independent."
    },
    {
        question: "Q2. What is the output?\nSystem.out.println(5 + 5 + \"Java\" + 5 + 5);",
        options: [
            "10Java10",
            "10Java55",
            "55Java55",
            "Compilation error"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "5+5=10, then string concatenation occurs: 10+\"Java\" becomes \"10Java\", then +5+5 are concatenated as strings, resulting in \"10Java55\"."
    },
    {
        question: "Q3. Which among the following are valid identifiers in Java? (Select multiple)",
        options: [
            "_value (valid)",
            "9number (invalid - starts with digit)",
            "$sum (valid)",
            "value#1 (invalid - contains #)"
        ],
        correctAnswer: [0, 2], // A and C
        marks: 2,
        multipleAnswers: true,
        explanation: "_value and $sum are valid because identifiers can start with _ or $. 9number is invalid (starts with digit) and value#1 is invalid (contains #)."
    },
    {
        question: "Q4. What does the following code print?\nint a = 10;\nint b = 5;\nSystem.out.println(a > b ? a++ : ++b);\nSystem.out.println(a + \" \" + b);",
        options: [
            "10\n11 5",
            "10\n10 6",
            "11\n11 5",
            "10\n11 6"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Ternary returns 10 (a++ uses post-increment), then a becomes 11. Second line prints '11 5'."
    },
    {
        question: "Q5. Encapsulation is violated when:",
        options: [
            "Class variables are declared private",
            "Data is directly accessed by outside classes",
            "Public getter and setter methods are used",
            "Variables are hidden within a class"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Encapsulation is broken when data is directly accessed by outside classes without proper access control methods."
    },
    {
        question: "Q6. Scanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nWhich package must be imported?",
        options: [
            "java.io.*",
            "java.util.*",
            "java.lang.*",
            "java.net.*"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Scanner class is located in java.util package."
    },
    {
        question: "Q7. System.in and System.out are -",
        options: [
            "Variables",
            "Streams",
            "Packages",
            "Interfaces"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "System.in and System.out are I/O streams used for input and output operations."
    },
    {
        question: "Q8. Which statement about FileReader is correct?",
        options: [
            "Reads bytes",
            "Reads characters",
            "Writes data",
            "Writes objects"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "FileReader is used to read character data from files."
    },
    
    // ðŸŸ© Weeks 5â€“10 (OOP â†’ Networking â€“ 35 Qs)
    // ðŸ§± Inheritance (5 Qs)
    {
        question: "Q9. What is the output?\nclass A { void msg() { System.out.println(\"A\"); } }\nclass B extends A { void msg() { System.out.println(\"B\"); } }\nA obj = new B();\nobj.msg();",
        options: [
            "A",
            "B",
            "Compilation error",
            "Runtime error"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "B overrides A's msg() method. Runtime polymorphism causes B's version to execute, printing 'B'."
    },
    {
        question: "Q10. Which statements are true for inheritance? (Select multiple)",
        options: [
            "super() must be first in constructor",
            "Private members are inherited but not accessible",
            "Constructors are not inherited",
            "Final methods can be overridden"
        ],
        correctAnswer: [0, 1, 2], // A, B, C
        marks: 2,
        multipleAnswers: true,
        explanation: "super() must be first ✓, private members are inherited but inaccessible ✓, constructors are not inherited ✓. Final methods cannot be overridden ✗."
    },
    {
        question: "Q11. Multiple inheritance in Java is achieved through:",
        options: [
            "Abstract classes",
            "Interfaces",
            "Nested classes",
            "Method overloading"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Java supports multiple inheritance only through interfaces, not classes."
    },
    {
        question: "Q12. Which keyword restricts inheritance of a class?",
        options: [
            "abstract",
            "final",
            "super",
            "const"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "The 'final' keyword prevents a class from being inherited."
    },
    {
        question: "Q13. Which of the following is true?",
        options: [
            "Subclass constructor is called before superclass constructor",
            "Superclass constructor executes first",
            "Constructors execute alphabetically",
            "Depends on compiler"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Superclass constructor always executes first (via implicit or explicit super() call)."
    },
    
    // âš ï¸ Exception Handling (5 Qs)
    {
        question: "Q14. Which statement is true?",
        options: [
            "Checked exceptions are caught at runtime",
            "Unchecked exceptions are checked at compile time",
            "Checked exceptions must be declared or handled",
            "Unchecked exceptions must be declared"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "Checked exceptions must be declared with throws or handled with try-catch at compile time."
    },
    {
        question: "Q15. What is the output?\ntry {\n   int a = 10 / 0;\n} catch (Exception e) {\n   System.out.println(\"Exception\");\n}\nSystem.out.println(\"Next\");",
        options: [
            "Exception\nNext",
            "Exception",
            "Next",
            "Runtime error"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Exception is caught and handled, so it prints 'Exception', then execution continues and prints 'Next'."
    },
    {
        question: "Q16. What is the output?\ntry {\n   int a[] = new int[2];\n   System.out.println(a[5]);\n} catch (ArrayIndexOutOfBoundsException e) {\n   System.out.println(\"Error\");\n}",
        options: [
            "Error",
            "0",
            "Compilation error",
            "No output"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "ArrayIndexOutOfBoundsException is caught and the catch block prints 'Error'."
    },
    {
        question: "Q17. finally block executes -",
        options: [
            "Only if exception is thrown",
            "Only if exception is not thrown",
            "Always",
            "Only on RuntimeException"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "The finally block always executes, regardless of whether an exception occurs or not."
    },
    {
        question: "Q18. Which classes form the top of the exception hierarchy? (Select multiple)",
        options: [
            "Throwable",
            "Exception",
            "Error",
            "RuntimeException"
        ],
        correctAnswer: [0, 1, 2], // A, B, C
        marks: 2,
        multipleAnswers: true,
        explanation: "Throwable is the root. Exception and Error are direct subclasses of Throwable, forming the top of the hierarchy."
    },
    
    // ðŸ§µ Threads (6 Qs)
    {
        question: "Q19. How many ways can a thread be created in Java?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Two ways: extend Thread class or implement Runnable interface."
    },
    {
        question: "Q20. What happens when you call start() twice?\nclass MyThread extends Thread {\n   public void run() { System.out.println(\"Run\"); }\n   public static void main(String[] args) {\n       MyThread t = new MyThread();\n       t.start();\n       t.start();\n   }\n}",
        options: [
            "Prints Run twice",
            "IllegalThreadStateException",
            "Compilation error",
            "Prints Run once"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Calling start() twice throws IllegalThreadStateException because a thread cannot be started more than once."
    },
    {
        question: "Q21. Which method suspends thread execution for a specific time?",
        options: [
            "wait()",
            "sleep()",
            "yield()",
            "stop()"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "sleep() suspends thread execution for the specified number of milliseconds."
    },
    {
        question: "Q22. Which of the following is true about run() and start()?",
        options: [
            "run() starts a new thread",
            "start() executes in main thread",
            "start() creates a new thread and calls run() internally",
            "Both create new threads"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "start() creates a new thread and internally calls the run() method in that new thread."
    },
    {
        question: "Q23. What is synchronization used for?",
        options: [
            "Stop threads",
            "Handle exceptions",
            "Prevent simultaneous access to shared resources",
            "Increase speed"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "Synchronization prevents multiple threads from accessing shared resources simultaneously, avoiding data inconsistency."
    },
    {
        question: "Q24. Which state comes immediately after start()?",
        options: [
            "Ready",
            "Running",
            "Waiting",
            "Terminated"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "After start() is called, the thread enters the Ready (Runnable) state and waits for CPU time from the scheduler."
    },
    
    // ðŸŽ¨ Applets & Servlets (5 Qs)
    {
        question: "Q25. Applets run inside -",
        options: [
            "JVM only",
            "Web browser",
            "Application window",
            "Command line"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Applets are small Java programs designed to run inside a web browser."
    },
    {
        question: "Q26. Which method is called when applet is first loaded?",
        options: [
            "start()",
            "init()",
            "run()",
            "paint()"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "init() is called once when the applet is first loaded to perform initialization."
    },
    {
        question: "Q27. The paint(Graphics g) method is used to -",
        options: [
            "Initialize applet",
            "Draw output",
            "Handle input",
            "Restart the applet"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "paint() is used to draw graphics and text output on the applet."
    },
    {
        question: "Q28. Servlets are used to -",
        options: [
            "Handle client-side GUI",
            "Handle server-side requests",
            "Render HTML pages locally",
            "Compile JSP files"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Servlets handle server-side requests and generate dynamic responses."
    },
    {
        question: "Q29. Which package provides Applet classes?",
        options: [
            "java.awt.*",
            "java.applet.*",
            "java.swing.*",
            "javax.servlet.*"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "The java.applet.* package provides the Applet class and related functionality."
    },
    
    // ðŸ’» Swing & AWT (5 Qs)
    {
        question: "Q30. Swing is based on -",
        options: [
            "AWT (lightweight components)",
            "Native OS calls",
            "Applet API",
            "JVM execution stack"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Swing is built on top of AWT but provides lightweight components that are purely Java-based."
    },
    {
        question: "Q31. Which of the following is not a layout manager?",
        options: [
            "BorderLayout",
            "FlowLayout",
            "ColorLayout",
            "GridLayout"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "ColorLayout is not a valid layout manager. BorderLayout, FlowLayout, and GridLayout are standard layout managers."
    },
    {
        question: "Q32. Which event is triggered by clicking a button?",
        options: [
            "ActionEvent",
            "ItemEvent",
            "MouseEvent",
            "WindowEvent"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "ActionEvent is generated when a button is clicked or an action is performed."
    },
    {
        question: "Q33. In Swing, the top-level container is -",
        options: [
            "JPanel",
            "JFrame",
            "JButton",
            "JLabel"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "JFrame is the main top-level container in Swing that holds all other components."
    },
    {
        question: "Q34. What is the output?\nJButton b = new JButton(\"Click\");\nb.setText(\"Press\");\nSystem.out.println(b.getText());",
        options: [
            "Click",
            "Press",
            "ClickPress",
            "null"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "setText() replaces the button's text. The output is 'Press'."
    },
    
    // ðŸŒ Networking (4 Qs)
    {
        question: "Q35. Which class is used for TCP client connections?",
        options: [
            "ServerSocket",
            "Socket",
            "DatagramSocket",
            "URLConnection"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Socket class is used to create TCP client connections."
    },
    {
        question: "Q36. Which package provides networking classes?",
        options: [
            "java.net",
            "java.io",
            "java.sql",
            "java.util"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "The java.net package contains classes for networking operations like Socket, ServerSocket, URL, etc."
    },
    {
        question: "Q37. Which method returns the IP address of a host?",
        options: [
            "getHostAddress()",
            "getIPAddress()",
            "getIP()",
            "getAddress()"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "getHostAddress() returns the IP address string in textual format."
    },
    {
        question: "Q38. What will InetAddress.getLocalHost() return?",
        options: [
            "Hostname and IP of local machine",
            "Remote IP address",
            "DNS name",
            "None"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "getLocalHost() returns an InetAddress object containing the hostname and IP address of the local machine."
    },
    
    // ðŸŸ¦ Weeks 11â€“12 (JDBC, Interfaces, Packages â€“ 7 Qs)
    {
        question: "Q39. JDBC stands for -",
        options: [
            "Java Database Connectivity",
            "Java Data Bridge Connection",
            "Java Database Communication",
            "Java Data Base Converter"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "JDBC stands for Java Database Connectivity, which provides API for database operations."
    },
    {
        question: "Q40. Which class is used to execute SQL queries?",
        options: [
            "Statement",
            "Connection",
            "DriverManager",
            "ResultSet"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Statement interface is used to execute SQL queries and update statements."
    },
    {
        question: "Q41. ResultSet rs = st.executeQuery(\"SELECT * FROM student\");\nrs will contain -",
        options: [
            "Number of rows affected",
            "Query result table",
            "Boolean",
            "None"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "executeQuery() returns a ResultSet object containing the query result table."
    },
    {
        question: "Q42. Which keyword is used to implement an interface?",
        options: [
            "interface",
            "extends",
            "implements",
            "override"
        ],
        correctAnswer: 2, // C
        marks: 2,
        explanation: "The 'implements' keyword is used when a class wants to implement an interface."
    },
    {
        question: "Q43. What is the output?\ninterface A { int x = 5; }\nclass B implements A {\n   public static void main(String[] args) {\n      System.out.println(x * 2);\n   }\n}",
        options: [
            "5",
            "10",
            "Compilation error",
            "0"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Interface variable x is accessible in the implementing class. Output is 5 * 2 = 10."
    },
    {
        question: "Q44. Packages are used to -",
        options: [
            "Organize classes",
            "Create new data types",
            "Control access",
            "Handle exceptions"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Packages are used to organize related classes and interfaces, providing namespace management and access control."
    },
    {
        question: "Q45. Default package access means the class is visible -",
        options: [
            "Only within the same class",
            "Within same package",
            "Everywhere",
            "Nowhere"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Default (package-private) access means the class is accessible only within the same package."
    },
    
    // ðŸ§© Integrated Mixed (5 Qs)
    {
        question: "Q46. What is the output?\nclass X { X() { System.out.print(\"X \"); } }\nclass Y extends X { Y() { System.out.print(\"Y \"); } }\nclass Z extends Y { Z() { System.out.print(\"Z \"); }\n   public static void main(String[] args) { new Z(); } }",
        options: [
            "X Y Z",
            "Z Y X",
            "XYZ",
            "ZYX"
        ],
        correctAnswer: 0, // A
        marks: 2,
        explanation: "Constructors execute from parent to child: X constructor first, then Y, then Z. Output: 'X Y Z'."
    },
    {
        question: "Q47. What is the output?\nString s1 = \"Java\";\nString s2 = new String(\"Java\");\nSystem.out.println(s1.equals(s2));\nSystem.out.println(s1 == s2);",
        options: [
            "true\ntrue",
            "true\nfalse",
            "false\ntrue",
            "false\nfalse"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "equals() compares content (true), == compares references (false - different objects)."
    },
    {
        question: "Q48. What is the output?\nint a = 5; int b = 5;\nSystem.out.println(a == b);\nInteger x = new Integer(5); Integer y = new Integer(5);\nSystem.out.println(x == y);",
        options: [
            "true\ntrue",
            "true\nfalse",
            "false\ntrue",
            "false\nfalse"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "Primitives a==b is true (value comparison). Integer objects x==y is false (different object references)."
    },
    {
        question: "Q49. Which modifiers can be applied to a class? (Select multiple)",
        options: [
            "public",
            "abstract",
            "private",
            "final"
        ],
        correctAnswer: [0, 1, 3], // A, B, D
        marks: 2,
        multipleAnswers: true,
        explanation: "Top-level classes can have public, abstract, and final modifiers. Private is only for nested classes."
    },
    {
        question: "Q50. What is the output?\ntry {\n   System.out.println(\"Try\");\n   System.exit(0);\n} finally {\n   System.out.println(\"Finally\");\n}",
        options: [
            "Try Finally",
            "Try",
            "Finally",
            "Compilation error"
        ],
        correctAnswer: 1, // B
        marks: 2,
        explanation: "System.exit(0) terminates the JVM immediately. Finally block doesn't execute when System.exit() is called."
    }
];


