let currentSClass = 7; // Default Class
let sFontSize = 22;

// 1. Theme Toggle
function toggleS678Theme() {
    const body = document.body;
    body.classList.toggle('S-dark-theme');
    const themeIcon = document.getElementById('S-theme-icon');
    if (body.classList.contains('S-dark-theme')) {
        themeIcon.setAttribute('name', 'sunny-outline');
    } else {
        themeIcon.setAttribute('name', 'moon-outline');
    }
}

// 2. Class Switcher (Teeno Classes ke liye)
function switchS678Class(cls, event) {
    currentSClass = cls;

    // UI update: Active button style
    document.querySelectorAll('.S-btn-toggle').forEach(b => b.classList.remove('S-active-class'));
    if(event) event.currentTarget.classList.add('S-active-class');

    const container = document.getElementById('S-unit-container');
    let activeMenu = null;

    // Data selection based on Class
    if(cls === 6) {
        activeMenu = (typeof Sdata6Menu !== 'undefined') ? Sdata6Menu : null;
    } else if(cls === 7) {
        activeMenu = (typeof Sdata7Menu !== 'undefined') ? Sdata7Menu : null;
    } else if(cls === 8) {
        activeMenu = (typeof Sdata8Menu !== 'undefined') ? Sdata8Menu : null;
    }

    if(activeMenu) {
        container.innerHTML = activeMenu.map(unit => `
            <div class="S-u-block">
                <div class="S-unit-item" onclick="toggleSTopics('${unit.id}')">${unit.title}</div>
                <ul id="${unit.id}" class="S-topic-list">
                    ${unit.topics.map(t => `
                        <li onclick="loadS678Content('${unit.title}', '${t}')">${t}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    } else {
        container.innerHTML = `<div style="padding:20px; color:red;">Sdata${cls}.js file load nahi hui hai!</div>`;
    }
}

// 3. Search Logic
function searchS678Topics() {
    const input = document.getElementById('S-search-input').value.toLowerCase();
    const blocks = document.querySelectorAll('.S-u-block');

    blocks.forEach(block => {
        const text = block.innerText.toLowerCase();
        if(text.includes(input)) {
            block.style.display = "block";
            if(input.length > 0) {
                const list = block.querySelector('.S-topic-list');
                if(list) list.classList.add('S-active');
            }
        } else {
            block.style.display = "none";
        }
    });
}

// 4. Content Loading (Smart Content Picker)
function loadS678Content(unit, topic) {
    document.getElementById('S-breadcrumb').innerText = `Class ${currentSClass} > ${unit} > ${topic}`;
    document.getElementById('S-content-heading').innerText = topic;
    const displayArea = document.getElementById('S-content-body');

    let contentData = null;

    // Class ke hisab se sahi variable se content uthayein
    if(currentSClass === 6 && typeof Unit1ContentC6 !== 'undefined') {
        contentData = Unit1ContentC6[topic];
    } else if(currentSClass === 7 && typeof Unit1Content !== 'undefined') {
        contentData = Unit1Content[topic];
    } else if(currentSClass === 8 && typeof Unit1ContentC8 !== 'undefined') {
        contentData = Unit1ContentC8[topic];
    }

    if(contentData) {
        displayArea.innerHTML = contentData;
    } else {
        displayArea.innerHTML = `
            <div style="padding:40px; text-align:center; color:var(--S-text-muted);">
                <h3>Coming Soon</h3>
                <p>Hum "<b>${topic}</b>" ka content taiyar kar rahe hain.</p>
            </div>`;
    }
    document.getElementById('S-content-display').scrollTop = 0;
}

// 5. Helpers (Font, FullScreen, Menu)
function toggleS678Menu() { 
    document.getElementById('S-left-menu').classList.toggle('S-collapsed'); 
}

function toggleSTopics(id) {
    const el = document.getElementById(id);
    if(!el) return;
    const wasActive = el.classList.contains('S-active');
    document.querySelectorAll('.S-topic-list').forEach(l => l.classList.remove('S-active'));
    if(!wasActive) el.classList.add('S-active');
}

function adjustS678Font(val) {
    sFontSize += (val * 2);
    document.getElementById('S-content-body').style.fontSize = sFontSize + "px";
}

function toggleS678FullScreen() {
    const doc = document.documentElement;
    if (!document.fullscreenElement) {
        if (doc.requestFullscreen) doc.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}
