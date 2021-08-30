Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 

    data: {
        currentIndex: 0,
        newText: '',
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
            let newUserMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newText,
                status: 'sent',
            };

            if (this.newText && this.newText.trim() !== '') {
                this.contacts[this.currentIndex].messages.push(newUserMessage);
            } 

            this.newText = '';
        }

    },

});