document.addEventListener('DOMContentLoaded', () => {
  const pollTitleElement = document.getElementById('poll__title');
  const pollAnswersElement = document.getElementById('poll__answers');

  async function fetchPollData() {
    
      const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
      const data = await response.json();

      pollTitleElement.textContent = data.data.title;

      data.data.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => handleAnswerClick(data.id, answer));
        pollAnswersElement.appendChild(answerButton);
      });
    
  }


  async function handleAnswerClick(pollId, selectedAnswer) {


      alert('Спасибо, ваш голос засчитан!');

      pollAnswersElement.innerHTML = '';

      fetchPollData();
   }

  fetchPollData();
});