        const greetingHeader = document.getElementById('greeting-header');
        const nameInput = document.getElementById('name-input');
        const greetButton = document.getElementById('greet-button');
        const boxes = document.querySelectorAll('.box');

        greetButton.addEventListener('click', () => {
            const userName = nameInput.value;
            if (userName) {
                greetingHeader.textContent = `Hello, ${userName}`;
            } else {
                greetingHeader.textContent = `Hello`; 
            }
        });

     
        boxes.forEach(box => {
            box.addEventListener('click', () => {
                const color = box.textContent.toLowerCase();
                box.style.backgroundColor = color;
                box.style.color = '#fff'; 
            });
        });