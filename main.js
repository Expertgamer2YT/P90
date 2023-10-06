function adduser(){
    player1_name = document.getElementById("text").value;
    player2_name = document.getElementById("text2").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="game_page.html";
}