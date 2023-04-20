const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function classificarEmail(email) {
    if(email.match(regex) != null) {
        return true;
    } else {
        return false;
    }
}