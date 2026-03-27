// Sdata8.js - Class 8 Menu and Content
const Sdata8Menu = [
  {
    "id": "c8-u1",
    "title": "1. Networking Concepts",
    "topics": ["Introduction to Networking", "Advantages of Networking", "Networking Components", "Types of Networks", "Network Architecture", "Network Topologies", "Network Security"]
  },
  {
    "id": "c8-u2",
    "title": "2. Log On To Access",
    "topics": ["Database Concepts", "What is Microsoft Access?", "Components of Microsoft Access", "Creating a Database", "Data Types in Access"]
  },
  {
    "id": "c8-u3",
    "title": "3. Working With Queries",
    "topics": ["What is a Query?", "Setting a Relationship", "Creating a Query", "Specifying Simple Criteria", "Forms and Reports"]
  },
  {
    "id": "c8-u4",
    "title": "4. Adobe Photoshop CC",
    "topics": ["Introduction to Photoshop", "Photoshop Workspace", "Working with Selection Tools", "Painting Tools", "Drawing and Type Tools"]
  },
  {
    "id": "c8-u5",
    "title": "5. More On Photoshop CC",
    "topics": ["Working with Layers", "Adding Text", "Layer Effects", "Retouching Tools", "Filters in Photoshop"]
  },
  {
    "id": "c8-u6",
    "title": "6. Iterative Looping in Python",
    "topics": ["Control Structures", "The 'for' Loop", "The 'while' Loop", "Infinite Loop", "Nested Loops"]
  },
  {
    "id": "c8-u7",
    "title": "7. Lists and Tables in HTML5",
    "topics": ["Unordered and Ordered Lists", "Creating Tables", "Attributes of Table Tag", "Nesting of Lists"]
  },
  {
    "id": "c8-u8",
    "title": "8. Links, Anchors and Images",
    "topics": ["Hyperlinking", "Internal Linking", "External Linking", "Inserting Images", "Audio and Video in HTML"]
  },
  {
    "id": "c8-u9",
    "title": "9. App Development",
    "topics": ["Types of Apps", "App Development Process", "Introduction to MIT App Inventor", "Testing an App"]
  },
  {
    "id": "c8-u10",
    "title": "10. Networks and Security",
    "topics": ["Network Protocols", "TCP/IP", "HTTP/HTTPS", "Cyber Threats and Protection"]
  }
];

const Unit1ContentC8 = {
    "Introduction to Networking": `
        <div class="S-card-header"><h2 style="color:var(--S-accent);">1.1 Introduction to Networking</h2></div>
        <div class="S-card-body">
            <p>A computer network is a group of computers and peripheral devices connected together to share data and hardware resources.</p>
            <div style="background:rgba(72, 52, 212, 0.1); padding:15px; border-radius:10px; margin:15px 0;">
                <strong>Example:</strong> If one computer in a network has a printer attached, all other computers can use it to print documents.
            </div>
            <h4>Components of a Network:</h4>
            <ul>
                <li><strong>Sender:</strong> The computer that sends data.</li>
                <li><strong>Receiver:</strong> The computer that receives data.</li>
                <li><strong>Medium:</strong> The cable or wireless signal used to connect them.</li>
            </ul>
        </div>
    `,
    "Types of Networks": `
        <div class="S-card-header"><h2 style="color:var(--S-accent);">1.4 Types of Networks</h2></div>
        <div class="S-card-body">
            <p>Networks are categorized based on the area they cover:</p>
            <table style="width:100%; border-collapse:collapse; margin-top:10px;">
                <tr style="background:var(--S-accent); color:white;">
                    <th style="padding:10px; border:1px solid #ddd;">Type</th>
                    <th style="padding:10px; border:1px solid #ddd;">Full Form</th>
                    <th style="padding:10px; border:1px solid #ddd;">Range</th>
                </tr>
                <tr><td>PAN</td><td>Personal Area Network</td><td>Small (within 10m)</td></tr>
                <tr><td>LAN</td><td>Local Area Network</td><td>Building/Office</td></tr>
                <tr><td>MAN</td><td>Metropolitan Area Network</td><td>City wide</td></tr>
                <tr><td>WAN</td><td>Wide Area Network</td><td>Country/World</td></tr>
            </table>
        </div>
    `
};
