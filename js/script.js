Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 

    data: {
        currentIndex: 0,
        newText: '',
        searchChat: '',
        currentMessage: 2,
        user: data.user,
        contacts: data.contacts,
    },

    methods: {

        isReceived(status) {
            return (status === 'received') ? 'justify-content-start' : 'justify-content-end';
        },

        isContactMessage(status) {
            return (status === 'received') ? 'current-contact-message' : 'user-message';
        },

        selectedChat(i) {
            this.currentIndex = i; 
        },

        addUserMessage() {
            /* MODALITA' 1
            const newUserMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newText,
                status: 'sent',
            }; 

            if (this.newText && this.newText.trim() !== '') {
                this.contacts[this.currentIndex].messages.push(newUserMessage);
            } */

            //* MODALITA' 2/
            this.buildMessage(this.newText, 'sent');

            this.newText = '';


            setTimeout(() => {
                /* MODALITA' 1
                const newContactMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'ok',
                    status: 'received',
                };

                this.contacts[this.currentIndex].messages.push(newContactMessage); */

                //* MODALITA' 2/
                this.buildMessage('ok', 'received');


            }, 1000);
        },


        //* MODALITA' 2: creo funzione che costruisce l'oggetto-messaggio sia per il contatto sia per l'utente; poi sopra richiamo la funzione passando i paramentri/
        buildMessage(text, status) {
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: text,
                status: status,
            };

            this.contacts[this.currentIndex].messages.push(newMessage);
        },


        showChat(text) {

            let word = this.searchChat.trim();
            if (word === '') {
                return true;
            }

            const filter = word.toUpperCase();
            return text.toUpperCase().includes(filter);
        }, 

        openMenu(i){
           this.currentMessage = i;
       },

        isSelectedMessage(index) {
        return ((parseInt(index) == parseInt(this.currentMessage)) ? '' : 'hidden');
       },

    },

});