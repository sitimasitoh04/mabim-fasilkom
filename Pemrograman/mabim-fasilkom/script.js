function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if (username == "himasi" && password == "himasi"){
        if(confirm("Apakah anda ingin login?")){
            window.location.href = "https://github.com/sitimasitoh04";
        } else {
            alert("Membatalkan login !");
        }
    } else{
        if(done==0){
            alert("Username/password Salah!");
        }
    }
}