const pathMap = {
  "/about": "https://manulogics.notion.site/https://manulogics.notion.site/About-Me-9a69783a6a104b06a5726f03b8449659&path=about",
  "/projects": "https://manulogics.notion.site/3e839863263948658a95588133b6a431?v=295eabf6bb794a93abba0e8ce8194c93&path=projects",
  "/projects/fay-keeper": "https://manulogics.notion.site/Fay-Keeper-400d1a9e709c4850b6caa1aabd47c13d&path=fay-keeper",
};

const currentPath = window.location.pathname;
const redirectUrl = pathMap[currentPath];

if (redirectUrl) {
  window.location.replace(redirectUrl);
} else {
  window.location.replace("https://manulogics.notion.site/main-portfolio-path"); 
}