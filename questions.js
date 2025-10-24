// Java Quiz Questions Database - Set 2 (Comprehensive Java Programming Assessment)
const quizQuestionsSet2 = [
    // ðŸŸ¦ Weeks 1â€“4 (Basics, I/O, Encapsulation â€“ 8 Qs)
    {
        question: "Q1. Java achieves platform independence through â€”",
        options: [
            "Bytecode and JVM",
            "Compiler optimization",
            "OS-level instructions",
            "Dynamic binding"
        ],
        correctAnswer: 0, // A
        marks: 2
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
        marks: 2
    },
    {
        question: "Q3. Which among the following are valid identifiers in Java? (Select multiple)",
        options: [
            "_value and $sum",
            "9number and value#1",
            "Only _value",
            "All are valid"
        ],
        correctAnswer: [0, 2], // A and C
        marks: 2,
        multipleAnswers: true
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
        marks: 2
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
        marks: 2
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
        marks: 2
    },
    {
        question: "Q7. System.in and System.out are â€”",
        options: [
            "Variables",
            "Streams",
            "Packages",
            "Interfaces"
        ],
        correctAnswer: 1, // B
        marks: 2
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
        marks: 2
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
        marks: 2
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
        multipleAnswers: true
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
        marks: 2
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
        marks: 2
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
        marks: 2
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
        marks: 2
    },
    {
        question: "Q15. What is the output?\ntry {\n   int a = 10 / 0;\n} catch (Exception e) {\n   System.out.println(\"Exception\");\n}\nSystem.out.println(\"Next\");",
        options: [
            "Exception",
            "Exception\nNext",
            "Next",
            "Runtime error"
        ],
        correctAnswer: 0, // A (prints both)
        marks: 2
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
        marks: 2
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
        marks: 2
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
        multipleAnswers: true
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
        marks: 2
    },
    {
        question: "Q20. What happens when you call start() twice?\nclass MyThread extends Thread {\n   public void run() { System.out.println(\"Run\"); }\n   public static void main(String[] args) {\n       MyThread t = new MyThread();\n       t.start();\n       t.start();\n   }\n}",
        options: [
            "Prints Run twice",
            "IllegalThreadStateException",
            "Compilation error",
            "Prints Run once"
        ],
        correctAnswer: 2, // C
        marks: 2
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
        marks: 2
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
        marks: 2
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
        marks: 2
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
        marks: 2
    },
    
    // ðŸŽ¨ Applets & Servlets (5 Qs)
    {
        question: "Q25. Applets run inside â€”",
        options: [
            "JVM only",
            "Web browser",
            "Application window",
            "Command line"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q26. Which method is called when applet is first loaded?",
        options: [
            "start()",
            "init()",
            "run()",
            "paint()"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q27. The paint(Graphics g) method is used to â€”",
        options: [
            "Initialize applet",
            "Draw output",
            "Handle input",
            "Restart the applet"
        ],
        correctAnswer: 3, // D
        marks: 2
    },
    {
        question: "Q28. Servlets are used to â€”",
        options: [
            "Handle client-side GUI",
            "Handle server-side requests",
            "Render HTML pages locally",
            "Compile JSP files"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q29. Which package provides Applet classes?",
        options: [
            "java.awt.*",
            "java.applet.*",
            "java.swing.*",
            "javax.servlet.*"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    
    // ðŸ’» Swing & AWT (5 Qs)
    {
        question: "Q30. Swing is based on â€”",
        options: [
            "AWT (lightweight components)",
            "Native OS calls",
            "Applet API",
            "JVM execution stack"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q31. Which of the following is not a layout manager?",
        options: [
            "BorderLayout",
            "FlowLayout",
            "ColorLayout",
            "GridLayout"
        ],
        correctAnswer: 3, // D
        marks: 2
    },
    {
        question: "Q32. Which event is triggered by clicking a button?",
        options: [
            "ActionEvent",
            "ItemEvent",
            "MouseEvent",
            "WindowEvent"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q33. In Swing, the top-level container is â€”",
        options: [
            "JPanel",
            "JFrame",
            "JButton",
            "JLabel"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q34. What is the output?\nJButton b = new JButton(\"Click\");\nb.setText(\"Press\");\nSystem.out.println(b.getText());",
        options: [
            "Click",
            "Press",
            "ClickPress",
            "null"
        ],
        correctAnswer: 2, // C
        marks: 2
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
        marks: 2
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
        marks: 2
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
        marks: 2
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
        marks: 2
    },
    
    // ðŸŸ¦ Weeks 11â€“12 (JDBC, Interfaces, Packages â€“ 7 Qs)
    {
        question: "Q39. JDBC stands for â€”",
        options: [
            "Java Database Connectivity",
            "Java Data Bridge Connection",
            "Java Database Communication",
            "Java Data Base Converter"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q40. Which class is used to execute SQL queries?",
        options: [
            "Statement",
            "Connection",
            "DriverManager",
            "ResultSet"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q41. ResultSet rs = st.executeQuery(\"SELECT * FROM student\");\nrs will contain â€”",
        options: [
            "Number of rows affected",
            "Query result table",
            "Boolean",
            "None"
        ],
        correctAnswer: 3, // D
        marks: 2
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
        marks: 2
    },
    {
        question: "Q43. What is the output?\ninterface A { int x = 5; }\nclass B implements A {\n   public static void main(String[] args) {\n      System.out.println(x * 2);\n   }\n}",
        options: [
            "5",
            "10",
            "Compilation error",
            "0"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q44. Packages are used to â€”",
        options: [
            "Organize classes",
            "Create new data types",
            "Control access",
            "Handle exceptions"
        ],
        correctAnswer: 3, // D
        marks: 2
    },
    {
        question: "Q45. Default package access means the class is visible â€”",
        options: [
            "Only within the same class",
            "Within same package",
            "Everywhere",
            "Nowhere"
        ],
        correctAnswer: 1, // B
        marks: 2
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
        correctAnswer: 3, // D
        marks: 2
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
        marks: 2
    },
    {
        question: "Q48. What is the output?\nint a = 5; int b = 5;\nSystem.out.println(a == b);\nInteger x = new Integer(5); Integer y = new Integer(5);\nSystem.out.println(x == y);",
        options: [
            "true\ntrue",
            "true\nfalse",
            "false\ntrue",
            "false\nfalse"
        ],
        correctAnswer: 0, // A
        marks: 2
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
        multipleAnswers: true
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
        marks: 2
    }
];


