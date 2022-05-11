function changeTheme() {
    let theme = document.getElementById("theme").value;
    switch (theme) {
        case 'light':
            document.body.style.background = "white";
            break;
        case 'dark':
            document.body.style.background = "#373737";
            break;
        case 'black':
            document.body.style.background = "black";
            break;
        case 'pink':
            document.body.style.background = "pink";
            break;
        case 'yellow':
            document.body.style.background = "lightyellow";
            break;
    }
}