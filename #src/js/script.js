

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq__question');
    const answers = document.querySelectorAll('.faq__answer');
    const questionParent = document.querySelector('.faq__items');
    const plus = document.querySelectorAll('.faq__plus');
    const text = document.querySelectorAll('.faq__text');
    
    
    function hideAnswers() {
        answers.forEach(item => {
            item.classList.toggle('hide');
           
        })
    };
    
    function showAnswers(i) {  
        answers[i].classList.toggle('hide');  
    };
    questionParent.addEventListener('click', (e) => {
        const target = e.target;
        
        function getAnswer(tag) {
            tag.forEach((item, i) => {
                if (target == item) {      
                    showAnswers(i);
                };
            });
        }
        if (target) {
            getAnswer(questions);
            getAnswer(plus);
            getAnswer(text);
        };      
    });
})

