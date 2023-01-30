type MessageType = {
  loading: string,
  success: string,
  failure: string
}

export default class Form {
  forms: NodeListOf<HTMLFormElement>
  inputs: NodeListOf<HTMLInputElement>
  message: MessageType
  path: string

  constructor(forms: string, url: string) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка✌...',
      success: 'Спасибо, скоро мы с вами свяжемся!🎈',
      failure: 'Что то не так...😣'
    };
    this.path = '../assets/question.php';
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    })
  }

  checkMainInputs() {
    const mailInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[type="email"]');
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function (e): void {
                const key: string = e.key;
                 if(key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                 }
            })
        })
}

initMask() {
  const setCursorPosition = (pos: any, elem: any) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask (this:HTMLInputElement, e: Event): void  {

        const matrix: string = `+1 (___) ___-____`;
        let iterator: number = 0;
        const def: string = matrix.replace(/\D/g, '');
        let value: string = this.value.replace(/\D/g, '');
        
    
        if (def.length >= value.length) {
            value = def
        }
        this.value = matrix.replace(/./g, function (a: string): string {
            return /[_\d]/.test(a) && iterator < value.length ? value.charAt(iterator++) : iterator >= value.length ? '' : a;
        })

        if (e.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    }
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="phone"]');

    inputs.forEach(input => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
    })
}

  async postData(url: string, data: string) {
    const res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text()
  }
  init() {
    this.initMask()
    this.checkMainInputs()
    this.forms.forEach((form) => {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const statusMessage: HTMLDivElement = document.createElement('div');
        statusMessage.style.cssText = `
          margin-top: 15px;
          font-size: 18px;
          color: gray;
        `;
        
        (form as HTMLElement).parentNode?.append(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData: any = new FormData(form);
        this.postData(this.path, formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = this.message.success
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 6000)
          })
      })
    })
  }
}