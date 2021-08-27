Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 

    data: {
        currentIndex: 0,
        newUserMessage: {
            date: '27/08/2021 17:05:29',
            message: '',
            status: 'sent',
        },
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
            let words = this.newUserMessage.message;

            if (words && words.trim() !== '') {
                this.newUserMessage.push(words);
                this.contacts.messages.push(newUserMessage);
            } 
            
            this.newUserMessage.message = '';
        }

    },

});