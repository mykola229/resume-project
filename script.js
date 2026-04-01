localStorage.setItem('os', navigator.platform);
localStorage.setItem('browser', navigator.userAgent);

const footerInfo = document.getElementById('footer-info');
footerInfo.style.fontSize = "0.8em";
footerInfo.style.color = "gray";
footerInfo.innerText = `OS: ${localStorage.getItem('os')} | Browser: ${localStorage.getItem('browser')}`;

const variant = 29; 
fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('comments-container');
        container.innerHTML = '';
        data.forEach(comment => {
            const div = document.createElement('div');
            div.style.borderBottom = "1px solid #ddd";
            div.style.padding = "10px 0";
            div.innerHTML = `
                <p><strong>Ім'я:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>`;
            container.appendChild(div);
        });
    })
    .catch(err => console.error("Помилка API:", err));
 
setTimeout(() => {
    document.getElementById('feedback-modal').style.display = 'block';
}, 60000); 

document.getElementById('close-modal').onclick = () => {
    document.getElementById('feedback-modal').style.display = 'none';
};

const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
};

function checkTimeTheme() {
    const hour = new Date().getHours();
    if (hour < 7 || hour >= 21) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
checkTimeTheme();