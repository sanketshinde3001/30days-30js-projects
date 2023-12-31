function validateKey(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace','ArrowLeft', 'ArrowRight', '.', '+','-','*','/','%'];
    const key = event.key;
    if (!allowedKeys.includes(key) && isNaN(Number(key))) {
      event.preventDefault();
    }

    const inputValue = event.target.value;
    const hasDot = inputValue.includes('.');
    const hasPlus = inputValue.includes('+');
    const hasMinus = inputValue.includes('-');
    const hasMul = inputValue.includes('*');
    const hasdiv = inputValue.includes('/');
    const hasrem = inputValue.includes('%');

    if ((key === '.' && hasDot) || (key === '+' && hasPlus) || (key === '-' && hasMinus) || (key === '*' && hasMul) || (key === '/' && hasdiv) || (key === '%' && hasrem)) {
      event.preventDefault();
    }
  }


