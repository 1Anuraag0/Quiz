// Java Quiz Questions Database - Set 1 (Total: 100 marks)
const quizQuestionsSet1 = [
    // Week 1–2: Java Basics & OOP Concepts (1 mark each - basic concepts)
    {
        question: "Q1. Java is a:",
        options: [
            "Compiled language only",
            "Interpreted language only",
            "Both compiled and interpreted",
            "Assembled language"
        ],
        correctAnswer: 2, // C
        marks: 1
    },
    {
        question: "Q2. Which of the following is not a Java feature?",
        options: [
            "Object-oriented",
            "Platform independent",
            "Pointer arithmetic",
            "Robust"
        ],
        correctAnswer: 2, // C
        marks: 1
    },
    {
        question: "Q3. Which of the following data types has the highest precision?",
        options: [
            "float",
            "int",
            "double",
            "long"
        ],
        correctAnswer: 2, // C
        marks: 1
    },
    {
        question: "Q4. What is the output?\nSystem.out.println(10 + 20 + \"Java\" + 10 + 20);",
        options: [
            "30Java30",
            "30Java1020",
            "1020Java1020",
            "Compilation error"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q5. Identify the incorrect variable declaration:",
        options: [
            "int _num = 10;",
            "float $rate = 7.5f;",
            "char 1ch = 'A';",
            "boolean flag = true;"
        ],
        correctAnswer: 2, // C
        marks: 1
    },
    {
        question: "Q6. What is the output of:\nint a = 5;\nSystem.out.println(++a * 2 + a++);",
        options: [
            "12",
            "13",
            "14",
            "18"
        ],
        correctAnswer: 3, // D (18 = 6*2 + 6)
        marks: 2
    },
    {
        question: "Q7. Which statement best defines encapsulation?",
        options: [
            "Hiding implementation details using private members",
            "Extending multiple classes",
            "Defining multiple methods with the same name",
            "Implementing multiple interfaces"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    
    // Week 3: I/O Handling (2 marks each - practical concepts)
    {
        question: "Q8. Which class allows reading text efficiently from a file?",
        options: [
            "FileInputStream",
            "BufferedReader",
            "InputStreamReader",
            "Scanner"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q9. To write text to a file, we use:",
        options: [
            "FileOutputStream",
            "FileReader",
            "FileWriter",
            "DataInputStream"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q10. Which of the following must be closed explicitly to release file resources?",
        options: [
            "Scanner",
            "BufferedReader",
            "FileReader",
            "All of these"
        ],
        correctAnswer: 3, // D
        marks: 2
    },
    
    // Week 4–5: Encapsulation & Inheritance (2 marks each - OOP concepts)
    {
        question: "Q11. What will be the output?\nclass A { int x = 10; }\nclass B extends A {\n   int x = 20;\n   void show() { System.out.println(super.x); }\n   public static void main(String[] args) { new B().show(); }\n}",
        options: [
            "10",
            "20",
            "0",
            "Compilation error"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q12. What is true about inheritance in Java?",
        options: [
            "Multiple inheritance using classes is allowed",
            "A subclass cannot override a superclass method",
            "A subclass inherits all non-private members",
            "The super keyword is used to call subclass methods"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q13. Constructor overloading means:",
        options: [
            "Having multiple constructors with the same name but different parameters",
            "Redefining superclass constructor in subclass",
            "Using constructors with super()",
            "Having private constructors"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    
    // Week 6: Exception Handling
    {
        question: "Q14. Which of these statements are true?",
        options: [
            "All exceptions inherit from Throwable & Error and Exception are subclasses",
            "RuntimeException is checked",
            "IOException is unchecked",
            "All of the above"
        ],
        correctAnswer: 0, // A (A,B both inherit from Throwable)
        marks: 2
    },
    {
        question: "Q15. Output of:\ntry {\n   int x = 5 / 0;\n} catch (ArithmeticException e) {\n   System.out.print(\"Error \");\n} finally {\n   System.out.print(\"Done\");\n}",
        options: [
            "Error",
            "Done",
            "Error Done",
            "Compilation error"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q16. Which block executes regardless of exception occurrence?",
        options: [
            "try",
            "catch",
            "finally",
            "throw"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    
    // Week 7: Multithreading
    {
        question: "Q17. Which methods are part of thread life cycle?",
        options: [
            "start()",
            "run() and sleep()",
            "yield()",
            "All of the above"
        ],
        correctAnswer: 3, // D (All are valid)
        marks: 2
    },
    {
        question: "Q18. What is the output?\nThread t = new Thread();\nt.start();\nt.start();",
        options: [
            "Runs twice",
            "Compilation error",
            "Throws IllegalThreadStateException",
            "No output"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q19. Which keyword is used to prevent concurrent access by multiple threads?",
        options: [
            "final",
            "synchronized",
            "volatile",
            "static"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    
    // Week 8: Applets & Servlets
    {
        question: "Q20. Which method is not part of the Applet life cycle?",
        options: [
            "init()",
            "start()",
            "run()",
            "paint()"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q21. A servlet runs on:",
        options: [
            "Web browser",
            "Web server",
            "JVM only",
            "Application client"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q22. In Applet, which method is called when the applet is first loaded?",
        options: [
            "start()",
            "init()",
            "stop()",
            "destroy()"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    
    // Week 9: Swing & AWT
    {
        question: "Q23. Which of the following is a container class in AWT?",
        options: [
            "Button",
            "TextField",
            "Frame",
            "Label"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q24. Swing components start with:",
        options: [
            "J",
            "S",
            "A",
            "None"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q25. Which layout manager divides the container into five regions?",
        options: [
            "FlowLayout",
            "BorderLayout",
            "GridLayout",
            "CardLayout"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q26. Output of:\nJButton b = new JButton(\"Click\");\nb.setText(\"Press\");\nSystem.out.println(b.getText());",
        options: [
            "Click",
            "Press",
            "Null",
            "Compilation error"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    
    // Week 10: Networking
    {
        question: "Q27. Which class is used for TCP client connection?",
        options: [
            "Socket",
            "ServerSocket",
            "DatagramSocket",
            "URL"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q28. Which package contains networking classes?",
        options: [
            "java.io",
            "java.net",
            "java.lang",
            "java.util"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q29. What does InetAddress.getLocalHost() return?",
        options: [
            "IP address of local machine",
            "IP address of remote host",
            "Name of DNS",
            "None"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    
    // Week 11: JDBC / ODBC
    {
        question: "Q30. The correct package for JDBC is:",
        options: [
            "java.sql",
            "javax.sql",
            "java.db",
            "java.jdbc"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q31. Correct order of JDBC steps:\n1. Register driver\n2. Create Statement\n3. Establish Connection\n4. Execute Query\n5. Close Connection\nCorrect order: ?",
        options: [
            "1-2-3-4-5",
            "1-3-2-4-5",
            "1-3-4-2-5",
            "3-1-2-4-5"
        ],
        correctAnswer: 1, // B (1-3-2-4-5)
        marks: 2
    },
    {
        question: "Q32. Which method is used to execute SELECT query?",
        options: [
            "executeQuery()",
            "executeUpdate()",
            "execute()",
            "executeSelect()"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q33. What is returned by executeQuery()?",
        options: [
            "Boolean",
            "int",
            "ResultSet",
            "void"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    
    // Week 12: Interfaces & Packages
    {
        question: "Q34. Which keyword is used to implement an interface?",
        options: [
            "extends",
            "implements",
            "import",
            "interface"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q35. Which statement is true?",
        options: [
            "Interface can have constructors",
            "Interface methods are abstract and public by default",
            "Interface can extend a class",
            "Interface methods are private"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q36. Output:\ninterface A { int x = 10; }\nclass Test implements A {\n   public static void main(String[] args) {\n      System.out.println(x);\n   }\n}",
        options: [
            "0",
            "10",
            "Compilation error",
            "Runtime error"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q37. Packages are used to:",
        options: [
            "Group related classes",
            "Hide data",
            "Perform I/O operations",
            "Create threads"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    
    // Integrated (Mixed Logic / Output)
    {
        question: "Q38. Output:\nclass A { A() { System.out.print(\"A \"); } }\nclass B extends A { B() { System.out.print(\"B \"); } }\nclass C extends B {\n   C() { System.out.print(\"C \"); }\n   public static void main(String[] args) { new C(); }\n}",
        options: [
            "A B C",
            "C B A",
            "ABC",
            "CBA"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q39. Output:\ntry {\n   int[] arr = new int[3];\n   arr[5] = 10;\n} catch (ArrayIndexOutOfBoundsException e) {\n   System.out.println(\"Array\");\n} catch (Exception e) {\n   System.out.println(\"Exception\");\n}",
        options: [
            "Exception",
            "Array",
            "Compilation error",
            "No output"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q40. Output:\nclass Parent { void show() { System.out.println(\"Parent\"); } }\nclass Child extends Parent {\n   void show() { System.out.println(\"Child\"); }\n   public static void main(String[] args) {\n      Parent p = new Child();\n      p.show();\n   }\n}",
        options: [
            "Parent",
            "Child",
            "Compilation error",
            "Runtime error"
        ],
        correctAnswer: 1, // B (Child - runtime polymorphism)
        marks: 2
    },
    {
        question: "Q41. In multithreading, which method causes a thread to move to waiting state?",
        options: [
            "wait()",
            "sleep()",
            "yield()",
            "suspend()"
        ],
        correctAnswer: 0, // A
        marks: 2
    },
    {
        question: "Q42. Which Java feature allows same method name but different parameters?",
        options: [
            "Overriding",
            "Overloading",
            "Encapsulation",
            "Abstraction"
        ],
        correctAnswer: 1, // B
        marks: 2
    },
    {
        question: "Q43. Which of the following are access modifiers in Java?",
        options: [
            "private and protected",
            "static",
            "public",
            "private, protected, and public"
        ],
        correctAnswer: 3, // D (A,B,D are access modifiers)
        marks: 2
    },
    {
        question: "Q44. Which keyword is used to prevent inheritance?",
        options: [
            "static",
            "super",
            "final",
            "const"
        ],
        correctAnswer: 2, // C
        marks: 2
    },
    {
        question: "Q45. What is printed?\nString s1 = \"Java\";\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);",
        options: [
            "true",
            "false",
            "Compilation error",
            "Null"
        ],
        correctAnswer: 1, // B
        marks: 2
    }
];

