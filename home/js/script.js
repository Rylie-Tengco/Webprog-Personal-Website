new Vue({
    el: '#app',
    data: {
        currentSection: 'about'
    },
    methods: {
        showSection(section) {
            this.currentSection = section;
        }
    }
});
