// Sdata6.js - Class 6 Unit 1 & 2 - Ultra Detailed
const Sdata6Menu = [
  {
    "id": "c6-u1",
    "title": "1. Computer Languages",
    "topics": ["Introduction & Machine Language", "ML Features & Assembly Language", "HLL, 4GL & Future", "Fifth Generation Language"]
  },
  {
    "id": "c6-u2",
    "title": "2. Further on Windows 10",
    "topics": ["Introduction & Continuum", "Search & Cortana", "Task View & Virtual Desktops", "Creating & Managing Desktops", "Utilities & Disk Cleanup", "Character Map & Control Panel", "Fonts & Mouse Settings"]
  }
];

const Unit1ContentC6 = {
    "Introduction & Machine Language": `
        <div class="S-book-page">
            <div class="S-page-header">
                <span style="background:var(--S-accent); color:white; padding:2px 10px; border-radius:5px; font-size:14px;">Unit 1</span>
                <h1 style="color:var(--S-accent); font-size:32px; margin-top:10px;">Computer Languages</h1>
            </div>

            <div class="S-learning-box" style="background:#e8f5e9; padding:15px; border-radius:10px; border-left:5px solid #2e7d32; margin:20px 0;">
                <h4 style="margin:0 0 10px 0; color:#2e7d32;">WHAT WILL YOU LEARN TODAY</h4>
                <ul style="display:grid; grid-template-columns: 1fr 1fr; font-size:15px; margin:0; padding-left:20px;">
                    <li>Machine Level Language</li>
                    <li>Assembly Language</li>
                    <li>High Level Language</li>
                    <li>Fourth Generation Languages</li>
                    <li>Future of 4GL</li>
                </ul>
            </div>

            <div class="S-content-text">
                <h3>INTRODUCTION TO LANGUAGES</h3>
                <ul>
                    <li>Language is a medium to communicate and express our feelings and emotions to another person.</li>
                    <li>To communicate easily, it is important that both the persons must use the same language.</li>
                    <li>Similarly, we use <b>computer languages</b> to give instructions to the computer so that the computer responds as we desire and gives meaningful output.</li>
                </ul>

                <div style="background:#fff9e6; padding:20px; border-radius:15px; margin:20px 0; border:2px dashed #f1c40f; color:#333;">
                    <div style="display:flex; align-items:center; gap:20px;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" style="width:100px; height:130px; border-radius:10px; border:3px solid #fff; box-shadow:0 4px 10px rgba(0,0,0,0.2); object-fit:cover;">
                        <div>
                            <strong style="font-size:18px; color:#d35400;">Know A Fact</strong><br>
                            <p style="margin:5px 0 0 0; line-height:1.4;">The world's first computer programmer was <b>Lady Ada Lovelace</b>. In 1842, she wrote the world's first Computer Program for Charles Babbage's Analytical Engine.</p>
                        </div>
                    </div>
                </div>

                <h3>WHAT IS A PROGRAM?</h3>
                <ul>
                    <li>A computer needs detailed instructions to perform any task.</li>
                    <li>These set of instructions, collectively, are known as a <b>program</b>.</li>
                    <li><b>Programmer:</b> A person who writes a program.</li>
                    <li><b>Programming:</b> The process of creating a program.</li>
                    <li><b>Examples:</b> Operating systems (Windows/Android), Tux Paint, Scratch, Video Games, Web Browsers.</li>
                </ul>

                <h3>MACHINE LANGUAGE (1GL)</h3>
                <ul>
                    <li>It is the only language which is directly understood by the computer system.</li>
                    <li>Execution is easy and fast because no translator is needed.</li>
                    <li>Uses only two symbols: <b>0</b> and <b>1</b>.</li>
                    <li><b>0</b> means <b>OFF</b> state and <b>1</b> means <b>ON</b> state.</li>
                </ul>
                <div style="background:#1a1a1a; color:#00ff00; padding:20px; font-family:monospace; border-radius:10px; text-align:center; font-size:18px; letter-spacing:3px; box-shadow:inset 0 0 15px #000;">
                    0000 1001 1100 0110 1010 1111 0101 1000<br>
                    1010 1111 0101 1000 0000 1001 1100 0110
                </div>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--S-border);">
                <button class="S-nav-btn" disabled style="opacity:0.5;">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'ML Features & Assembly Language')">Next</button>
            </div>
        </div>
    `,

    "ML Features & Assembly Language": `
        <div class="S-book-page">
            <h3 style="color:var(--S-accent);">FEATURES OF MACHINE LANGUAGE (ML)</h3>
            <ul>
                <li>It is a <b>machine dependent</b> language. Each machine has its own set of instructions.</li>
                <li>Programs written in ML run very fast because instructions are given directly to the CPU.</li>
                <li>Extremely difficult for humans to remember binary codes written in 0's and 1's.</li>
                <li>Understanding and learning the ML is a tough and time-consuming process.</li>
                <li>Developing applications is difficult because the instruction set is very limited.</li>
                <li>Also known as <b>Low-Level Language (LLL)</b>.</li>
            </ul>

            <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:15px;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:12px; border:1px solid #ddd;">ADVANTAGES</th>
                    <th style="padding:12px; border:1px solid #ddd;">DISADVANTAGES</th>
                </tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Efficient for computer system.</td><td style="padding:10px; border:1px solid #ddd;">Machine dependent language.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Programs run very fast.</td><td style="padding:10px; border:1px solid #ddd;">Binary codes are difficult to learn/write.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">No additional translation effort.</td><td style="padding:10px; border:1px solid #ddd;">Debugging (finding errors) is difficult.</td></tr>
            </table>

            <hr style="margin:30px 0; border-top:2px dashed #ddd;">

            <h3 style="color:var(--S-accent);">ASSEMBLY LANGUAGE (SECOND GENERATION - 2GL)</h3>
            <ul>
                <li>Does not use binary digits but uses <b>abbreviation form</b> called <b>Mnemonic codes</b>.</li>
                <li>Examples: <b>ADD</b> for addition, <b>SUB</b> for subtraction, <b>LDA</b> for load.</li>
                <li>Not directly understood by the computer system.</li>
                <li>Requires a translator called <b>Assembler</b> to convert to machine language.</li>
            </ul>

            <h4 style="margin-bottom:10px;">FEATURES OF ASSEMBLY LANGUAGE:</h4>
            <ul>
                <li>Easy to write a program compared to Machine Language.</li>
                <li>Machine dependent: Each computer system has its own mnemonics.</li>
                <li>Program written for one computer may not work on another.</li>
                <li>Also classified as a <b>Low-Level Language (LLL)</b>.</li>
            </ul>

            <div style="background:#f4f7f6; padding:15px; border-radius:10px; border:1px solid #cbd5e0; margin:20px 0;">
                <div style="display:flex; justify-content:space-around; align-items:center; text-align:center;">
                    <div style="padding:10px; border:2px solid #333;"><b>Source Code</b><br>(Assembly)</div>
                    <div style="font-size:30px;">➔</div>
                    <div style="background:var(--S-accent); color:white; padding:10px 20px; border-radius:8px;"><b>Assembler</b></div>
                    <div style="font-size:30px;">➔</div>
                    <div style="padding:10px; border:2px solid #333;"><b>Object Code</b><br>(Machine)</div>
                </div>
            </div>

            <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:15px;">
                <tr style="background:#2980b9; color:white;">
                    <th style="padding:12px; border:1px solid #ddd;">ADVANTAGES</th>
                    <th style="padding:12px; border:1px solid #ddd;">DISADVANTAGES</th>
                </tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Lesser number of instructions.</td><td style="padding:10px; border:1px solid #ddd;">Slower than Machine Language.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Easier to write for programmers.</td><td style="padding:10px; border:1px solid #ddd;">May not run on different computers.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Easier to find/debug errors.</td><td style="padding:10px; border:1px solid #ddd;">Difficult to remember the syntax.</td></tr>
            </table>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--S-border);">
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'Introduction & Machine Language')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'HLL, 4GL & Future')">Next</button>
            </div>
        </div>
    `,

    "HLL, 4GL & Future": `
        <div class="S-book-page">
            <h3 style="color:var(--S-accent);">HIGH LEVEL LANGUAGE (THIRD GENERATION - 3GL)</h3>
            <p>As you have seen, machine and assembly languages had some disadvantages which urged people to develop languages that were easy to use and <b>not machine dependent</b>. These languages used simple English words, numbers, and symbols.</p>

            <h4 style="margin-bottom:5px;">FEATURES OF HIGH-LEVEL LANGUAGE (HLL):</h4>
            <ul>
                <li>HLL uses English words, symbols and mathematical operators as codes.</li>
                <li>The codes written in HLL are <b>machine independent</b>.</li>
                <li>This language is very easy as compared to the assembly and machine languages.</li>
                <li>Because of easy language and programming, HLL has invited more people to develop software.</li>
                <li>Using HLL, complex programs and software can be developed.</li>
            </ul>

            <div style="background:#fff9e6; padding:15px; border-radius:10px; border:1px dashed #f1c40f; margin:15px 0;">
                <strong>Know A Fact:</strong> Many machines did simple math, but <b>Charles Babbage's Analytical Machine</b> was the first computer we consider "programmable".
            </div>

            <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:15px; text-align:left;">
                <tr style="background:#8e44ad; color:white;">
                    <th style="padding:12px; border:1px solid #ddd;">ADVANTAGES</th>
                    <th style="padding:12px; border:1px solid #ddd;">DISADVANTAGES</th>
                </tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">It is easier to understand and debug.</td><td style="padding:10px; border:1px solid #ddd;">It needs more powerful computers to run.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">It is machine independent.</td><td style="padding:10px; border:1px solid #ddd;">It also needs additional translation time.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">It is prone to large amount of errors (More productivity).</td><td style="padding:10px; border:1px solid #ddd;">It is slower than low-level languages.</td></tr>
            </table>

            <h3 style="color:var(--S-accent);">TRANSLATOR PROGRAMS (Language Processors)</h3>
            <p>These programs were required because HLL and AL are not directly understood by the computer. There are two main types:</p>

            <div style="background:var(--S-bg); padding:15px; border-radius:10px; border:1px solid var(--S-border); margin:15px 0;">
                <p><b>1. Interpreter:</b> Executes a program by converting one instruction (written in AL or HLL) to machine code <b>one by one</b>. If an error occurs, the execution stops and must be corrected. That is why interpreters are slow. (BASIC, Pascal, COBOL).</p>
                <p><b>2. Compiler:</b> Converts the <b>whole program</b> (written in AL or HLL) into machine codes (object code) in <b>one go</b>. It lists all possible errors together. That is why compilers are fast. (C, C++, Java).</p>
            </div>

            <h3 style="color:var(--S-accent);">FOURTH GENERATION LANGUAGES (4GL)</h3>
            <ul>
                <li>Much closer to human language than 3GL.</li>
                <li>Uses icons, graphical interfaces (GUI), and symbolic representations.</li>
                <li><b>What to do:</b> The user just tells the system what needs to be done.</li>
                <li>Instructions required for the software are part of the software itself.</li>
                <li>Designed to reduce time, effort, and cost of software development.</li>
                <li>Contains the ability to add 3GL codes for further development.</li>
                <li><b>Examples:</b> SQL (Database), WAVE, Metafont, <b>PROLOG</b> (AI Language).</li>
            </ul>

            <div style="background:#eef2ff; padding:15px; border-radius:10px; border-left:5px solid #4f46e5; margin:15px 0;">
                <strong>Quick Knowledge:</strong> 4GL are commonly used in database programming. Examples include Perl, PHP, Python, Ruby, and SQL.
            </div>

            <h3 style="color:var(--S-accent);">FEATURES OF FOURTH GENERATION LANGUAGE</h3>
            <ul>
                <li><b>User-Friendly:</b> Highly intuitive and can run on all operating systems.</li>
                <li><b>Speed:</b> It has very high speed of execution.</li>
                <li><b>Effort:</b> Programming effort, cost, and time reduced drastically.</li>
                <li><b>Logic:</b> Only required output is specified by the user; computer determines the steps.</li>
            </ul>

            <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:15px;">
                <tr style="background:#27ae60; color:white;">
                    <th style="padding:12px; border:1px solid #ddd;">ADVANTAGES</th>
                    <th style="padding:12px; border:1px solid #ddd;">DISADVANTAGES</th>
                </tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Programmer Friendly.</td><td style="padding:10px; border:1px solid #ddd;">Needs more space to be stored.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Faster development & maintenance.</td><td style="padding:10px; border:1px solid #ddd;">Executed at slower speed by CPU.</td></tr>
                <tr><td style="padding:10px; border:1px solid #ddd;">Contains features of 3GL.</td><td style="padding:10px; border:1px solid #ddd;">Suitable only for business-oriented programs.</td></tr>
            </table>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--S-border);">
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'ML Features & Assembly Language')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'Fifth Generation Language')">Next</button>
            </div>
        </div>
    `,

    "Fifth Generation Language": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">Fifth Generation Language (5GL)</h3>
            <p>A Fifth Generation Language (5GL) is a special type of computer language that is used to make smart programs like robots and talking assistants.</p>
            
            <ul style="padding-left: 20px;">
                <li>In earlier computer languages, we had to give the computer step-by-step instructions to do a task.</li>
                <li>In a fifth generation language, we just tell the computer what we want, and it figures out how to do it by itself.</li>
                <li>These languages are used in Artificial Intelligence, where computers try to think and learn like humans.</li>
                <li>For example, if you tell the computer to find the best way to school, it will think and choose the fastest route without needing step-by-step directions.</li>
                <li>Fifth generation languages help build smart apps like Siri, Alexa, and other AI tools that can answer questions and solve problems on their own.</li>
            </ul>

            <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #e67e22; margin:20px 0;">
                <h4 style="margin:0 0 10px 0; color:#d35400;">Quick knowledge</h4>
                <p style="margin:0;">A Fifth Generation Language (5GL) is used to create smart programs that can think and solve problems on their own. It is mainly used in Artificial Intelligence, where the computer decides <b>how</b> to do a task by itself</p>
            </div>

            <h3 style="color:#d35400; margin-top: 25px;">Features of Fifth Generation Language (5GL)</h3>
            <ul style="padding-left: 20px;">
                <li><b>Problem-solving based –</b> Focuses on what needs to be solved, not how.</li>
                <li><b>Used in Artificial Intelligence –</b> Helps computers think and learn.</li>
                <li><b>Declarative language –</b> You tell what you want, not the steps.</li>
                <li><b>Supports AI tools like expert systems and robots.</b></li>
                <li><b>Works with logic and constraints –</b> Uses rules to find answers.</li>
                <li><b>Less coding needed –</b> Easier for users, as the computer figures out the method.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'HLL, 4GL & Future')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Introduction & Continuum')">Next Chapter</button>
            </div>
        </div>
    `,

    "Introduction & Continuum": `
        <div class="S-book-page">
            <div class="S-page-header">
                <span style="background:#0078d7; color:white; padding:2px 10px; border-radius:5px; font-size:14px;">Unit 2</span>
                <h1 style="color:#0078d7; font-size:32px; margin-top:10px;">Further On Windows 10</h1>
            </div>

            <div class="S-learning-box" style="background:#e3f2fd; padding:15px; border-radius:10px; border-left:5px solid #1e88e5; margin:20px 0;">
                <h4 style="margin:0 0 10px 0; color:#1e88e5;">WHAT WILL YOU LEARN TODAY</h4>
                <ul style="display:grid; grid-template-columns: 1fr 1fr; font-size:14px; list-style-type: disc; padding-left: 20px;">
                    <li>Features of Windows 10</li>
                    <li>Utilities</li>
                    <li>Creating a New Desktop</li>
                    <li>The Control Panel</li>
                </ul>
            </div>

            <div class="S-content-text">
                <p>Windows 10 was released on 29th July 2015 by Microsoft Operation system. It is a combination of the best features of its older versions like Windows 7 and Windows 8. It is faster, more secure, and will continue to be supported by Microsoft for several years to come.</p>
                
                <div style="background:#fff9e6; padding:15px; border-radius:10px; border:2px dashed #f1c40f; margin:20px 0;">
                    <strong style="color:#d35400;">Know A Fact</strong><br>
                    Bill Gates and Paul Allen started Microsoft (originally called Micro-Soft) for microprocessors and software to produce software for the Altair 8800, an early personal computer.
                </div>

                <h3>FEATURES OF WINDOWS 10</h3>
                <p>To keep us organised all the time, the operating system platform is offering a host of new and advanced features like Start Menu, Live Tiles, Snap Assist, Task View and Virtual Desktops.</p>
                <ul>
                    <li><b>Personalization:</b> We can use Windows 10 as a personal digital assistant. It has the feature which can synchronise our devices and phone for greater gaming experience and other features.</li>
                    <li><b>Windows 10 Continuum:</b> This is a feature that adjusts graphical user interface of a device to accommodate different form factors.
                        <ul>
                            <li>For example, if a user is working with a 2-in-1 device, Windows 10 will default to desktop mode with the keyboard attached and will then switch to tablet mode when you remove the keyboard.</li>
                            <li>Tablet mode is automatically selected if there is no keyboard. It opens the Start menu in full screen and maximises all the apps.</li>
                        </ul>
                    </li>
                </ul>
                <h3 style="color:#0078d7; margin-top:25px;">To use the Tablet Mode:</h3>
                <ul>
                    <li>Click on <b>Notification icon</b> present in the <b>Notification area</b> of the <b>Taskbar</b>. This will open the <b>Action Center</b> on the right side of the desktop.</li>
                    <li>Click on the <b>Tablet Mode</b> placed at the bottom of the <b>Action Center Pane</b>.</li>
                </ul>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'Fifth Generation Language')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Search & Cortana')">Next</button>
            </div>
        </div>
    `,

    "Search & Cortana": `
        <div class="S-book-page">
            <h3>THE NEW SEARCH BAR</h3>
            <ul style="padding-left: 20px;">
                <li>The new Search Bar on the Taskbar allows the user to search the web and the Windows, which makes it very easy for the user to find any file, folder, etc.</li>
                <li>To access this feature, click on the search bar where <b>"Type here to search"</b> is displayed.</li>
                <li>Now, enter the name of the application, file, folder, etc. and click on the desired search result.</li>
            </ul>

            <h3 style="margin-top:25px;">TALK TO CORTANA</h3>
            <ul style="padding-left: 20px;">
                <li>Cortana is a Microsoft's voice-controlled digital assistant for your desktop computers.</li>
                <li>It makes it easier for the user to interact with the device without even lifting a finger.</li>
                <li>It enables the user to search their hard drive for specific files, pull up photos from specific dates, or launch application just by telling their PC to do so.</li>
                <li>Cortana can also be used to send an email while the user is working on another application, making multi-tasking much easier.</li>
            </ul>

            <div style="background:#eef2ff; padding:15px; border-radius:10px; border-left:5px solid #4f46e5; margin:20px 0;">
                <strong style="color:#3730a3;">Know More:</strong><br>
                Cortana's heart and soul are visually represented by the circular orb graphic. It spins and rotates and changes shades to let you know if she's working or thinking or speaking.
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Introduction & Continuum')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Task View & Virtual Desktops')">Next</button>
            </div>
        </div>
    `,

    "Task View & Virtual Desktops": `
        <div class="S-book-page">
            <h3>TASK VIEW</h3>
            <p>In Windows 10, Task View is a task switcher and virtual desktop system. It allows a user to:</p>
            <ul style="padding-left: 20px;">
                <li>Quickly locate an open window.</li>
                <li>Quickly show the desktop and hide all windows.</li>
                <li>Manage windows across multiple monitors or virtual desktops.</li>
                <li>To view all together, click on the <b>Task View</b> button on the Taskbar.</li>
            </ul>

            <div style="background:#f0fdf4; padding:10px; border-radius:5px; border:1px solid #bbf7d0; margin:15px 0;">
                <strong>Shortcut key:</strong> You can activate Task View by pressing <b>Win + Tab</b> on your keyboard.
            </div>

            <h3>VIRTUAL DESKTOPS</h3>
            <ul style="padding-left: 20px;">
                <li>When all the desktops are on the Task View, the user can drag and drop an application from one desktop to another for easy management and use.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Search & Cortana')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Edge & Windows Hello')">Next</button>
            </div>
        </div>
    `,

    "Edge & Windows Hello": `
        <div class="S-book-page">
            <h3>MICROSOFT EDGE WEB BROWSER</h3>
            <p>Microsoft Edge is the default web browser on Windows 10. It replaced Internet Explorer. It was released in 2015.</p>
            <ul style="padding-left: 20px;">
                <li>Edge integrates with the <b>Cortana</b> Digital Assistant to provide voice-controlled search and personalize information, to users.</li>
                <li>We can also use Edge to mark web pages, and these remarks are stored on <b>OneDrive</b> and they can be accessed by other users.</li>
                <li>The <b>Reading List</b> function of Edge, synchronises the content between devices.</li>
                <li>The <b>Reading Mode</b>, formats the display to allow the user for easy reading on devices.</li>
            </ul>

            <div style="background:#eef2ff; padding:10px; border-radius:5px; border-left:5px solid #4f46e5; margin:15px 0;">
                <strong style="color:#3730a3;">Quick knowledge:</strong><br>
                Microsoft Edge uses Bing its default search engine.
            </div>

            <h3>WINDOWS HELLO</h3>
            <p>Microsoft developed a new built-in biometric security system for Windows 10 known as Windows Hello.</p>
            <ul style="padding-left: 20px;">
                <li>Besides using passwords or pin code to login into a computer system, the user can use biometric logins, like face, fingerprint, or iris recognition.</li>
                <li>To use this feature, it is very important that the computer system is equipped with the appropriate hardware devices.</li>
                <li>The biometric logins provided by the Hello are very secure and once created the user can login easily.</li>
                <li>These logins are faster than entering passwords or pin codes and also secure.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Task View & Virtual Desktops')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Action Center & Universal Apps')">Next</button>
            </div>
        </div>
    `,

    "Action Center & Universal Apps": `
        <div class="S-book-page">
            <h3>ACTION CENTER</h3>
            <p>The new notification center of Windows 10, displays alerts and notifications of the device and of the installed applications (apps) in a slide-out pane, which slides out on the right side of the desktop.</p>
            <ul style="padding-left: 20px;">
                <li>In the slide pane, the upper part displays the notifications, security tops, alarms, reminders, app notifications, reminders, etc.</li>
                <li>The lower part has a set of <b>Quick actions</b> buttons.</li>
            </ul>

            <div style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #e67e22; margin:20px 0;">
                <strong style="color:#d35400;">Quiz Time:</strong><br>
                Can we use Cortana to find meaning of any word?
            </div>

            <h3>UNIVERSAL APPS</h3>
            <p>Microsoft is introducing a new category of software called Universal Apps, which use the same code but adapt their interface to the device in your hand.</p>
            <ul style="padding-left: 20px;">
                <li>Microsoft is bundling its own set including Weather, Calendar, Alarms & Clock, Camera, Messaging, Movies & TV, Music, Mail, Maps, Photos, etc.</li>
                <li>They all function the same way on tablets, phones and PCs.</li>
                <li>The content is stored and synced via Microsoft's cloud service <b>OneDrive</b> so you can pick up where you left off on another device whenever you want.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Edge & Windows Hello')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
               <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Creating & Managing Desktops')">Next</button>
            </div>
        </div>
    `,
    "Creating & Managing Desktops": `
        <div class="S-book-page">
            <h3 style="color:#0078d7;">CREATING A NEW DESKTOP</h3>
            <p>Windows 10 allows you to create multiple desktops for organising different set of applications. Follow the steps given below to create a new desktop:</p>
            <ul>
                <li>On the <b>Taskbar</b>, click on the <b>Task View</b> button. This will open task view pane, displaying the preview of all the open windows.</li>
                <li>Click on the <b>New desktop</b> button on the top left corner of the task view pane. <b>Desktop 2</b> thumbnail will appear.</li>
                <li>Click on the <b>Desktop 2</b> thumbnail and you will notice that it is the exact replica of Desktop 1 but Desktop 2 does not have the same windows opened as in Desktop 1.</li>
                <li>You can now open new apps to use on <b>Desktop 2</b>.</li>
                <li>Now, to switch back to <b>Desktop 1</b>, click on the task view button and click on desktop 1 to make a switch.</li>
            </ul>

            <div style="background:#fff9e6; padding:15px; border-radius:10px; border:1px dashed #f1c40f; margin:15px 0;">
                <strong style="color:#d35400;">Quick knowledge</strong><br>
                Create custom additional desktops to group apps for productivity, entertainment, or whatever you choose. This makes multitasking and organizing your opened apps much easier.
            </div>

            <div style="background:#e8f5e9; padding:10px; border-radius:5px; border-left:5px solid #2e7d32; margin:15px 0;">
                <strong style="color:#2e7d32;">Shortcut key</strong><br>
                • You can create a new desktop by using the <b>Windows key + Ctrl + D</b> shortcut.<br>
                • To delete a desktop you are currently in, press <b>Windows key + Ctrl + F4</b>.
            </div>

            <h3 style="color:#0078d7; margin-top:25px;">Movement of Apps between Desktops</h3>
            <p>You can move the apps from one desktop to another. To do so follow the steps given below:</p>
            <ul>
                <li>Click on the <b>Task view</b> button on the taskbar.</li>
                <li>Place the mouse pointer over the desktop thumbnail. This will display all the apps running on it.</li>
                <li>Move your mouse pointer to the application which you want to move. Right-click and click on <b>Move to</b> option.</li>
                <li>Further, it will display you the options of desktops that you have created. Click on the desired desktop.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Task View & Virtual Desktops')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Utilities & Disk Cleanup')">Next</button>
            </div>
        </div>
    `,

    "Utilities & Disk Cleanup": `
        <div class="S-book-page">
            <h3 style="color:#0078d7;">CLOSING A DESKTOP</h3>
            <p>To close a desktop, follow the steps given below:</p>
            <ul>
                <li>Click on <b>Task view</b> button on the taskbar.</li>
                <li>Place the mouse pointer on the desktop thumbnail you want to close.</li>
                <li>Click on the <b>Close (X)</b> button on the top-right corner of the desktop thumbnail and desktop will be closed.</li>
                <li>As soon as you will close the desktop, the applications opened on that desktop will now appear on the current desktop.</li>
            </ul>

            <h3 style="color:#0078d7; margin-top:25px;">UTILITIES</h3>
            <p>Windows 10 includes really useful tools and utilities programs that help you control your system for better day-to-day application. Some of the utilities are character map, Disk clean-up, Math input Panel, Notepad, Paint, steps Recorder, windows Media Player, WordPad, etc.</p>

            <h3 style="color:#0078d7; margin-top:25px;">DISK CLEANUP</h3>
            <p>When the computer is in use, there are some unwanted and useless files, which are collected in the computer and also, occupies space on the hard disk. This makes the computer system work slow. To clean all these files and make the computer work fast, Disk Cleanup feature of Windows 10 is used.</p>
            
            <p><b>Steps for Disk Cleanup:</b></p>
            <ul>
                <li>Write <b>disk cleanup</b> in the Search bar and click on Disk Cleanup app.</li>
                <li>Select the drive like <b>(C:)</b> and click OK button.</li>
                <li>The disk cleanup will calculate and display junk (unwanted, no longer required) files.</li>
                <li>Check the boxes which are at the beginning of each <b>Files to delete</b>.</li>
                <li>Once the selection is done, click on <b>OK</b> button. A confirmation dialog box will appear. Click on <b>Delete Files</b> button.</li>
            </ul>

            <div style="background:#eef2ff; padding:15px; border-radius:10px; border-left:5px solid #4f46e5; margin:15px 0;">
                <strong style="color:#3730a3;">Know More</strong><br>
                Disk Clean-up targets the offline web pages cached by Microsoft to provide for quick offline access to the user.
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Creating & Managing Desktops')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Character Map & Control Panel')">Next</button>
            </div>
        </div>
    `,

    "Character Map & Control Panel": `
        <div class="S-book-page">
            <h3 style="color:#0078d7;">WINDOWS MEDIA PLAYER</h3>
            <p>A Media Player is a computer program used for playing multimedia files such as music, short videos and movies. In Windows 10, Windows Media Player runs and organises digital media files.</p>
            <ul>
                <li>It also helps the user to copy multimedia files to a CD/DVD or to other portable devices.</li>
                <li>To finalise the CD so that data can be exported, click on <b>Finish Burning</b> or select <b>Eject</b>.</li>
            </ul>

            <h3 style="color:#0078d7; margin-top:25px;">CHARACTER MAP</h3>
            <p>Character Map utility is used for seeing all available characters and Unicode in each of the fonts installed on the computer. It helps in manual typing of the Unicode number to insert a special character like a trademark (™) or degree (°) symbol.</p>
            
            <p><b>First Method to copy characters:</b></p>
            <ul>
                <li>Start <b>Character Map</b>.</li>
                <li>In the <b>Font</b> box, select the font you want to use, like <b>Arial</b>.</li>
                <li>Click the special character, click <b>Select</b>, and then click <b>Copy</b> button.</li>
                <li>In your document, position the cursor and click <b>Paste</b>.</li>
            </ul>

            <p><b>Second Method using Unicode:</b></p>
            <ul>
                <li>Press and hold down the <b>Alt</b> key while you type the four number Unicode value for the character.</li>
                <li>Note that <b>Num Lock</b> must be on, and you have to use the number pad keys.</li>
            </ul>

            <h3 style="color:#0078d7; margin-top:25px;">THE CONTROL PANEL</h3>
            <p>Control panel is a component of Windows 10 that provides you the ability to view and change the settings and appearance of the Windows.</p>
            <ul>
                <li><b>To open:</b> Click on the Start button > Windows system > Control panel. Or type <b>control panel</b> on the search bar.</li>
            </ul>

            <div style="background:#fff9e6; padding:15px; border-radius:10px; border:1px dashed #f1c40f; margin:15px 0;">
                <strong style="color:#d35400;">Know More</strong><br>
                Control Panel applets display by Category, which groups them together logically, or in the Large icons or Small icons view.
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Utilities & Disk Cleanup')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Fonts & Mouse Settings')">Next</button>
            </div>
        </div>
    `,

    "Fonts & Mouse Settings": `
        <div class="S-book-page">
            <h3 style="color:#0078d7;">CHANGING DATE AND TIME</h3>
            <ul>
                <li>Click on <b>Clock and Region</b> option from the Control Panel window.</li>
                <li>Click on the <b>Date and Time</b> option.</li>
                <li>Click on <b>Change date and time...</b> and select the desired date and change months by press the arrow buttons.</li>
                <li>Select the hour text to increase or decrease the hour, minutes and seconds.</li>
            </ul>

            <h3 style="color:#0078d7; margin-top:25px;">FONTS OPTION</h3>
            <p>Font settings are used to control the display of character or text on the screen as well as on the hardcopy.</p>
            <ul>
                <li><b>To view:</b> Open Control Panel > click on <b>View by: list</b> and select. Click on <b>Fonts</b>. Double-click on any font to view the sample text.</li>
                <li><b>To add:</b> Click and drag the font to the <b>Fonts</b> window, or right-click and <b>copy</b> then <b>paste</b> it to the fonts window.</li>
                <li><b>To delete:</b> Single-click on the font and click on the <b>delete</b> button above the font thumbnails.</li>
            </ul>

            <h3 style="color:#0078d7; margin-top:25px;">THE MOUSE SETTINGS</h3>
            <p>Windows 10 allows us customise our mouse setting like changing mouse pointer appearance, altering scroll speed, or changing functions of buttons.</p>
            <ul>
                <li>Click on the <b>Mouse</b> option on the control panel.</li>
                <li>Select the <b>Pointers</b> tab.</li>
                <li>Click on <b>Scheme</b> drop-down list to change the pointer image.</li>
                <li>Choose image from <b>Customize</b> or click <b>Browse</b> to select any file.</li>
                <li>Click on <b>Apply</b> and then click on <b>OK</b>.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('2. Further on Windows 10', 'Character Map & Control Panel')">Back</button>
                <span style="font-weight:bold;">Computer Se Sikhoo</span>
                <button class="S-nav-btn" onclick="alert('Congratulations! Chapter 2 is completed.')">Finish</button>
            </div>
        </div>
    `
};
