const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) => {
        e.preventDefault()
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_8ii265v','template_85g6ftk','#contact-form', 'VQaq6Rg_bXgUd7BNm')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
        })
      }

      contactForm.addEventListener('submit', sendEmail)