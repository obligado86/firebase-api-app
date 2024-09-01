const requestModal = document.querySelector('#modal-request');
      const loginModal = document.querySelector('#modal-login');
      const signupModal = document.querySelector('#modal-signup');

      const requestLink = document.querySelector('.add-request');
      const signupLink = document.querySelector('.sign-up-link');
      const signinLink = document.querySelector('.sign-in-link');

      // open request modal
      requestLink.addEventListener('click', () => {
        requestModal.classList.add('open');
      });

      // close request modal
      requestModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
          requestModal.classList.remove('open');
        }
      });

      // open login modal
      signinLink.addEventListener('click', () => {
        loginModal.classList.add('open');
      });

      // close login modal
      loginModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
          loginModal.classList.remove('open');
        }
      });

      // open signup modal
      signupLink.addEventListener('click', () => {
        signupModal.classList.add('open');
      });

      // close signup modal
      signupModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
          signupModal.classList.remove('open');
        }
      });