// Sdata6.js - Class 6 Unit 1 (Computer Languages)
const Sdata6Menu = [
  {
    "id": "c6-u1",
    "title": "1. Computer Languages",
    "topics": ["Introduction & Machine Language", "Language Types"]
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
                <ul style="display:grid; grid-template-columns: 1fr 1fr; font-size:16px; margin:0; padding-left:20px;">
                    <li>Machine Level Language</li>
                    <li>Assembly Language</li>
                    <li>High Level Language</li>
                    <li>Fourth Generation Languages</li>
                </ul>
            </div>

            <div class="S-content-text">
                <p>A language is a medium to communicate and express our feelings and emotions to another person so that we all can understand each other. Similarly, we use <b>computer languages</b> to give instructions to the computer.</p>
                
                <div style="background:#fff9e6; padding:15px; border-radius:10px; margin:20px 0; border:1px dashed #f1c40f; color:#333;">
                    <strong>Know A Fact:</strong> 
                    <div style="display:flex; align-items:center; gap:15px; margin-top:10px;">
                        <p style="margin:0;">The world's first computer programmer was <b>Ada Lovelace</b>. In 1842, she wrote the world's first Computer Program.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" style="width:70px; height:70px; border-radius:50%; border:2px solid #f1c40f; object-fit:cover;">
                    </div>
                </div>

                <h3>MACHINE LANGUAGE (FIRST GENERATION LANGUAGE)</h3>
                <p>Machine Language is the only language which is directly understood by the computer. It uses just two symbols: <b>0</b> and <b>1</b>.</p>
                
                <div style="background:#222; color:#00ff00; padding:20px; font-family:monospace; border-radius:8px; text-align:center; font-size:20px; letter-spacing:2px; box-shadow:inset 0 0 10px #000;">
                    0000 1001 1100 0110 <br>
                    1010 1111 0101 1000
                </div>
                
                <p style="margin-top:10px;">Where <b>0</b> means <b>OFF</b> state and <b>1</b> means <b>ON</b> state.</p>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--S-border);">
                <button class="S-nav-btn" disabled style="opacity:0.5; cursor:not-allowed;">Back</button>
                <span style="font-weight:bold; color:var(--S-text-muted);">Page 1</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'Language Types')">Next</button>
            </div>
        </div>
    `,

    "Language Types": `
        <div class="S-book-page">
            <h2 style="color:var(--S-accent);">Machine Language (Continued)</h2>
            <p>Every computer has different internal design, because of that, machine language is different from one computer to other. Therefore, a program written in machine language for one computer may not run on another.</p>
            
            <div style="background:#f0f7ff; border-left:5px solid var(--S-accent); padding:15px; margin:20px 0; color:#333;">
                <p style="margin:0;"><b>Note:</b> Machine language is extremely fast in execution but very difficult for humans to write and debug.</p>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--S-border);">
                <button class="S-nav-btn" onclick="loadS678Content('1. Computer Languages', 'Introduction & Machine Language')">Back</button>
                <span style="font-weight:bold; color:var(--S-text-muted);">Page 2</span>
                <button class="S-nav-btn" onclick="alert('Please upload the next page screenshot to continue.')">Next Topic</button>
            </div>
        </div>
    `
};
