let navbarReplace;

async function getAllElements(){
  navbarReplace = document.getElementById("navbarReplace");
}
async function pageLoad()
{
  navbarReplace.innerHTML =
  `
  <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="aboutMe.html">About Me</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li class="dropdown">
            <a class="dropbtn">Created Games</a>
            <div class="dropdown-content-Games">
                <a href="goneText.html">Gone Text Based</a>
                <a href="gone2d.html">Gone 2D</a>
                <a href="unityShooter.html">Shooter</a>
            </div>
        </li>
        <li class="dropdown">
            <a class="dropbtn">Minecraft Specific</a>
            <div class="dropdown-content-Minecraft">
                <a href="dndMap.html">DnD Map</a>
                <a href="parkourMap.html">Parkour Map</a>
            </div>
        </li>
        <li class="dropdown">
            <a class="dropbtn">Websites</a>
            <div class="dropdown-content-Websites">
                <a href="Sims4Guide.html">Sims 4 Guide</a>
                <a href="portfolio.html">Portfolio</a>
            </div>
        </li>
    </ul>
  </nav>
  `;
}