const { createApp, ref } = Vue;
    createApp({
      setup() {
        const numInput = ref(0);
        const msg = ref('Start guessing');
        const result = ref(Math.floor(Math.random() * 100) + 1);
        const resultCheck = () => {
          if (numInput.value === result.value) {
            msg.value = 'You got it!';
          } else if (numInput.value > result.value) {
            msg.value = 'Guess lower';
          } else {
            msg.value = 'Guess higher';
          }
        };
        const displayGuess = () => {
          msg.value = `The number is ${result.value}`;
        };
        const generateNum = () => {
          result.value = Math.floor(Math.random() * 100) + 1;
          msg.value = 'Start guessing';
          numInput.value = 0;
        };
        return {
          numInput,
          msg,
          result,
          resultCheck,
          displayGuess,
          generateNum
        };
      }
    }).mount('#app');