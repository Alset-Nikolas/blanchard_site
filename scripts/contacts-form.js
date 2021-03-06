var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);

new JustValidate(".contacts__form",{
rules: {
    name: {
        required: true,
        minLength: 2,
        maxLength: 15,
    },
    tel:{
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
        }
  },
},
messages: {
  name: {
    required: 'Недопустимый формат',
    minLength: 'Минимум 2 символа',
    maxLength: 'Максимум 15 символов',
    },
  tel:{
    required: 'Недопустимый формат',
    function: 'Недопустимый формат',
    }
  },
submitHandler:function(form) {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
      if (xhr.status === 200)
      console.log("Отправлено");
    }
  }
  xhr.open('POST', 'mail.php', true);
  xhr.send(formData)

  form.reset();
}

});


