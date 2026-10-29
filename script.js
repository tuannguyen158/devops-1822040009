function showMessage() {
    document.getElementById("message").innerText =
        "Chúc thầy có 1 ngày đầy năng lượng";
    const now = new Date();
    const time = now.toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
    localStorage.setItem("lastGreeting", time);
    document.getElementById("lastClick").innerText =
        "Lần ấn Lời chào gần nhất: " + time;
}
window.onload = function() {
    const lastTime = localStorage.getItem("lastGreeting");
    if (lastTime) {
        document.getElementById("message").innerText =
            "Chúc thầy 1 ngày đầy năng lượng";
        document.getElementById("lastClick").innerText =
            "Lần ấn Lời chào gần nhất: " + lastTime;
    }
};
