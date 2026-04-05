// Sdata6.js - Class 6 Unit 1 (Computer Languages) - Ultra Detailed
const Sdata6Menu = [
  {
    "id": "c6-u1",
    "title": "1. Computer Languages",
    "topics": ["Introduction & Machine Language", "ML Features & Assembly Language", "HLL, 4GL & Future"]
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
                <span style="font-weight:bold;">Page 1</span>
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
                <span style="font-weight:bold;">Page 2</span>
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

            <h3 style="color:var(--S-accent);">FUTURE OF FOURTH GENERATION LANGUAGE</h3>
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
                <span style="font-weight:bold;">Page 3</span>
                <button class="S-nav-btn" onclick="alert('Congratulations! Unit 1 is completed.')">Finish</button>
            </div>
        </div>
    `
};
