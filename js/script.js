Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root', 

    data: {
        currentIndex: 0,
        user: user,
        contacts: contacts,
        data: data,
    },

    methods: {

        isCurrentContact(i) {
            return (this.isCurrentIndex === i) ? 'current' : '';
        },

        selectedChat(i) {
            this.currentIndex = i; 
        },

    },

});