function changeHeading(desktop) {
  if (desktop.matches) {
    try {
      document.getElementById("index-header").innerHTML =
        "Celebrating International Year of Millets - 2023";
    } catch {}
  } else {
    try {
      document.getElementById("index-header").innerHTML = "IYoM - 2023";
    } catch {}
  }
}

var desktop = window.matchMedia("(min-width: 1000px)");
changeHeading(desktop);
desktop.addListener(changeHeading);

var sidebarTemplate = document.createElement("template");

sidebarTemplate.innerHTML = `
  <div id="sidebar-layer"></div>
  <div id="sidebar">
    <div class="sidebar-icon" onclick="window.location.href='/'">
      <i class="fa-solid fa-leaf"></i>
      <span class="sidebar-tip">Home</span>
      </a>
    </div>
    <div class="sidebar-icon" onclick="window.location.href='/play.html'">
      <i class="fa-solid fa-masks-theater"></i>
      <span class="sidebar-tip">About the play</span>
    </div>
    <!-- <div class="sidebar-icon" onclick="window.location.href='/'"> -->
    <!--   <i class="fa-solid fa-user"></i> -->
    <!--   <span class="sidebar-tip">Cast</span> -->
    <!-- </div> -->
    <div class="sidebar-icon" onclick="window.location.href='/shows.html'">
      <i class="fa-solid fa-ticket-alt"></i>
      <span class="sidebar-tip">Book shows</span>
    </div>
    <div class="sidebar-icon" onclick="window.location.href='/artistichumans.html'">
      <i class="fa-solid fa-question"></i>
      <span class="sidebar-tip">About us</span>
    </div>
  </div>
`;

document.body.insertBefore(sidebarTemplate.content, document.body.firstChild);

const sidebar = document.getElementById("sidebar");
const sidebarOpener = document.getElementById("sidebar-opener");
const sidebarLayer = document.getElementById("sidebar-layer");

function showSidebar() {
  sidebar.style.left = "0";
  sidebar.style.transition = "all 0.3s ease-in-out";
  sidebarLayer.style.display = "block";
}

function hideSidebar() {
  sidebar.style.left = "-100%";
  sidebar.style.transition = "all 0.3s ease-in-out";
  sidebarLayer.style.display = "none";
}

sidebarOpener.addEventListener("click", showSidebar);
sidebarLayer.addEventListener("click", hideSidebar);
