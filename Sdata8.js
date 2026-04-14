// Sdata8.js - Class 8 Unit 1 (Pointwise Format - No Images)

const Sdata8Menu = [
  {
    "id": "c8-u1",
    "title": "1. Networking Concepts",
    "topics": [
        "Introduction to Networking", 
        "Components of a Network", 
        "Network Advantages", 
        "Transmission Media",
        "Wireless Networking Technology",
        "Networking Devices",
        "Connectors and Security"
    ]
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
                <li><b>Straight cable:</b> It will connect one computer to a router or switch.</li>
                <li><b>Crossover cable:</b> It connects two computers to each other without a switch or hub in-between.</li>
                <li>Ethernet cable has improved and is now available up to a gigabit per second speed.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Optical Fiber</h4>
            <ul style="padding-left: 20px;">
                <li>An optical fiber cable is a type of cable that has a number of optical fibers bundled together, which are normally covered in their individual protective plastic covers.</li>
                <li>Optical cables are used to transfer digital data signals in the form of light, up to distance of hundreds of miles, with a larger capacity to transfer data at a very high speed.</li>
                <li>An optical fiber has replaced all other wired media because of its high speed, bandwidth and highly resistant to signal interference.</li>
                <li>With all the advantages, it also has some limitations, it is very fragile and the maintenance cost is also very high.</li>
            </ul>
            
            <div style="background:#f4f7f6; padding:15px; border:1px solid #ccc; text-align:center; margin-top:20px; font-weight: bold;">
                Sender ➔ Communication Medium ➔ Message ➔ Receiver
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Network Advantages')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 4</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Wireless Networking Technology')">Next</button>
            </div>
        </div>
    `,

    "Wireless Networking Technology": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">Wireless Networking Technology</h3>
            
            <h4 style="color:#2c3e50;">Infrared Signals</h4>
            <ul style="padding-left: 20px;">
                <li>Infrared (or commonly called IR) is a wireless mobile technology used for device communication over short distances (same technology which we use in remote controls).</li>
                <li>In IR, light-emitting diodes (LEDs) are used to transmit IR signals, which pass through a lens and focus into a beam of IR data.</li>
                <li>The beam source is rapidly switched on and off for data encoding.</li>
                <li>IR communication has major limitations because it requires line-of-sight, has a short transmission range and it is unable to penetrate walls.</li>
                <li>IR transceivers are quite cheap and serve as short-range communication solutions.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Bluetooth</h4>
            <ul style="padding-left: 20px;">
                <li>Bluetooth technology is a short-range wireless communication technology to replace the cables connecting two electronic devices.</li>
                <li>Allowing a person to have a phone conversation via a headset, use a wireless mouse and synchronize information from a mobile phone to a PC, all using Bluetooth system.</li>
                <li>Depending upon the Bluetooth version you are using, the transmission can be up to 240 meters.</li>
                <li>All devices which are Bluetooth enabled will have the Bluetooth sign or logo.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Wi-Fi</h4>
            <ul style="padding-left: 20px;">
                <li>Wi-Fi (or Wireless Fidelity) is a technology that uses radio waves to provide network connectivity.</li>
                <li>A connection is established using a wireless adapter in the vicinity of a wireless router that are connected to the network and allow users to access network.</li>
                <li>The major advantage of Wi-Fi is that it is compatible with almost every operating system, game device, and advanced printers.</li>
                <li>Like in mobile phones, a Wi-Fi network makes use of radio waves to transmit information across a network.</li>
                <li>A computer should include a wireless adapter that will translate data sent into a radio signal.</li>
                <li>This same signal will be transmitted, via an antenna, to a decoder known as the Router. Once decoded, the data will be sent to the Internet through a wired Ethernet connection.</li>
            </ul>

            <p><b>The advantages of using Wi-Fi are as follows:</b></p>
            <ul style="padding-left: 20px;">
                <li>Wi-Fi has the capability to replace wired communication completely as Wi-Fi is compatible with almost every device.</li>
                <li>Through Wi-Fi, you can get connected to multiple devices.</li>
                <li>It is much cheaper technology as compared to wired network as running of cables is not required.</li>
                <li>Can also be installed at places where wired communication cannot reach.</li>
            </ul>

            <p><b>Following are the disadvantages of using Wi-Fi:</b></p>
            <ul style="padding-left: 20px;">
                <li>The signals over Wi-Fi cannot travel long distances.</li>
                <li>The speed of data transmission is slower than wired (physical) media.</li>
                <li>It requires additional power source for the Wi-Fi router.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Transmission Media')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 5</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Networking Devices')">Next</button>
            </div>
        </div>
    `,

    "Networking Devices": `
        <div class="S-book-page">
            <h3 style="color:#d35400;">Other Networking Devices/components</h3>

            <h4 style="color:#2c3e50;">Modem (Modulator-Demodulator)</h4>
            <ul style="padding-left: 20px;">
                <li>To connect to a network like Internet, we also use public networks like telephone networks.</li>
                <li>Modem is used to connect computers via telephone lines.</li>
                <li>It modulates the digital data into a telephone compatible analog signals at sender's side and demodulates the analog signals back into digital signals at receiver's side.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Switch/Hub</h4>
            <ul style="padding-left: 20px;">
                <li>When a network has more than two computers, then we need a central point of connection through which all the computers are connected on a network.</li>
                <li>In wired networking this function is performed by Switch/Hub.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Repeater</h4>
            <ul style="padding-left: 20px;">
                <li>When the signals are transmitted through a wire like coaxial or Ethernet to a long distance, they tend to loose and distort signals.</li>
                <li>Repeaters are signal boosters which clean, filter and retransmit, so that new boosted signals can travel long distances with same strength.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Bridge</h4>
            <ul style="padding-left: 20px;">
                <li>Bridge is a networking device which is used to connect two similar networks like two LANs.</li>
                <li>The bridge connects the two subnets (LANs) and manages the traffic flow between them.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Router</h4>
            <ul style="padding-left: 20px;">
                <li>It is networking device which is used to connect similar networks but may have different protocols (rules governing networks) like two LANs, or a LAN and a WAN.</li>
                <li>Routers are very important in controlling the traffic and keeping the network efficient.</li>
            </ul>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Wireless Networking Technology')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 6</span>
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Connectors and Security')">Next</button>
            </div>
        </div>
    `,

    "Connectors and Security": `
        <div class="S-book-page">
            <h4 style="color:#2c3e50;">Gateway</h4>
            <ul style="padding-left: 20px;">
                <li>Gateway is a device which connects dissimilar networks.</li>
                <li>A network gateway joins two networks as the devices on one network can communicate with the devices on another network.</li>
                <li>A gateway can be implemented completely in software, hardware, or a combination of both.</li>
                <li>Gateways are also called network protocol converters.</li>
                <li>Often the two networks that a gateway joins, use different base protocols. The gateway facilitates compatibility between the two protocols.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Firewall</h4>
            <ul style="padding-left: 20px;">
                <li>A firewall is a system designed to prevent unauthorized access to or from a private network.</li>
                <li>We can implement a firewall either in hardware or software form, or a combination of both.</li>
                <li>Firewalls prevent unauthorized internet users from accessing private networks connected to the internet, especially intranets.</li>
                <li>All messages entering or leaving the intranet must pass through the firewall, which examines each message and blocks those that do not meet the specified security criteria.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">RJ45 Connectors</h4>
            <ul style="padding-left: 20px;">
                <li>RJ (Registered Jack) 45 is an 8-pin connector which is used to connect Ethernet cable to a switch or to a NIC.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">BNC connector</h4>
            <ul style="padding-left: 20px;">
                <li>The BNC (Bayonet Neill–Concelman) connector is a miniature quick connect/disconnect connector used for coaxial cable.</li>
            </ul>

            <h4 style="color:#2c3e50; margin-top: 20px;">Link</h4>
            <ul style="padding-left: 20px;">
                <li>Link is the channel or line that connects two devices. These links are used to transmit information between two or more devices in the network.</li>
            </ul>

            <div style="background:#f4f7f6; padding:15px; border-radius:10px; margin-top:20px; font-style: italic; border-left: 5px solid #d35400;">
                <p><b>Quick Knowledge:</b> Website is a collection of webpages uploaded on the Internet. It generally belongs to an organization, a government or an individual. A Webpage not only contains text and images but also imbed graphics, videos and other digital media. These pages are hosted on WWW (World Wide Web).</p>
                <p><b>Let's know that:</b> A web portal is a specially designed website that often serves as a single point of access for information. A web portal helps in search, navigation, personalization, notification and information integration, and often provides features like task management, collaboration, business intelligence and application integration.</p>
            </div>

            <div class="S-page-nav" style="display:flex; justify-content:space-between; margin-top:30px; padding:20px 0; border-top:1px solid #eee;">
                <button class="S-nav-btn" onclick="loadS678Content('1. Networking Concepts', 'Networking Devices')">Back</button>
                <span style="font-weight:bold; color:#888;">Page 7</span>
                <button class="S-nav-btn" style="opacity:0.5;" disabled>Finish</button>
            </div>
        </div>
    `
};
