Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 

    data: {
        currentIndex: 0,
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

    },

});