var app = document.getElementById("app");

function setAbout() {
  var typewriter = new Typewriter(app, {
    delay: 75,
    cursor: "█",
  });

  typewriter.pasteString(
    '<span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString("Hello world!");
  typewriter.pauseFor(500);
  typewriter.pasteString(
    '<br><span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString("My name is Afonso Raposo and welcome to my website");
  typewriter.pauseFor(500);
  typewriter.pasteString(
    '<br><span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString(
    "I am a programmer and here you can find everything about it!"
  );
  typewriter.start();
}

function setProjects() {
  var typewriter = new Typewriter(app, {
    delay: 75,
    cursor: "█",
  });
  typewriter.pasteString(
    '<span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString("My projects!");
  typewriter.pauseFor(500);
  typewriter.pasteString(
    '<br><span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString("These are the most popular ones");
  typewriter.pauseFor(500);
  typewriter.pasteString(
    '<br><span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString(
    "You can find the rest on my <a href='https://github.com/Afonsocraposo'><u>GitHub</u></a>"
  );

  typewriter.start();
}

function setSetup() {
  var typewriter = new Typewriter(app, {
    delay: 75,
    cursor: "█",
  });
  typewriter.pasteString(
    '<span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.pauseFor(500);

  typewriter.typeString("neofetch");
  typewriter.pauseFor(500);
  typewriter.pasteString(
    '<img id="neofetch" src="images/neofetch.png" alt="Neofetch" /><div style="height'
  );
  typewriter.pasteString(
    '<br><span style="color: greenyellow;">afonso@raposo</span>:<span style="color: lightblue;">~</span>$ '
  );
  typewriter.start();
}

function setInfo(evt, info) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";

  if (info != "setup") {
    document.getElementById("terminal-padded").style.height = "120px";
  }

  switch (info) {
    case "about":
      setAbout();
      document.getElementById(info).style.display = "block";
      break;
    case "projects":
      setProjects();
      document.getElementById(info).style.display = "block";
      break;
    case "setup":
      setSetup();
      document.getElementById("terminal-padded").style.height = "400px";
      document.getElementById(info).style.display = "block";
      break;
    default:
      setAbout();
  }
}

document.getElementById("projects").style.display = "none";
setAbout();
