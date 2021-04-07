player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name + " : ";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn : " + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length = Math.floor(word.length/2);
    charAt2 = word.charAt(length);
    console.log(charAt2);
    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);
    console.log(charAt3);

    Remove_charAt1 = word.replace(charAt1 , "_");
    console.log(Remove_charAt1);
    Remove_charAt2 = Remove_charAt1.replace(charAt2 , "_");
    console.log(Remove_charAt2);
    Remove_charAt3 = Remove_charAt2.replace(charAt3 , "_");
    console.log(Remove_charAt3);

    Question_word = "<h4 id='word_display'> question : " + Remove_charAt3 + "</h4>";
    Input_box = "<br> answer : <input type='ibox' id='Input_check'> </input>";
    check_button = "<br><br> <button class='btn btn-info' onClick='check()'> check </button> <br> <br>";
    row = Question_word + Input_box + check_button;
    document.getElementById("Output").innerHTML=row;
    document.getElementById("word").value = "";
}

answer_turn = "player2";
question_turn = "player1";

function check()
{
    get_Answer = document.getElementById("Input_check").value;
    answer = get_Answer.toLowerCase();
    console.log(answer);
    if (answer == word)
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else 
        {
            player2_score = player2_score + 1;
            document.getElementById('player2_score').innerHTML = player2_score;
        }
    }
    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }
      
    if (answer_turn == "player2")
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }
    else
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }
    
    console.log("Ans = " + answer_turn);
    console.log("Quest = " + question_turn);

    document.getElementById("Output").innerHTML = "";
}