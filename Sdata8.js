// Sdata8.js - Class 8 Unit 1 (Pointwise Format - No Images)

const Sdata8Menu = [
  {
    "id": "c8-u1",
    "title": "1. Networking Concepts",
    "topics": ["Introduction to Networking", "Components of a Network", "Network Advantages", "Transmission Media"]
  }
];

const Unit1ContentC8 = {
    "Introduction to Networking": `
        <div class="S-book-page">
            <h1 style="color:#d35400;">Networking</h1>
            
            <div class="S-learning-box" style="background:#fff3e0; padding:15px; border-radius:10px; border-left:5px solid #e67e22; margin:20px 0;">
                <h4 style="margin:0 0 10px 0;">WHAT WILL YOU LEARN TODAY</h4>
                <ul style="display:grid; grid-template-columns: 1fr 1fr; font-size:14px; list-style-type: disc; padding-left: 20px;">
                    <li>What is Networking?</li>
                    <li>Components of a Network</li>
                    <li>Advantages of Networking</li>
                    <li>Network Architecture</li>
                    <li>Network Topologies</li>
                    <li>Network Security</li>
                </ul>
            </div>

            <div class="S-content-text">
                <h3>The Concept of Networking:</h3>
                <ul style="padding-left: 20px;">
                    <li>Imagine a group project to develop a Python program with different modules.</li>
                    <li><b>Manual Method:</b> You visit friends to collect code on storage devices and combine them on one computer.</li>
                    <li><b>Network Method:</b> Friends send their modules from home via a network, allowing you to combine and share the final version instantly.</li>
                    <li><b>Conclusion:</b> Connected computers offer massive advantages in data sharing and collaboration.</li>
                </ul>

                <h3>Networks in Daily Life:</h3>
                <ul style="columns: 2; -webkit-columns: 2; padding-left: 20px; list-style-type: square;">
                    <li>Roads, railways, and canals</li>
                    <li>Cable TV Networks</li>
                    <li>Broadcasting (Radio/TV)</li>
                    <li>Mobile & Telephone Networks</li>
                    <li>Banking & ATM Networks</li>
                    <li>Schools & Hospitals</li>
                    <li>Cinema halls & Malls</li>
                </ul>

                <div style="background:#fff9e6; padding:15px; border:1px dashed #f1c40f; border-radius:10px; margin-top: 15px;">
                    <strong style="color: #d35400;">Know A Fact:</strong>
                    <ul style="margin-top:5px; padding-left:20px;">
                        <li>The Internet (Net) is a global "network of networks".</li>
                        <li>It connects computer systems worldwide.</li>
                        <li>Connection requires an <b>Internet Service Provider (ISP)</b> acting as a middleman.</li>
                    </ul>
                </div>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" style="opacity:0.5;" disabled>Back</button>
                <span style="font-weight:bold; color:#888;">Page 1</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Components of a Network')">Next</button>
            </div>
        </div>
    `,

    "Components of a Network": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">COMPONENTS OF A NETWORK</h3>
            <ul style="padding-left: 20px;">
                <li><b>Definition:</b> A group of computers and devices connected to share resources (software, hardware, data).</li>
                <li><b>Connectivity:</b> Interconnection can be established through physical wires or wireless signals.</li>
            </ul>
            
            <div style="margin-top: 20px;">
                <h4 style="color:#2c3e50; margin-bottom: 5px;">1. Server</h4>
                <ul style="padding-left: 20px;">
                    <li>The most important and powerful computer on a network.</li>
                    <li>Possesses high speed and high processing capability.</li>
                    <li>Links devices and provides critical network services to users.</li>
                </ul>

                <h4 style="color:#2c3e50; margin-bottom: 5px;">2. Client (Node)</h4>
                <ul style="padding-left: 20px;">
                    <li>A computer or device connected to the network.</li>
                    <li>Used to access services and resources provided by the server.</li>
                </ul>

                <h4 style="color:#2c3e50; margin-bottom: 5px;">3. Network Interface Card (NIC)</h4>
                <ul style="padding-left: 20px;">
                    <li>A hardware component that connects a computer to a network.</li>
                    <li>Provides a unique physical <b>MAC (Media Access Control)</b> address to each computer.</li>
                    <li><b>Two Types:</b> 
                        <ul>
                            <li><b>Wired NIC:</b> Uses physical wires for connection.</li>
                            <li><b>Wireless NIC:</b> Uses radio frequency for connection.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style="background:#e8f4fd; padding:15px; border-radius:10px; border: 1px solid #3498db; margin-top: 20px;">
                <strong style="color: #2980b9;">Know A Fact: Bandwidth</strong>
                <ul style="margin-top:5px; padding-left:20px;">
                    <li>Describes the maximum data transfer rate of a connection.</li>
                    <li>Measures data sent over a specific connection in a given time.</li>
                    <li>Units: bps (bits per second), Kbps (Kilobits), or Mbps (Megabits).</li>
                </ul>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Introduction to Networking')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 2</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Network Advantages')">Next</button>
            </div>
        </div>
    `,

    "Network Advantages": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">WHY NETWORKING? - ITS ADVANTAGES</h3>
            <p>Key advantages of networking over standalone computers:</p>
            
            <div style="display: grid; gap: 15px; margin-top: 10px;">
                <div style="padding: 10px; border-bottom: 1px solid #eee;">
                    <b>1. Sharing of Hardware:</b>
                    <ul style="padding-left: 20px; margin-top:5px;">
                        <li>Allows sharing of expensive peripherals like large printers and storage devices.</li>
                        <li>Reduces overall operational and maintenance costs for an organization.</li>
                    </ul>
                </div>
                
                <div style="padding: 10px; border-bottom: 1px solid #eee;">
                    <b>2. Fast and Efficient Communication:</b>
                    <ul style="padding-left: 20px; margin-top:5px;">
                        <li>Offers a reliable communication channel among users.</li>
                        <li>Enables efficient use of messages, chat rooms, video calls, and conferencing.</li>
                    </ul>
                </div>
                
                <div style="padding: 10px; border-bottom: 1px solid #eee;">
                    <b>3. Reducing Redundancy:</b>
                    <ul style="padding-left: 20px; margin-top:5px;">
                        <li>Centralized storage reduces the duplication (redundancy) of data across computers.</li>
                        <li>Sharing soft copies reduces the need and cost for hard copies.</li>
                    </ul>
                </div>
                
                <div style="padding: 10px; border-bottom: 1px solid #eee;">
                    <b>4. Security:</b>
                    <ul style="padding-left: 20px; margin-top:5px;">
                        <li>Servers are secured against unauthorized access.</li>
                        <li>Protects relevant data and files, ensuring access only to authorized users.</li>
                    </ul>
                </div>
                
                <div style="padding: 10px;">
                    <b>5. Saving Time and Cost:</b>
                    <ul style="padding-left: 20px; margin-top:5px;">
                        <li>Saves time by instant data sharing.</li>
                        <li>Reduces the cost of paper and physical distribution.</li>
                    </ul>
                </div>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Components of a Network')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 3</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Transmission Media')">Next</button>
            </div>
        </div>
    `,

    "Transmission Media": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">MEDIUM OF CONNECTION</h3>
            <ul style="padding-left: 20px;">
                <li><b>Wired Connection:</b> Established using physical wires, ports, and connectors.</li>
                <li><b>Wireless Connection:</b> Established using Wi-Fi, Radio waves, Microwaves, Bluetooth, or Infrared.</li>
            </ul>

            <h3 style="color:#d35400; margin-top: 25px;">TYPES OF WIRED CONNECTIONS</h3>
            
            <h4 style="color:#2c3e50;">Coaxial Cable (Coax)</h4>
            <ul style="padding-left: 20px;">
                <li>Copper cable built with a metal shield to block signal interference.</li>
                <li>Used primarily by cable TV and telephone companies.</li>
                <li><b>Two Transmission Types:</b>
                    <ul>
                        <li><b>Baseband:</b> Transmits a single signal quickly for short distances.</li>
                        <li><b>Broadband:</b> Transmits multiple signals simultaneously for long distances.</li>
                    </ul>
                </li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Ethernet Twisted Pair</h4>
            <ul style="padding-left: 20px;">
                <li>The most common and widely used wire in a network.</li>
                <li>Consists of eight wires of different colors.</li>
                <li>Uses the <b>RJ45</b> cable connector at both ends.</li>
                <li><b>Attenuation:</b> The signal loss that occurs when a cable is stretched beyond its maximum distance capacity.</li>
            </ul>
            
            <div style="background:#f4f7f6; padding:15px; border:1px solid #ccc; text-align:center; margin-top:20px; font-weight: bold;">
                Sender ➔ Communication Medium ➔ Message ➔ Receiver
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Network Advantages')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 4</span>
                <button class="S-nav-btn" style="opacity:0.5;" disabled>Finish</button>
            </div>
        </div>
    `
};
